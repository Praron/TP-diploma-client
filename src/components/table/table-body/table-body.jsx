import React from 'react';


const TableBody = ({data}) => {
    return (
        <tbody>
        {data.map((element, index) =>
            <tr key={index}>
                {element.map((item, i) =>
                    <td key={i}>{item}</td>
                )}
            </tr>
        )}
        </tbody>
    );
};

export default TableBody;
