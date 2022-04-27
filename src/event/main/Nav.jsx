import React, { Component } from 'react'
import './nav.css';


export default class Nav extends Component {
  render() {
    return (
     <>
     <div className='b_container'>
        <div className='b_head'>
            <div className='b_imgbox'>
            <img src="images/logo.png" alt="logo" />
            </div>
            <a href="#"><span class="material-symbols-outlined">person_add</span></a>
            <a href="#"><span class="material-symbols-outlined">login</span></a>
            <a href="#"><span class="material-symbols-outlined">person</span></a>
            <a href="#"><span class="material-symbols-outlined">support_agent</span></a>
            
        </div>
        <div className='b_Nav'>
            <ul className='b_navGnb'>
                <li><a href="#">영화</a> 
                 <li className='b_lnb'>
                <a href="#">무비차트</a>
                <a href="#">영화 소개</a>
                </li></li>
                <li><a href="#" className='point'>예매</a>
                <li className='b_lnb'>
                <a href="#">영화 예매</a>
                </li>
                </li>
                <li><a href="#">스토어</a>
                <li className='b_lnb'>
                <a href="#">스낵</a>
                <a href="#">굿즈</a>
                </li>
                </li>
                <li><a href="#">이벤트</a>
                <li className='b_lnb'>
                <a href="#">무대인사/시사회</a>
                <a href="#">영화/예매</a>
                <a href="#">제휴할인</a>
                </li>
                </li> 
                <li className='search'>
                 <form >
                    <input type="text"/>
                  <button>
                    <span class="material-symbols-outlined">search</span></button>
                 </form>
                </li>
            </ul>
        </div>  
    
     </div>  
     
     </>
    )
  }
}              
