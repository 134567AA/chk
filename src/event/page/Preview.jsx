import React, { Component } from 'react'
import './all.css';

export default class Preview extends Component {
  render() {
      const imgs = [
      {id: 1, name : "스텔라 개봉주 무대인사", url : "images/시사회/img1.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 2, name : "해리포터 죽음의 성물2 시사회", url : "images/시사회/img2.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 3, name : "앵커 VIP 시사회", url : "images/시사회/img3.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 4, name :" 주술회전 무례한 시사회", url : "images/시사회/img4.jpg",date :"2022.04.10 ~ 2022.04.25" },
      {id: 5, name : "겨울왕국 VIP 시사회", url : "images/시사회/img5.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 6, name : "에펠 CHK 회원 시사회", url : "images/시사회/img6.jpg",date :"2022.04.10 ~ 2022.04.25" },
      {id: 7, name : "오즈야스지로 특별전", url : "images/시사회/img7.jpg",date :"2022.04.28 ~ 2022.05.11" },
      {id: 8, name : "매미소리 개봉주 무대인사", url : "images/시사회/img8.jpg",date :"2022.04.10 ~ 2022.04.25" },
      {id: 9, name : "POWER OF LOVE OFFICIAL MERCH", url : "images/시사회/img9.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 10, name : "피그 굿즈패키지 상영회", url : "images/시사회/img10.jpg",date :"2022.04.10 ~ 2022.04.25" },
      {id: 11, name : "이상한 나라의 수학자 CHK VIP 시사회", url : "images/시사회/img11.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 12, name : "공기살인 개봉주 무대인사 안내", url : "images/시사회/img12.jpg",date :"2022.03.23 ~ 2022.04.07" }
    ]
    return (
     <>
    <div className='b_conBox'>
     <ul className='b_conList'>   
    {/* loop */}
        <li className='b_listBox'>
          <img src={imgs[0].url} alt={imgs[0].id} />
          <p className='b_conTitle'>{imgs[0].name}</p>
          <p className='b_date'>{imgs[0].date}</p>
        </li> 
        <li className='b_listBox'>
          <img src={imgs[1].url} alt={imgs[1].id} />
          <p className='b_conTitle'>{imgs[1].name}</p>
          <p className='b_date'>{imgs[1].date}</p>
        </li> 
        <li className='b_listBox'>
          <img src={imgs[2].url} alt={imgs[2].id} />
          <p className='b_conTitle'>{imgs[2].name}</p>
          <p className='b_date'>{imgs[2].date}</p>
        </li> 
        <li className='b_listBox'>
          <img src={imgs[0].url} alt={imgs[0].id} />
          <p className='b_conTitle'>{imgs[0].name}</p>
          <p className='b_date'>{imgs[0].date}</p>
        </li> 
        <li className='b_listBox'>
          <img src={imgs[0].url} alt={imgs[0].id} />
          <p className='b_conTitle'>{imgs[0].name}</p>
          <p className='b_date'>{imgs[0].date}</p>
        </li> 
        <li className='b_listBox'>
          <img src={imgs[0].url} alt={imgs[0].id} />
          <p className='b_conTitle'>{imgs[0].name}</p>
          <p className='b_date'>{imgs[0].date}</p>
        </li> 
    {/* loop */}
     </ul>
   
    </div>
    <div className='b_container'>
    <a href="#" className='b_more'>더보기</a>
    </div>
      
     </>
    )
  }
}
