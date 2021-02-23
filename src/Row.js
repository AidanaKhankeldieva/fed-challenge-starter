import React from "react";
import data from "./data";
import "./Row.css";

const Row = () => {
  console.log("data", data);
  return (
    <div className='row__container'>
      <div className='row__list'>
        {data.map((item, idx) => {
          return (
            <div className='single__row' key={idx}>
              <img className='imgbig' src={item.img} alt={item.title} />
              {item.numberOfworkouts && (
                <div className='workout__playlist'>
                  <div className='workout__playlist__content'>
                    <h3>{item.numberOfworkouts}</h3>
                    <h6>WORKOUTS</h6>
                    <i className='fas fa-bars'></i>
                  </div>
                </div>
              )}

              <div className='row__content'>
                <h5 className='row__title'>{item.title}</h5>
                {item.time && item.additional ? (
                  <div className='row__paragraph'>
                    <p>
                      <i className='fal fa-clock'></i>
                      {item.time}
                    </p>
                    <p>
                      <i className='fas fa-paperclip'></i>
                      {item.additional}
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <img
                  src={item.imgsmall}
                  alt={item.title}
                  className='imgsmall'
                />
                <h5 className='hover__text'>VIEW DETAILS</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
