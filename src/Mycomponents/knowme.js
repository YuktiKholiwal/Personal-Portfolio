import React from 'react'
import Img from './edu.jpg'
import Img1 from './bg.jpg'
import Img2 from './like.jpg'
import Img3 from './tech.jpg'

const knowme = () => {
    return (
        <div className="knowme container-fluid" >
            <h1>Know me</h1>
            <div className="row">
    <div className="flip-card col-lg-4 col-md-6 col-sm-12">
  <div className="flip-card-inner">
  <div className="flip-card-front">
  <img src= {Img1} alt="pic"/>
        Background
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div className="flip-card  col-lg-4 col-md-6 col-sm-12">
  <div className="flip-card-inner">
  <div className="flip-card-front">
      <img src= {Img} alt="pic"/>
      Education
  </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div className="flip-card  col-lg-4 col-md-6 col-sm-12">
  <div className="flip-card-inner">
  <div className="flip-card-front">
  <img src= {Img3} alt="pic"/>
        Technical Interests
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
  </div>
</div>


<div className="row">
    <div className="flip-card col-lg-8 col-md-6 col-sm-12">
  <div className="flip-card-inner">
  <div className="flip-card-front">
  <img src= {Img2} alt="pic"/>
        I like to
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div className="flip-card col-lg-4 col-md-6 col-sm-12">

  <div className="flip-card-inner">
  <div className="flip-card-front">
        My favourites
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>


</div>

</div>
    )
}

export default knowme
