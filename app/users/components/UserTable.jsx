
const tableHead = ["Id", "User Name", "Age", "Phone", "Email", "Address"];

export default function UserTable({ users }) {
    return (
        <div className="w-full">
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full">
                    <thead className="bg-cyan-700 text-white">
                        <tr className="border">
                            {tableHead.map((tableContent) =>
                                <th
                                    key={tableContent}
                                    className="text-left py-3 px-4 uppercase font-semibold">
                                    {tableContent}
                                </th>)}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className='border'
                            >
                                <td className="text-left py-3 px-4"><a className="hover:text-cyan-500" href="tel:622322662">{user.user_id}</a></td>
                                <td className="text-left py-3 px-4 font-medium">{user.full_name}</td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">{user.age}</span></td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">{user.phone}</span></td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">{user.email}</span></td>
                                <td className="text-left py-3 px-4"><span className="hover:text-cyan-500">{user.address}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
