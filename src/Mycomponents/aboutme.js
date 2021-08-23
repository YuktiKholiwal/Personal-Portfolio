import React from 'react';
import Typed from "react-typed";
import Image from './yukti.jpg'

const aboutme = () => {
    return (
      <div className="container-fluid">
 <div className="aboutme row">
  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
  <img src= {Image} alt="pic"/>
    </div>
  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">

    <h1>About me</h1>
    <div className="typed">
            <Typed
            className="typed-text"
            strings = {["Hi!","Namaste!","Hello!","Bonjour!","Hola!"]}
            typeSpeed={40}
            backSpeed={60}
            loop/> 
 </div>

<div className="text1 ">I am Yukti Kholiwal.</div> 
     <div className="text2">A proud daughter, a hard working student, an ambitious girl.</div>
     <p>
     I am a girl with dreams and a determination to fulfill them. I am very patient and heed to 
     intricate details. I brim with positivity and optimism. I try to find a reason to smile 
     in the worst of conditions. I can be very patient in dealing with people and while studying. 
     However sometimes I can stress a lot over petty things. I am a good learner and a hard worker.
     I try to find opportunities to learn new and different things. 
     I am looking forward to gain experience and polish my skills.
</p>
  </div> 
</div>
</div>
    )
}

export default aboutme;
