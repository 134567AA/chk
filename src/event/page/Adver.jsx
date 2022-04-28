import React, { Component } from 'react'
import $ from 'jquery';


export default class Adver extends Component {
render() {
  // $(function(){
  //   $('.')
  // })
   const imgList = [
    {id : 1, url : "images/sideimg1.jpg"},
    {id : 2, url : "images/sideimg2.jpg"},
    {id : 3, url : "images/sideimg3.jpg"},
    {id : 4, url : "images/sideimg4.jpg"}
  ]
    return (
      <>
      <div className='b_side'>
       <div className='b_sideImg'>
       <a href="#">
         <img src={imgList[0].url} className="b_side" alt={imgList[0].id}/>
         </a>   
      </div>
      <div className='b_sideImg'>
       <a href="#">
         <img src={imgList[1].url} className="b_side" alt={imgList[1].id}/>
         </a>   
      </div>
   </div>   

   </>
    )
  }
}
