import React from 'react'
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {

        if(props.detail.images && props.detail.images.length > 0){
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    }, [props.detail])
    // props.detail이 바뀔때마다 useEffect 내의 라이프사이클을 한번더 실행시킴

    
    return (
        <div>
            <ImageGallery items={Images}/>
        </div>
    )
}

export default ProductImage