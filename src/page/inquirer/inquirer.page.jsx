import React from 'react';
import './inquirer.page.less';

import Button from '../../components/button/button.jsx';
import Inquirer from '../../components/inquirer/inquirer.jsx';
import {getInquirer} from '../../actions/inquirer.action';
import {connect} from 'react-redux';

class InquirerPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleAddCourse = this.handleAddCourse.bind(this);


        this.state = {
            courses: this.props.courses || []
        };
    }

    componentDidMount() {
        this.props.getInquirer();
        setTimeout(() => {this.setState({courses: this.props.courses});}, 300);
    }

    render() {
        const coursesBlock = this._getCourse();

        return (
            <div className='container'>

                {coursesBlock}

                <footer className='footer'>

                    <Button
                        text={'Добавить опрос'}
                        handleClick={this.handleAddCourse}
                        style={'default'}
                    />

                    <Button
                        text={'Сохранить'}
                        handleClick={this.handleClickSave}
                        style={'success'}
                    />

                </footer>
            </div>
        );
    }

    _getCourse() {
        return this.state.courses.map(({inquirerId, inquirerTitle, inquirerStartDate, inquirerEndDate, tests}) => (
            <Inquirer
                key={inquirerId}
                inquirerTitle={inquirerTitle}
                inquirerStartTime={inquirerStartDate}
                inquirerEndTime={inquirerEndDate}
                tests={tests}
            />
        ));
    }

    handleAddCourse() {
        this.setState({courses: this.state.courses.concat({
            inquirerTitle: '',
            inquirerStartTime: '2018-07-22',
            inquirerEndTime: '2018-07-22',
            tests: []
        })});
    }

    handleClickSave() {

    }
}

function mapStateToProps(state) {
    return {
        courses: state.course.courses,
        isLoading: state.course.isLoading
    };
}

const mapDispatchToProps = (dispatch) => ({
    getInquirer: (params) => dispatch(getInquirer(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(InquirerPage);
