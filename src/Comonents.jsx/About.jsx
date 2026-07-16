import React from 'react'

function About() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center fw-bold mt-3'>About Us</h1>
      <p className='text-center text-muted w-75 mx-auto mb-5'>
        SS Tech Solution is a modern technology company focused on providing innovative and reliable digital solutions.
         We help businesses grow through web development, app development, UI design, and smart digital services.
      </p>
      
      <div className="row g-4 mt-4">

  <div className="col-md-4">
    <div className="card h-100 shadow-sm rounded-4 p-3">
      <div className="card-body">
        <h3 className="card-title fw-bold text-dark">Who We Are</h3>

        <p className="card-text text-muted">
          We are a team of technology enthusiasts dedicated to creating modern,
          responsive, and user-friendly digital solutions for businesses.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100 shadow-sm rounded-4 p-3">
      <div className="card-body">
        <h3 className="card-title fw-bold text-dark">Our Mission</h3>

        <p className="card-text text-muted">
          Our mission is to deliver innovative and reliable digital solutions
          that help businesses grow and succeed.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card h-100 shadow-sm rounded-4 p-3">
      <div className="card-body">
        <h3 className="card-title fw-bold text-dark">Our Vision</h3>

        <p className="card-text text-muted">
          Our vision is to become a trusted technology partner by creating
          modern and impactful digital experiences.
        </p>
      </div>
    </div>
  </div>

</div>
</div>



    
  );
}

export default About