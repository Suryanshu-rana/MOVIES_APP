import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="content">
          <img src={props.imglink} alt="poster" className="image" />
          <div className="card-info">
            <div className="card-category">{props.category}</div>
            <h3 className="card-title">{props.cname}</h3>
            <a
              href={props.redirectLink}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <button className="button button3">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
