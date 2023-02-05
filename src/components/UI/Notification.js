import React from 'react'

const Notification = ({title,status,message}) => {
    // let specialClasses="";
    // if(status ==="success"){
    //     specialClasses="success"
    // } 
    // if(status==="error"){
    //     specialClasses="error"
    // }
   const notificationClass = `order-status-wrapper ${status}`;
  return (
    <section className={notificationClass}>
    <h3 className="mb-4">{title}</h3>
    <p className="mb-4 fs-4">{message}</p>
    </section>
  )
}

export default Notification
