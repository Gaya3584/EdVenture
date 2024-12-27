import React from 'react';
import RocketImage from './images/rocket.png';  // Import image from components/images folder
import Stars from './images/stars-removebg-preview.png';

const Cont = () => {
  return (
    <div className="content-section">
      <div className="left-side">
        <div className="rocket">
          <img src={RocketImage} alt="Rocket" />  {/* Use imported image */}
        </div>
        <div className="stars">
          <img src={Stars} alt="Stars" />  {/* Use imported image */}
        </div>
      </div>

      <div className="box-3d big-box">
        <h3 className="content-heading">
          At EdVenture, we believe that education should be more than just textbooks and exams. Whether you’re a budding artist, a tech enthusiast, or a natural leader, EdVenture is here to guide you. Learning new skills doesn’t have to feel like a chore! At EdVenture, we’re redefining education to be more inclusive, interactive, and inspiring. Let’s learn, grow, and have fun together!
        </h3>
        
      </div>
      
    </div>
  );
};

export default Cont;
