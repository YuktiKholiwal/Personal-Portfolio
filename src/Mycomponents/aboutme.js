import React from 'react';
import Typed from "react-typed";
import Image from './yukti.jpg'

const aboutme = () => {
    return (
      <div className="container-fluid">
 <div className="aboutme row">
  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" id="aboutme">
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
     I am a young woman with dreams and a strong desire to fulfil them. I am a hard-working girl who aspires to be independent and learn as much as possible. A span of 20 years has taught me that anything in life can be achieved if you are patient enough and respect time.  My failures have taught me to find a reason to be happy and hopeful in the worst of circumstances. However, I tend to get worked up over petty issues. Given an opportunity, I try to exploit it to its complete potential to gain experience and polish my skills.
</p>
  </div> 
</div>
</div>
    )
}

export default aboutme;
