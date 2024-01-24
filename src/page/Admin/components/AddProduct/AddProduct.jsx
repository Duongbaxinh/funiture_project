import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { PageContextState } from '../../../../context/PageContext';
import LoadingPage from '../../../LoadingPage';
import Sidebar from '../Sidebar/Sidebar';
import './styles.scss';
const productInfos = [
    {
        id: 2,
        label: "product_name",
        title: 'Product Name',
    },
    {
        id: 3,
        label: "product_des",
        title: 'Product Description',
    },
    {
        id: 4,
        label: "product_price",
        title: 'Product Price',
    },
    {
        id: 7,
        label: "product_state",
        title: 'Product State',
    },
    {
        id: 8,
        label: "product_measure",
        title: 'Product Measure',
    },
    {
        id: 9,
        label: "product_material",
        title: 'Product Material',
    },

    {
        id: 11,
        label: "product_color",
        title: 'Product Color',
    },
]
const category = [
    {
        id: '85a090ef-0c6e-420d-ab99-d7a1165a33f8',
        title: 'Living room'
    },
    {
        id: 'b1cab2f5-9041-49bd-9b0b-56a1c53278ae',
        title: 'Bath room'
    },
    {
        id: 'bc30f946-ec83-48ba-ab33-9de56190014b',
        title: 'Bed room'
    },
    {
        id: 'c6c27e26-08dc-4829-a64b-6c8a1a82d8cf',
        title: 'Chiken room'
    },
]
const types = [
    'sofa', 'chair', 'table'
]
function AddProduct() {
    const { userInfo } = PageContextState()
    const [productUpdate, setProductUpdate] = useState({})
    const { handleSubmit, register, formState: { errors } } = useForm()
    const [isUpImage, setIsUpImage] = useState(false)
    const onSubmit = async (value) => {
        const dataImage = {
            product_thumbnail: '',
            product_images: []
        }
        const fromData = new FormData()
        setIsUpImage(true)
        try {
            fromData.append('file', value.product_thumbnail[0])
            fromData.append('upload_preset', 'furniture')
            fromData.append('cloud_name', 'dwu92ycra')
            if (dataImage.product_thumbnail !== '') {
                const { data } = await axios.post('https://api.cloudinary.com/v1_1/dwu92ycra/image/upload', fromData)
                dataImage.product_thumbnail = data.url
            }
            if (dataImage.product_images.length > 0) {
                for (let i = 0; i < value.images.length; i++) {
                    const fromData = new FormData()
                    fromData.append('file', value.images[i])
                    fromData.append('upload_preset', 'furniture')
                    fromData.append('cloud_name', 'dwu92ycra')
                    const { data } = await axios.post('https://api.cloudinary.com/v1_1/dwu92ycra/image/upload', fromData)
                    dataImage.product_images.push(data.url)
                }
            }
            const update = await axios.post('http://localhost:8080/api/v1/product', {

                product_name: productUpdate.product_name,
                product_des: productUpdate.product_des,
                product_color: productUpdate.product_color,
                product_price: productUpdate.product_price,
                product_thumbnail: dataImage.product_thumbnail,
                product_material: productUpdate.product_material,
                product_measure: productUpdate.product_measure,
                product_type: productUpdate.product_type,
                categoryId: productUpdate.product_categoryId,
                product_state: 'publish',
                product_image: dataImage.product_images,
            }, {
                headers: {
                    Authorization: userInfo.pairToken.accessToken
                }
            })
            console.log(update)
        } catch (error) {
            console.log(error)
            setIsUpImage(false)
        } finally {
            setIsUpImage(false)
        }
    }
    const handleChangeInforProduct = (e, filed) => {
        const { value } = e.target;
        const cloneProductUpdata = productUpdate;
        cloneProductUpdata[filed] = value;
        setProductUpdate({ ...cloneProductUpdata })
    }
    return (
        <>
            <div className='editporoduct'>
                <Sidebar />
                <div className="AddProduct_content" style={{ width: '100%', marginLeft: '350px', padding: '30px' }}>
                    {isUpImage ? <LoadingPage /> :
                        <div>
                            <form className='contact_info' onSubmit={handleSubmit(onSubmit)}>
                                <h1>Edit Product</h1>
                                {productInfos.map(({ id, label, title }) => (
                                    <div key={id} className={`contact_info--input`}>
                                        <h3>{title.toUpperCase()}</h3>
                                        <input type="text"
                                            value={productUpdate[label] ?? undefined}
                                            onChange={(e) => handleChangeInforProduct(e, label)}
                                            placeholder={`Your ${title}`}
                                        />
                                    </div>
                                ))}
                                <label htmlFor="product_type">product_type</label>
                                <select className='selecteditem' id="product_type" onChange={(e) => handleChangeInforProduct(e, productUpdate.product_type)} >
                                    {types.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                                {/* SELECT CATEGORY */}
                                <label htmlFor=""> Categories</label>
                                <select className='selecteditem' id="category" onChange={(e) => handleChangeInforProduct(e, productUpdate.categoryId)} >
                                    {category.map((cate, index) => (
                                        <option key={index} value={cate.id}>{cate.title}</option>
                                    ))}
                                </select>
                                <label htmlFor=""> Product Thumbnail</label>
                                <input type='file' src="" alt="" {...register('product_thumbnail')} />
                                <label htmlFor="images">Images</label>
                                <input id='images' type="file" multiple {...register('images')} />
                                <input type="submit" value="Upload" />
                            </form>
                        </div>}
                </div>
            </div>
        </>
    );
}

export default AddProduct;