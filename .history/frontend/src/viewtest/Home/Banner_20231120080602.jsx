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
        <div className='banner'>
          <div className='banner__list'>
            Hiện tại bạn đã thuê thành công 2 xe của chúng tôi
          </div>
          <button className='banner__search btn__large'>
              <h3>Tìm xe</h3>
          </button>
        </div>
    </div>
  )
}

export default Banner
