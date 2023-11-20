import React from 'react'
import './css/banner.css';
import './css/base.css';
import {FaMedal} from "react-icons/fa6";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className='banner'>
        <div className='banner__main'>
           <h1 className='banner__main-textmain'>Mioto - Cùng Bạn Đến Mọi Hành Trình</h1>
           <div className='banner__main-dash'></div>
           <p className='banner__main-textchild'>
           Trải nghiệm sự khác biệt từ <span>hơn 8000</span> xe gia đình đời mới khắp Việt Nam
           </p>
        </div>
        <div className='banner__list'>
          <div className='banner__list-text'>
           <p>
            Hiện tại bạn đã thuê thành công 2 xe của chúng tôi
            </p> 
          </div>
          <div className='banner__list-point'>
            <i><FaMedal></FaMedal></i>
            <p className='banner__list-point-text'>
              {} Điểm</p>
          </div>
          <Link>
          <button className='banner__list-search btn__large'>
              <h3>Tìm xe</h3>
          </button>
          </Link>
        </div>
    </div>
  )
}

export default Banner
