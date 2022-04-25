import React, { Component } from 'react'
import './discount.css';


export default function Discount (){

    return (
        <>
       
        <div className='b_reserve b_row'>
          <ul className='b_reserveCont'>
          <li className='b_listBox'>
           <div>
            <img src="images/할인/img1.jpg" alt="001" />
            <p className='b_conTitle b_reserveTitle'>[세븐틴 파워 오브 러브 : 더 무비] 친필 싸인 이벤트</p>
            <p className='b_date'>2022.03.23 ~ 2022.04.07</p>
           </div>
          </li>
          <li className='b_listBox'>
           <div>
            <img src="images/할인/img2.jpg" alt="002" />
            <p className='b_conTitle b_reserveTitle'>[신비한 동물들과 덤블도어의 비밀] 필름 마크</p>
            <p className='b_date'>2022.03.23 ~ 2022.04.07</p>
           </div>
          </li>
          <li className='b_listBox'>
           <div>
            <img src="images/할인/img3.jpg" alt="003" />
            <p className='b_conTitle b_reserveTitle'>[앵커] 필름 마크</p>
            <p className='b_date'>2022.04.10 ~ 2022.04.25</p>
           </div>
          </li> 
          </ul>
    {/* ad sideimg */}
       <div className='b_side'>
          <div className='b_sideImg'>
              <a href="#"><img src="images/sideimg1.jpg" alt="side01" /></a>
          </div>
          <div className='b-sideImg'>
              <a href="#"><img src="images/sideimg2.jpg" alt="side02" /></a>  
          </div>
       </div>   
   
       </div> 
  
      </>
    )
  }
