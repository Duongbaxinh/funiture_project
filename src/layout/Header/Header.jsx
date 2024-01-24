import React, { useEffect, useRef, useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { ReactComponent as SvgIconArrowDown } from '../../assets/svg/icon_arrowDown.svg';
import { ReactComponent as SvgIconCancel } from '../../assets/svg/icon_cancel.svg';
import { ReactComponent as SvgIconCart } from '../../assets/svg/icon_cart.svg';
import { ReactComponent as SvgIconMenu } from '../../assets/svg/icon_menu.svg';
import { ReactComponent as SvgIconSearch } from '../../assets/svg/icon_search.svg';
import { ReactComponent as SvgIconShop } from '../../assets/svg/icon_store.svg';
import { ReactComponent as SvgIconUser } from '../../assets/svg/icon_user.svg';
import DrawerContrainer from '../../components/smaler/Drawer/DrawerContrainer';
import GroupButton from '../../components/smaler/GroupButton/GroupButton';
import { PageContextState } from '../../context/PageContext';
import { CartContextState } from '../../context/ProductCartContext';
import CardSmall from '../../page/Cart/CardSmall/CardSmall';
import Search from './Search';
import TabPage from './TabPage';
import './styles.scss';
Header.propTypes = {

};
const tabPage = [
    {
        nameTab: 'Home',
        endPoint: '/',
        icon: <IoHomeSharp />
    },
    {
        nameTab: 'Category',
        endPoint: '/category',
        icon: <TbCategoryFilled />
    },
    {
        nameTab: 'Blog',
        endPoint: '/blog',
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
    const { userInfo } = PageContextState()
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.scrollY
    })
    const [citySelected, setCitySelected] = useState(address[0])
    const [isSearch, setIsSearch] = useState(false)
    const [showAddress, setShowAddress] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [show, setShow] = useState({
        cart: false,
        menu: false,
        profile: false
    })
    const [isSelected, setIsSelected] = useState(0)
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
    const handleShow = (type) => {
        const showClone = { ...show }
        showClone[type] = !showClone[type];
        setShow(showClone)
        console.log('check show', show)
    }
    const handleShowCart = () => {
        setShowCart(!showCart)
    }
    const handleSearch = () => {
        setIsSearch(!isSearch)
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
            handle: handleSearch,
            icon: <SvgIconSearch />,
            link: null
        },
        {
            handle: () => handleShow('profile'),
            icon: <SvgIconUser />,
            link: null
        },
        {
            handle: handleShowCart,
            icon: <SvgIconCart />,
            link: null
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
                                <div key={index}
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
                                        <li key={tabPage[0]}>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                {tabPage[0].icon}
                                                <Link to={tabPage[0].endPoint}>
                                                    {tabPage[0].nameTab}
                                                </Link>
                                            </div></li>

                                        <li key={tabPage[1]}>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                {tabPage[1].icon}
                                                <Link to={tabPage[1].endPoint}>
                                                    {tabPage[1].nameTab}
                                                </Link>
                                            </div>
                                        </li>

                                        <li key={tabPage[2]}>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                {tabPage[2].icon}
                                                <Link to={tabPage[2].endPoint}>
                                                    {tabPage[2].nameTab}
                                                </Link>
                                            </div></li>

                                    </ul>
                                </DrawerContrainer>
                            </div>
                        }
                    </div>
                    :
                    <h1 className='header_bottom--icon'>Iconic</h1>}
                <TabPage />
                <div className='header_bottom--icon'>
                    {!userInfo ? <Link to={'/login'}> <i><BiLogInCircle width='32px' height='32px' /></i></Link> : ''}
                    {icons.map(({ handle, icon, link }, index) =>
                        <Link key={index} to={link}><i key={index} onClick={handle}>{icon}</i></Link>
                    )}
                    <div className="header_bottom--icon---topcart">
                        {dataProduct.length}
                    </div>
                </div>
                {
                    showCart &&
                    <div style={{ margin: '20px' }}>
                        <DrawerContrainer position={'right'} onShowMenu={handleShowCart}>
                            <CardSmall
                                isShowCart={showCart}
                                onShowCart={setShowCart}
                                products={dataProduct}
                                onHandleQuatity={handleQuantity}
                                onRemoveProduct={handleRemoveProduct} />
                        </DrawerContrainer>
                    </div>
                }
                {
                    show.profile &&
                    (<div style={{ margin: '20px' }}>
                        <DrawerContrainer position={'right'} onShowMenu={() => handleShow('profile')}>
                            <h1>PROFILE</h1>
                        </DrawerContrainer>
                    </div>)
                }
            </div>
            {isSearch && <Search setIsSearch={setIsSearch} />}

        </div>
    );
}

export default Header;