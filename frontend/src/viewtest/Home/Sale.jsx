import './css/base.css';
import './css/sale.css';
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgGirl from './img/banner1.jpg';

function Sale() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,  // thể hiện chấm nhỏ dưới slide
        infinite: false, // slide cuối + click = slide đầu (false)
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0, // thể hiện hình ảnh 3 (0,1,2)
                    // infinite: true,
                    dots: true,
                },
            },
            // {
            //     breakpoint: 740,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true,
            //     },
            // },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2, // thể hiện hình ảnh 3 (0,1,2)
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            linkDefault: imgGirl,
        }));
    };
    const dataDigitalBestSeller = [
        {
            id: 1,
            title: 'Mario Kart™ 8 Deluxe',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/08/26AFULG2.jpg',
        },
        {
            id: 2,
            title: 'TRIANGLE STRATEGY™',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/10/2NTDDMBQ.jpg',
        },
        {
            id: 3,
            title: 'Pokémon™ Legends: Arceus',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/09/25F448Y1.jpg',
        },
        {
            id: 4,
            title: 'Super Mario™ 3D World + Bowser’s Fury',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/09/dich_vu_thue_xe_tu_lai_tphcm.jpg',
        },
        {
            id: 5,
            title: 'Cuphead',
            price: '$19.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/10/thue_xe_tu_lai_4_cho_tphcm.jpg',
        },
        {
            id: 6,
            title: 'Minecraft',
            price: '$29.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/10/thue_xe_co_tai_xe_tphcm.jpg',
        },
        {
            id: 7,
            title: 'Mario + Rabbids® Kingdom Battle',
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/02/08/thue_xe_tu_lai_7_cho_tphcm.jpg',
        },
        {
            id: 8,
            title: 'Unravel Two',
            price: '$59.99',
            category: 'Nintendo Switch',
            sale: 63, //percent
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/06/01/H4831UA9.jpg',
        },
    ];

    return (
        <div className='sale'>
            <div className='sale__text'>
                <h3>Chương trình khuyến mãi</h3>
                <p>Nhận nhiều ưu đãi từ Mioto</p>
            </div>
            <div className="sale__slider">
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="sale__slider-container">
                            <div className="sale__slider-container-top">
                                <img
                                    src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                    }
                                    alt={item.title}
                                    onError={handleErrorImage}
                                />
                                {/* <h1>{item.title}</h1> */}
                            </div>
                            {/* <div className="sale__slider-container-bottom">
                                <h3>{item.price}</h3>
                                <span className="sale__slider-container-bottom-text">{item.category}</span>
                            </div> */}
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default Sale;
