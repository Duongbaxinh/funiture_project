import React, { useState } from 'react';
import { FaBorderAll } from "react-icons/fa";
import { MdManageAccounts, MdOutlineProductionQuantityLimits } from "react-icons/md";
import '../../styles.scss';
const manages = [
    {
        title: 'Quản lý sản phẩm',
        icon: <MdOutlineProductionQuantityLimits />,
        type: 'product'
    },
    {
        title: 'Quản lý tài khoản',
        icon: <MdManageAccounts />,
        type: 'account'
    },
    {
        title: 'Quản lý đơn hàng',
        icon: <FaBorderAll />,
        type: 'order'
    },
]
function Sidebar(props) {
    const [manageState, setManageState] = useState('product')
    return (
        <div className="slideBar">
            <h1>Admin</h1>
            <ul>
                {manages.map(({ icon, title, type }) => (
                    <li key={type} className={`${(type === manageState) ? 'itemselected' : ''}`} onClick={() => setManageState(type)} >
                        {icon} {title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;