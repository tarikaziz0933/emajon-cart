import React, { useEffect, useState } from 'react';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('customers.json')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])
    return (
        <div>
            <h1 className='text-xl font-bold'>Customers List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>Join Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            customers.map(customer =>
                                <tr className="hover">
                                    <th>{customer.id}</th>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.date}</td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerList;