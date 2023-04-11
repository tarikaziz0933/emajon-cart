import data from '../../components/Json/orders.json'
import DashboardOrderdata from './DashboardOrderdata';

const DashboardOrder = () => {
    const { OrderData } = data;

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
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            OrderData.map(order => <DashboardOrderdata
                                key={order.id}
                                order={order}
                            ></DashboardOrderdata>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardOrder;