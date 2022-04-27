import './home.css';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Adver from './page/Adver';
import Preview from './page/Preview';





export default class Event extends Component {
  render() {

    return (
    <>
    <div className='b_container'>
        <h1 className='b_title'><Link to="/"> EVENT</Link></h1>
        <ul className='b_nav'>
        <li><Link to="/" className='b_movie b_menu' > 무대인사 / 시사회</Link></li>
        <li><Link to="/reserve" className='b_menu' >영화 / 예매</Link></li>
        <li><Link to="/discount" className='b_menu' >제휴 / 할인</Link></li>
        <li className='b_button'>
          <a href="/pick" className='b_myButton' >당첨자 발표</a>
          <Link to="/timeout" className='b_myButton'>종료된 이벤트</Link>
        </li>
      </ul>
      <Adver />

    </div>
    </>
    )
  }
}
