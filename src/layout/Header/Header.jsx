import React, { useEffect, useRef, useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { ReactComponent as SvgIconShop } from '../../assets/svg/icon_store.svg'
import { ReactComponent as SvgIconCancel } from '../../assets/svg/icon_cancel.svg'
import { ReactComponent as SvgIconArrowDown } from '../../assets/svg/icon_arrowDown.svg'
import { ReactComponent as SvgIconSearch } from '../../assets/svg/icon_search.svg'
import { ReactComponent as SvgIconUser } from '../../assets/svg/icon_user.svg'
import { ReactComponent as SvgIconCart } from '../../assets/svg/icon_cart.svg'
import { ReactComponent as SvgIconMenu } from '../../assets/svg/icon_menu.svg'
import GroupButton from '../../components/smaler/GroupButton/GroupButton';
import './styles.scss'
import { Link } from 'react-router-dom';
import TabPage from './TabPage';
import DrawerContrainer from '../../components/smaler/Drawer/DrawerContrainer';
import Search from './Search';
import CardSamall from '../../page/Cart/CardSmall/CardSamall';
import { CartContextState } from '../../context/ProductCartContext';
Header.propTypes = {

};
const tabPage = [
    {
        nameTab: 'Home',
        endPoint: '/home',
        icon: <IoHomeSharp />
    },
    {
        nameTab: 'Shop',
        endPoint: '/shop',
        icon: <CiShop />
    },
    {
        nameTab: 'Category',
        endPoint: '/category',
        icon: <TbCategoryFilled />
    },
    {
        nameTab: 'Product',
        endPoint: '/product',
        icon: <MdProductionQuantityLimits />

    },
    {
        nameTab: 'Contact Us',
        endPoint: '/contact',
        icon: <MdEmail />
    },
]
const address = [
    'DaNang,Nguyen Trai,09',
    'DaNang,Tien Son,08',
    'DaNang,Xo Viet Nghe Tinh,33',
    'DaNang,Nguyen Van Linh,09',
    'DaNang,To Huu,18',
]

function Header(props) {
    const headerRef = useRef(null)
    const { dataProduct, handleQuantity, handleRemoveProduct } = CartContextState()
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.scrollY
    })
    const [citySelected, setCitySelected] = useState(address[0])
    const [showAddress, setShowAddress] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [isSelected, setIsSelected] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const handleSelected = (value) => {
        setIsSelected(value)
    }
    const handleSetShowAddress = () => {
        setShowAddress(!showAddress)
    }
    const handleSetCitySelected = (value) => {
        setCitySelected(address[value])
    }
    const handleShowMenu = () => {
        if (screen.width < 650) {
            setShowMenu(!showMenu)
        }
    }
    const handleShowCart = () => {
        console.log('check run show cart', showCart)
        setShowCart(!showCart)
    }
    useEffect(() => {
        try {
            const updateWidth = () => {
                setScreen({ ...screen, width: window.innerWidth })
            }
            window.addEventListener('resize', updateWidth)
            // window.addEventListener('scroll',)
            return () => window.removeEventListener('resize', updateWidth)
        } catch (error) {

        }
    }, [screen])
    const icons = [
        {
            handle: handleShowCart,
            icon: <SvgIconSearch />
        },
        {
            handle: handleShowCart,
            icon: <SvgIconUser />
        },
        {
            handle: handleShowCart,
            icon: <SvgIconCart />
        },

    ]
    return (
        <div ref={headerRef} className='header'>
            <div className='header_top'>
                <div className='header_top--left'>
                    <SvgIconShop />
                    <p>{citySelected}</p>
                    <div className='header_top--icondown'
                        onClick={handleSetShowAddress}
                        style={{ cursor: 'pointer', position: 'relative' }}>
                        <SvgIconArrowDown />
                        {showAddress && <div className='header_top--address'>
                            {address.map((item, index) =>
                                <div
                                    onClick={() => handleSetCitySelected(index)}
                                    style={{ display: 'flex', gap: '5px', placeItems: 'center', }}>
                                    <i><SvgIconShop /></i>
                                    <p key={index}>{item}</p>
                                </div>
                            )}
                        </div>}
                    </div>

                </div>
                <div className='header_top--right'>
                    <GroupButton
                        items={['Shipping', 'Take away']}
                        onSelected={handleSelected}
                        isSelected={isSelected}
                    />
                </div>
            </div>
            <div className='header_bottom'>
                {screen.width < 650 ?
                    // ICON MENU
                    <div header_bottom--iconMenu>
                        <i className='icon'
                            onClick={handleShowMenu}
                        ><SvgIconMenu /> </i>
                        {/* DRAWER */}
                        {showMenu &&
                            <div>
                                <DrawerContrainer onShowMenu={handleShowMenu} position={'left'} >
                                    <ul className='header_menu'>
                                        <li>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <h1 className='header_bottom--icon'>Iconic</h1>
                                                <i className='icon'
                                                    onClick={handleShowMenu}>
                                                    <SvgIconCancel /></i>
                                            </div>
                                        </li>
                                        {tabPage.map(({ nameTab, endPoint, icon }) =>
                                            <li key={nameTab}>
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                    {icon}
                                                    <Link to={endPoint}>
                                                        {nameTab}
                                                    </Link>
                                                </div></li>)}
                                    </ul>
                                </DrawerContrainer>
                            </div>
                        }
                    </div>
                    :
                    <h1 className='header_bottom--icon'>Iconic</h1>}
                <TabPage />
                <div className='header_bottom--icon'>
                    {icons.map(({ handle, icon }, index) =>
                        <i key={index} onClick={handle}>{icon}</i>
                    )}
                </div>
                {
                    showCart &&
                    <div style={{ margin: '20px' }}>
                        <DrawerContrainer position={'right'} onShowMenu={handleShowCart}>
                            <CardSamall
                                products={dataProduct}
                                onHandleQuatity={handleQuantity}
                                onRemoveProduct={handleRemoveProduct} />
                        </DrawerContrainer>
                    </div>

                }
            </div>
            {/* <Search /> */}
        </div>
    );
}

export default Header;