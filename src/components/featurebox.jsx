import React from 'react'

const courses = [

    {
      id: 0,
      name: 'Full Stack Developement Program',
      price: '89,999'
    },
  
    {
  
      id: 1,
      name: 'Python Automation Testing Program',
      price: '64,999'
    },
  
    {
      id: 2,
      name: 'UI/UX Program',
      price: '89,999'
    }
  
  ]

export const Featurebox = (props) => {

    console.log(props.feature.id)
    // console.log(courses)
//    courses.map(course => console.log(course.id))
    //   console.log(arrayDataItems)
  return (
    <div className="box" key={props.feature.id} >
        <div className="box-icon">
         <i className={props.feature.icon}></i>
        </div>
        <h3 className="box-head">{props.feature.header}</h3>
        <p>{props.feature.data}</p>  
    </div>
  )
}
