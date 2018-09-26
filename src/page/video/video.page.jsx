import React from 'react';

import Select from '../../components/select/select.jsx';
import Button from '../../components/button/button.jsx';

import './video.page.less';
//TODO разбить на компоненты

export default class VideoPage extends React.Component {
    constructor() {
        super();

        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <div className='container'>
                <div className='video__wrapper'>

                    <div className='video'>
                        <div className='video__elem'>
                            <video src=''>видео</video>
                        </div>
                        <div className='video__menu'>
                            <div className='video__menu-select'>
                                <Select
                                    options={[
                                        {
                                            label: '1 Балл',
                                            value: 'score1'
                                        },
                                        {
                                            label: '2 Балла',
                                            value: 'score2'
                                        },
                                        {
                                            label: '3 Балла',
                                            value: 'score3'
                                        },
                                        {
                                            label: '4 Балла',
                                            value: 'score4'
                                        },
                                        {
                                            label: '5 Баллов',
                                            value: 'score5'
                                        }
                                    ]}
                                    handleSelect={this.handleSelect}
                                    typeSelect={'score1'}
                                />
                            </div>

                            <div className='video__menu-button'>
                                <Button
                                    text={'Сохранить'}
                                    type={'success'}
                                />
                            </div>
                        </div>

                    </div>

                    <div className='video'>
                        <div className='video__elem'>
                            <video src=''>видео</video>
                        </div>
                        <div className='video__menu'>
                            <div className='video__menu-select'>
                                <Select
                                    options={[
                                        {
                                            label: '1 Балл',
                                            value: 'score1'
                                        },
                                        {
                                            label: '2 Балла',
                                            value: 'score2'
                                        },
                                        {
                                            label: '3 Балла',
                                            value: 'score3'
                                        },
                                        {
                                            label: '4 Балла',
                                            value: 'score4'
                                        },
                                        {
                                            label: '5 Баллов',
                                            value: 'score5'
                                        }
                                    ]}
                                    handleSelect={this.handleSelect}
                                    typeSelect={'score1'}
                                />
                            </div>

                            <div className='video__menu-button'>
                                <Button
                                    text={'Сохранить'}
                                    type={'success'}
                                />
                            </div>
                        </div>

                    </div>

                    <div className='video'>
                        <div className='video__elem'>
                            <video src=''>видео</video>
                        </div>
                        <div className='video__menu'>
                            <div className='video__menu-select'>
                                <Select
                                    options={[
                                        {
                                            label: '1 Балл',
                                            value: 'score1'
                                        },
                                        {
                                            label: '2 Балла',
                                            value: 'score2'
                                        },
                                        {
                                            label: '3 Балла',
                                            value: 'score3'
                                        },
                                        {
                                            label: '4 Балла',
                                            value: 'score4'
                                        },
                                        {
                                            label: '5 Баллов',
                                            value: 'score5'
                                        }
                                    ]}
                                    handleSelect={this.handleSelect}
                                    typeSelect={'score1'}
                                />
                            </div>

                            <div className='video__menu-button'>
                                <Button
                                    text={'Сохранить'}
                                    type={'success'}
                                />
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        );
    }

    handleSelect(value) {
        console.log(value);
    }
}
