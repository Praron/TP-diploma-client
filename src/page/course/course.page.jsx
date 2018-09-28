import React from 'react';
import './course.page.less';

import Button from '../../components/button/button.jsx';
import Course from '../../components/course/course.jsx';
import {getCourse} from '../../actions/course.action';
import {connect} from 'react-redux';

class CoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleAddCourse = this.handleAddCourse.bind(this);

        this.props.getCourse();
    }

    render() {
        const {courses} = this.props;

        const coursesBlock = this._getCourse(courses);

        return (
            <div className='container'>

                {coursesBlock}

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

    _getCourse(courses) {
        return courses.map(({inquirerId, inquirerTitle, inquirerStartTime, inquirerEndTime, tests}) => (
            <Course
                key={inquirerId}
                inquirerTitle={inquirerTitle}
                inquirerStartTime={inquirerStartTime}
                inquirerEndTime={inquirerEndTime}
                tests={tests}
            />
        ));
    }

    handleClickSave() {

    }

    handleAddCourse() {

    }
}

function mapStateToProps(state) {
    return {
        courses: state.course.courses,
        isLoading: state.course.isLoading
    };
}

const mapDispatchToProps = (dispatch) => ({
    getCourse: (params) => dispatch(getCourse(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
