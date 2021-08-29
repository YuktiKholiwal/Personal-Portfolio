import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
    return (
        
        <div className="footer" id="footer">
 <footer className="text-center ">
  <div className="container p-4">
     <p> Connect with me:</p>
    <section className="">
        
        <a className="m-lg-4 m-md-3 m-sm-3 m-3" href="https://www.facebook.com/chicky.kholiwal" role="button" target="_blank" >
                  <i className="fab fa-facebook-f"></i></a>


      <a className="m-lg-4 m-md-3 m-sm-3 m-3" href="mailto: ykholiwal@gmail.com" role="button" target="_blank">
          <i className="fab fa-google"></i></a>


      <a className="m-lg-4 m-md-3 m-sm-3 m-3" href="https://www.instagram.com/kholiwal_yukti/" role="button" target="_blank">
          <i className="fab fa-instagram"></i></a>

      <a className="m-lg-4 m-md-3 m-sm-3 m-3" href="https://www.linkedin.com/in/yukti-kholiwal-027131168/" role="button" target="_blank">
          <i className="fab fa-linkedin-in"></i></a>


      <a className="m-lg-4 m-md-3 m-sm-3 m-3" href="https://github.com/YuktiKholiwal" role="button" target="_blank">
          <i className="fab fa-github"></i></a>
    </section>

    <div className="info">
       <p>7042663615</p>
        <p>ykholiwal@gmail.com</p>
        <p>Delhi, India</p>
    </div>

  </div>
</footer>

</div>
    )
}

export default footer