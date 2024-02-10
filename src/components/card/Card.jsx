import React from "react";

export default function Card({imgSrc,onCardClick}) {
  return (
    <div className="col-md-4">
      <div
        onClick={() => {
          onCardClick(imgSrc);
        }}
        className="position-relative"
      >
        <img src={imgSrc} alt="poert1" className="w-100 rounded-3" />
        <div className="layer position-absolute bg-success start-0 top-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
          <i class="text-white fa-solid fa-plus fa-6x"></i>
        </div>
      </div>
    </div>
  );
}
