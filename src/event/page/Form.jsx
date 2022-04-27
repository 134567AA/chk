import React from 'react'
import './all.css';


function Form(props){
    const list =[
         <div className='b_conBox'>
     <ul className='b_conList'> 
     <li className='b_listBox'>
        <img src=""alt="001"/>
        <p className='b_conTitle'></p>
        <p className='b_date'></p>
      </li> 
    </ul>
    </div> 
    ];
  return (
  <>
  {list}
  </>
  )
}

export default Form