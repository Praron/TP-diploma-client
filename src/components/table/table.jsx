import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './table-header/table-header.jsx';
import TableBody from './table-body/table-body.jsx';

import './table.less';

const TABLE_COLUMNS = [
    {
        label: 'Name',
    },
    {
        label: 'ID',
    },
    {
        label: 'Count',
    }
];

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            column: TABLE_COLUMNS,
        };
    }

    componentWillMount() {
        const { data } = this.props;
        this.setState({ data });
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this.setState({ data });
    }

    render() {
        const {column, data } = this.state;

        return (
            <table className={'table'}>
                <TableHeader columns={column} />
                <TableBody data={data} />
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array,
};
