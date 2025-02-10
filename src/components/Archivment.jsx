import React from "react";
import achievements from "./data/archivment.json";

const Achievement = () => {
  return (
    <div>
    <h1>ACHIEVEMENTS</h1>
    <div className="container ar" id="archivment"> {/* Changed id to "archivment" */}
      
      {achievements.map((data) => (
        <div
          key={data.id}
          className="ex-items my-5"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="left">
            <img id="img" src={`/assets/${data.imageSrc}`} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Achievement;