import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const PageConText = createContext()
export const PageContext = ({ children }) => {
    const [textSearch, setTextSearch] = useState('')
    const [dataProduct, setDataProduct] = useState([])
    const [userInfo, setUserInfo] = useState(null)
    const [changeSearch, setChangeSearch] = useState(false)
    const handleSearch = async (value) => {
        const { data } = await axios.get(`http://localhost:8080/api/v1/product/search?textSearch=${textSearch}`)
        setDataProduct(data.metadata)
    }
    const debounce = (func, delay) => {
        let timeOutId;
        return function (...arg) {
            if (timeOutId) {
                clearTimeout(timeOutId)
            }
            timeOutId = setTimeout(() => {
                func(...arg)
            }, delay)
        }
    }
    const handledeboundSearch = debounce(handleSearch, 500)
    const handleChange = (e) => {
        const { value } = e.target;
        setTextSearch(value)
        handledeboundSearch(value)
    }
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (!userInfo) {
            console.log('error')
        } else {
            setUserInfo(userInfo)
        }
    }, [])
    return <PageConText.Provider value={{
        dataProduct,
        setDataProduct, handleChange,
        changeSearch, setChangeSearch,
        userInfo
    }}>
        {children}
    </PageConText.Provider>
}
export const PageContextState = () => {
    return useContext(PageConText)
}