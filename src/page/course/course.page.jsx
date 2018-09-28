import React from 'react';
import './course.page.less';

import Button from '../../components/button/button.jsx';
import Course from '../../components/course/course.jsx';
import {getCourse} from '../../actions/course.action';
import {connect} from 'react-redux';

class CoursePage extends React.Component {
    constructor() {
        super();

        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleAddCourse = this.handleAddCourse.bind(this);
    }

    render() {
        return (
            <div className='container'>

                <Course />

                <footer className='footer'>

                    <Button
                        text={'Добавить курс'}
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

    handleClickSave() {

    }

    handleAddCourse() {

    }
}

function mapStateToProps(state) {
    return {
        courses: state.login.courses,
        isLoading: state.login.isLoading
    };
}

const mapDispatchToProps = (dispatch) => ({
    getCourse: (params) => dispatch(getCourse(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
