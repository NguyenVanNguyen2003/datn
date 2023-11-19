import React from 'react'
import './css/banner.css';
import './css/base.css';
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
    </div>
  )
}

export default Banner
