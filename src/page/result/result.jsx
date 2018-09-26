import React from 'react';
import Table from '../../components/table/table.jsx';

import './result.less';

export default class Result extends React.Component {
    render() {

        const data = [
                ['Alexander', 345345, 887423],
                ['Paul', 2347, 76323],
                ['Larisa', 745, 54234],
            ];

        return (
            <div className='container'>
                <div className='result'>
                    <Table data={data} />
                </div>
            </div>
        );
    }
}
