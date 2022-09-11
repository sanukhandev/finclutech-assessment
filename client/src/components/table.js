import { Link } from "react-router-dom";

const Table = (props) => {
    const { data, columns, deleteCallBack } = props;
    const onClickDelete = (event) => {
        deleteCallBack(event.target.value);
    }
    return (
        <table className="min-w-full">
            <thead className="bg-white border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                    </th>
                    {
                        columns.map((column, index) => {
                            return (
                                <th scope="col" key={`column-head-index-${index}`} className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    {column.label}
                                </th>
                            )
                        })

                    }
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr className="bg-white" key={item.ID}>

                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                            {item['ID']}
                        </td>
                        {
                            columns.map((column, index) => {
                                return (

                                    <td key={`column-index-${index}`} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                        <Link
                                            to={{
                                                pathname: `/student/${item._id}`,
                                            }}
                                        >{item[column.field]}</Link>
                                    </td>
                                )
                            })
                        }
                        <td  className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                to={{
                                    pathname: `/student/${item._id}`,
                                }}
                            >Edit</Link>
                            <button onClick={onClickDelete} value={item._id} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
