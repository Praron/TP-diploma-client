import React from 'react';
import './inquirer.page.less';

import Button from '../../components/button/button.jsx';
import Inquirer from '../../components/inquirer/inquirer.jsx';
import {connect} from 'react-redux';
import {generateId} from '../../service/generate-id';
import {
    getInquirer,
    addInquirer,
    addTest,
    addCategory,
    saveInquirer,
    saveTest,
    saveCategory
} from '../../actions/inquirer.action';
import PropTypes from 'prop-types';


class InquirerPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddInquirer = this.handleAddInquirer.bind(this);
        this.handleSaveInquirer = this.handleSaveInquirer.bind(this);
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
                        handleClick={this.handleAddInquirer}
                        style={'default'}
                    />
                </footer>
            </div>
        );
    }

    _getCourse() {
        const {addTest, addCategory, saveInquirer, saveTest, saveCategory} = this.props;

        return this.props.inquirers.map(({inquirerId, inquirerTitle, inquirerStartDate, inquirerEndDate, tests}) => (
                <Inquirer
                    key={inquirerId}
                    inquirerTitle={inquirerTitle}
                    inquirerStartTime={inquirerStartDate}
                    inquirerEndTime={inquirerEndDate}
                    tests={tests}
                    handleAddTest={addTest}
                    inquirerId={inquirerId + ''}
                    handleAddCategory={addCategory}
                    handleSaveInquirer={saveInquirer}
                    handleSaveTest={saveTest}
                    handleSaveCategory={saveCategory}
                />
            )
        );
    }

    handleSaveInquirer() {

    }

    handleAddInquirer() {
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
    getInquirer: params => dispatch(getInquirer(params)),

    addInquirer: params => dispatch(addInquirer(params)),
    saveInquirer: (inquirerId, inquirerTitle, inquirerStartTime, inquirerEndTime) =>
        dispatch(saveInquirer(inquirerId,inquirerTitle, inquirerStartTime, inquirerEndTime)),

    addTest: (params, inquirerId) => dispatch(addTest(params, inquirerId)),
    saveTest: (inquirerId, testId, testTitle, testLimit) =>
        dispatch(saveTest(inquirerId, testId, testTitle, testLimit)),

    addCategory: (params, inquirerId, testId) => dispatch(addCategory(params, inquirerId, testId)),
    saveCategory: (inquirerId, testId, categoryId, categoryTitle) =>
        dispatch(saveCategory(inquirerId, testId, categoryId, categoryTitle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InquirerPage);

InquirerPage.propTypes = {
    addCategory: PropTypes.func,
    addTest: PropTypes.func,
    addInquirer: PropTypes.func,
    getInquirer: PropTypes.func,
    inquirers: PropTypes.array,
    isLoading: PropTypes.bool,
    saveInquirer: PropTypes.func,
    saveTest: PropTypes.func,
    saveCategory: PropTypes.func
};
