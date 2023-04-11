import React from 'react';

const DashboardOrderdata = (props) => {
    const { id, name, price, stock, img } = props.order;
    return (
        <tr className="hover">
            {/* key={customer.id} */}
            {/* <th>{img}</th> */}
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
        </tr>
    );
};

export default DashboardOrderdata;