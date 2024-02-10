import React, { useEffect, useState } from "react";
import imgSrc1 from "../../assets/images/poert1.png";
export default function ImageBox({imgSrc,setImgSource}) {
  const hideBox = ()=>{
    console.log(imgSrc)
    setImgSource('')
  }
  
  return (
   <>
   <div onClick={hideBox}
      style={{  backgroundColor: "rgba(13,110,253,0.25)" }}
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 end-0 bottom-0"
    >
      <img src={imgSrc} className="w-50 rounded-3" alt="1" />
    </div> 
   </>
    
  );
}
