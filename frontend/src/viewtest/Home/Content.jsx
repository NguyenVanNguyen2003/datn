import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/base.css';
import './css/content.css';
import { BsShieldCheck } from "react-icons/bs";
import { FaLocationDot, FaStar, FaCarRear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import imgGirl from './img/banner1.jpg';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
// import { FaGoogle, FaFacebook} from "react-icons/fa6";

function Content() {
  const [defaultImage, setDefaultImage] = useState({});
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/get-car')
      .then((response) => {
        const carsData = response.data.cars;
        setCars(carsData);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  }, []);
  const contact__mobile = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },

      },
      {
        breakpoint: 350,
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
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUXSA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkProduct: '/product',
      linkImg:
        'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_triton_4x2_2022/p/g/2023/02/14/11/UyQVePE5qjSecWyjaobZJQ.jpg'
    },
    {
      id: 2,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkProduct: '/trip',
      linkImg:
        'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/chevrolet_cruze_2016/p/g/2023/06/23/15/qLsD4cE0csFdWchSnzRsjw.jpg',
    },
    {
      id: 3,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/vinfast_vf5_2023/p/g/2023/08/07/23/Qh_M-OYpOcvC93rJHgeY-A.jpg',
    },
    {
      id: 4,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/kia_seltos_deluxe_2021/p/g/2023/03/14/11/ZE7WZ8uAqkMen0N9uIlseA.jpg',
    },
    {
      id: 5,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
    },
    {
      id: 6,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
    },
    {
      id: 7,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
    },
    {
      id: 8,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
    },
    {
      id: 9,
      tax: 'Đặt xe nhanh',
      flash: 'Miễn thế chấp',
      number: 'Số tự động',
      title: 'VINFAST LUX SA 2.0 2021',
      location: 'Quận 7, Hồ Chí Minh',
      start: '5.0',
      usage: '75 chuyến',
      price: '800k',
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero?_a=AJADJWI0',
    },

  ];
  const handleProductClick = (linkProduct) => {
    if (linkProduct) {
      window.location.href = linkProduct;
    }
  };
  return (
    <div className='content' id='content'>
      <h1 className='content__text'>Xe dành cho bạn</h1>
      <div className='content__search'>
        <div class="content__search-form">
          <input type="text" className="content__search-form-input" placeholder="Tìm Kiếm Xe"/>
        </div>
        <button className='content__search-button'>
            <i className='content__search-button-text'> <FaSearch></FaSearch> </i>
        </button>
      </div>
      <div className='content__list'>
        {cars.map((car, index) => (
          <Link to={`/product/${car._id}`} className='content__list-child' key={index}>
            <nav>
              <img src={car.imagePath} className='content__list-child-img'></img>
              <div className='btn__freetax content__list-child-img-tax '>
                <p className='content__list-child-img-tax-text'>
                  Miễn thế chấp
                </p>
              </div>
              <div className='content__list-child-img-flash btn__electronic'>
                <p className='content__list-child-img-flash-text'>
                  Đặt xe nhanh
                </p>
              </div>
            </nav>
            <div className='content__list-child-auto'>
              <div className='content__list-child-auto-car btn__auto'>
                <p className='content__list-child-auto-car-text'> Số tự động</p>
              </div>
              <div className='content__list-child-auto-location'></div>
            </div>
            <div className='content__list-child-name'>
              <h1 className='content__list-child-name-main'>{car.title}</h1>
              <i><BsShieldCheck></BsShieldCheck></i>
            </div>
            <div className='content__list-child-location'>
              <i><FaLocationDot></FaLocationDot></i>
              <p className='content__list-child-location-text'>{car.location}</p>
            </div>
            <div className='content__list-child-underlined'> </div>
            <div className='content__list-child-detail'>
              <div className='content__list-child-detail-evaluate'>
                <div className='content__list-child-detail-evaluate-star'>
                  <i><FaStar></FaStar></i>
                  <p className='content__list-child-detail-evaluate-star-text'>5.0</p>
                </div>
                <div className='content__list-child-detail-evaluate-usage'>
                  <i><FaCarRear></FaCarRear></i>
                  <p className='content__list-child-detail-evaluate-usage-text'>75 chuyến</p>
                </div>
              </div>
              <div className='content__list-child-detail-buy'>
                <span className='content__list-child-detail-buy-sale'>
                  {car.price}vnđ
                </span>
                <p className='content__list-child-detail-buy-day'>
                  <span>Giá tổng</span> {car.price}vnđ
                </p>
              </div>
            </div>


          </Link>
        ))}
      </div>
      {/* Về sửa lại phần này */}
      <div className="content__mobile">
      {cars.map((car, index) => (
          <Link to={`/product/${car._id}`} className='content__list-child' key={index}>
        <Slider {...contact__mobile}>
          {dataDigitalBestSeller.map((item) => (
            <div key={item.id} className="content__mobile-child" onClick={() => handleProductClick(item.linkProduct)}>
              <div className="content__mobile-child-top">
                <img
                  key={item.id}
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <div className='child__absolute'>
                  <div className='btn__freetax content__mobile-child-img-tax'>
                    <p className='content__mobile-child-img-tax-text'>
                      {item.tax}
                    </p>
                  </div>
                  <div className='content__mobile-child-img-flash btn__electronic'>
                    <p className='content__mobile-child-img-flash-text'>
                      {item.flash}
                    </p>
                  </div>
                </div>
              </div>
              <div className="content__mobile-child-bottom">
                <div className='content__mobile-child-auto'>
                  <div className='content__mobile-child-auto-car btn__auto'>
                    <p className='content__mobile-child-auto-car-text'> {item.number}</p>
                  </div>

                </div>
                <div className='content__mobile-child-name'>
                  <h1 className='content__mobile-child-name-main'>  <h3>{item.title}</h3></h1>
                  <i><BsShieldCheck></BsShieldCheck></i>
                </div>
                <div className='content__mobile-child-location'>
                  <i><FaLocationDot></FaLocationDot></i>
                  <p className='content__mobile-child-location-text'>{item.location}</p>
                </div>
                <div className='content__mobile-child-underlined'> </div>
                <div className='content__mobile-child-detail'>
                  <div className='content__mobile-child-detail-evaluate'>
                    <div className='content__mobile-child-detail-evaluate-star'>
                      <i><FaStar></FaStar></i>
                      <p className='content__mobile-child-detail-evaluate-star-text'>{item.start}</p>
                    </div>
                    <div className='content__mobile-child-detail-evaluate-usage'>
                      <i><FaCarRear></FaCarRear></i>
                      <p className='content__mobile-child-detail-evaluate-usage-text'>{item.usage}</p>
                    </div>
                  </div>
                  <div className='content__mobile-child-detail-buy'>
                    <span className='content__mobile-child-detail-buy-sale'>
                      {item.price}
                    </span>
                    {/* <p className='content__mobile-child-detail-buy-day'>
                  <span>Giá tổng</span> 1800k
                </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Content;
