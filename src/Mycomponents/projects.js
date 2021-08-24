import React from 'react'

const projects = () => {
    return (

        <div className="projects container-fluid">
          <div className="heading"><h1>My Projects</h1></div>
            
<div className="row">
  <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div className="card">
      <a href="https://github.com/YuktiKholiwal/Personal-Portfolio.git" target="_blank">
      <div className="card-body">
        <h5 className="card-title">Project 1</h5>

        <p className="card-text">My Personal portfolio Website using ReactJS</p>
      </div></a>
    </div>
  </div>
  <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div className="card">
      <a href="#">
      <div className="card-body">
        <h5 className="card-title">Project 2</h5>
        <p className="card-text">The project is under construction.</p>
      </div></a>
    </div>
  </div>
  <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div className="card">
    <a href="#">
      <div className="card-body">
        <h5 className="card-title">Project 3</h5>
        <p className="card-text">The project is under construction.</p>
      </div></a>
    </div>
  </div>
</div>

</div>
    )
}

export default projects
