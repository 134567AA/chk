import './home.css';
import React, { Component } from 'react'
import Preview from './page/Preview';
import {Link} from 'react-router-dom';




export default class Event extends Component {
  render() {
    return (
    <>
    <div className='b_container'>
        <h1 className='b_title'>EVENT</h1>
        <ul className='b_nav'>
            <li><Link to="/" className='b_movie'> 무대인사 / 시사회</Link></li>
            <li><Link to="/reserve">영화 / 예매</Link></li>
            <li><Link to="/discount">제휴 / 할인</Link></li>
            <li className='b_button'>
                <a href="login" className='b_myButton'>당첨자 발표</a>
                <a href="timeout" className='b_myButton'>종료된 이벤트</a>
            </li>
        </ul>
        
    </div>
    </>
    )
  }
}
