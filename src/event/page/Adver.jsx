import React, { Component } from 'react'


export default class Adver extends Component {
render() {

   const imgList = [
    {id : 1, url : "images/sideimg1.jpg"},
    {id : 2, url : "images/sideimg2.jpg"},
    {id : 3, url : "images/sideimg3.jpg"},
    {id : 4, url : "images/sideimg4.jpg"}
  ]
    return (
      <>
      <div className='b_side'>
         {imgList.map(imgList => {
        var list =  <div className='b_sideImg' key={imgList.id}>
       <a href="#"><img src={imgList.url} className="b_side" alt="side"/>
       </a>   
      </div>
        return list;
      })
    }
   </div>   

   </>
    )
  }
}
