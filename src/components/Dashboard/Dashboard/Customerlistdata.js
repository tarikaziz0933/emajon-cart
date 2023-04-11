import React from 'react';

const Customerlistdata = (props) => {
    return (
        <tr className="hover">
            {/* key={customer.id} */}
            <th>{props.customer.id}</th>
            <td>{props.customer.name}</td>
            <td>{props.customer.phone}</td>
            <td>{props.customer.date}</td>
        </tr>
    );
};

export default Customerlistdata;