import React, { Component } from 'react'
import './preview.css';

export default class Preview extends Component {

  render() {
    return (
     <>
<div className='b_conBox b_row'>
    {/* loop */}
     <ul className='b_conList'>
        <li className='b_listBox'>
         <div>
          <img src="images/시사회/img1.jpg" alt="001" />
          <p className='b_conTitle'>스텔라 개봉주 무대인사</p>
          <p className='b_date'>2022.03.23 ~ 2022.04.07</p>
         </div>
        </li>
       
        <li className='b_listBox'>
         <div>
          <img src="images/시사회/img2.jpg" alt="002" />
          <p className='b_conTitle'>아스트로 팬미팅 극장 생중계</p>
          <p className='b_date'>2022.03.23 ~ 2022.04.07</p>
         </div>
        </li>
        <li className='b_listBox'>
         <div>
          <img src="images/시사회/img3.jpg" alt="003" />
          <p className='b_conTitle'>앵커 VIP 시사회</p>
          <p className='b_date'>2022.04.10 ~ 2022.04.25</p>
         </div>
        </li> 
     </ul>
    {/* loop */}

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
}
