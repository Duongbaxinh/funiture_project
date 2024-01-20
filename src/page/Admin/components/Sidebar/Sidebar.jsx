import React from 'react';
import { FaBorderAll } from "react-icons/fa";
import { MdManageAccounts, MdOutlineProductionQuantityLimits } from "react-icons/md";
const manages = [
    {
        title: 'Quản lý sản phẩm',
        icon: <MdOutlineProductionQuantityLimits />,
        type: 'product'
    },
    {
        title: 'Quản lý tài khoản',
        icon: <MdManageAccounts />,
        type: 'product'
    },
    {
        title: 'Quản lý đơn hàng',
        icon: <FaBorderAll />,
        type: 'product'
    },
]
function Sidebar(props) {
    return (
        <div className="slideBar">
            <h1>Admin</h1>
            <ul>
                {manages.map(({ icon, title, type }) => (
                    <li key={type}>
                        {icon} {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;