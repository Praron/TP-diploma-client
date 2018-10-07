import React from 'react';
import './inquirer.page.less';

import Button from '../../components/button/button.jsx';
import Inquirer from '../../components/inquirer/inquirer.jsx';
import {connect} from 'react-redux';
import {generateId} from '../../service/generateID';
import {
    getInquirer,
    addInquirer,
    addTest
} from '../../actions/inquirer.action';

//TODO убрать state, оставить пропс

class InquirerPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddCourse = this.handleAddCourse.bind(this);
    }

    componentDidMount() {
        this.props.getInquirer();
    }

    render() {
        const inquirersBlock = this._getCourse();

        return (
            <div className='container'>

                {inquirersBlock}

                <footer className='footer'>

                    <Button
                        text={'Добавить опрос'}
                        handleClick={this.handleAddCourse}
                        style={'default'}
                    />
                </footer>
            </div>
        );
    }

    _getCourse() {
        return this.props.inquirers.map(({inquirerId, inquirerTitle, inquirerStartDate, inquirerEndDate, tests}) => (
            <Inquirer
                key={inquirerId}
                inquirerTitle={inquirerTitle}
                inquirerStartTime={inquirerStartDate}
                inquirerEndTime={inquirerEndDate}
                tests={tests}
                handleAddTest={this.props.addTest}
                inquirerId={inquirerId}
            />
        ));
    }

    handleAddCourse() {
        this.props.addInquirer({
            inquirerId: `${generateId()}`,
            inquirerTitle: '',
            inquirerStartTime: '2018-07-22',
            inquirerEndTime: '2018-07-22',
            tests: [
                {
                    categories: [
                        {
                            questions: []
                        }
                    ]
                }
            ]
        });
    }
}

function mapStateToProps(state) {
    return {
        inquirers: state.inquirer.inquirers,
        isLoading: state.inquirer.isLoading
    };
}

const mapDispatchToProps = (dispatch) => ({
    getInquirer: (params) => dispatch(getInquirer(params)),
    addInquirer: (params) => dispatch(addInquirer(params)),
    addTest: (params, inquirerId) => dispatch(addTest(params, inquirerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(InquirerPage);
