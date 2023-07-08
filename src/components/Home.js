import React from "react";

const Home = () => {
  return (
  <>
  <div className=" w-100 h-200 bg-light">
  <h1  className=" mb-2 display-6 fw-bolder" >Laptop Shop</h1>
  <p className=" mb-4 display-6 ml ">Any type of laptop you need, you will find it here</p>
  </div>
    <h3 className="text-center  mb-4 display-6 fw-bolder ">First Group </h3>
  <div className="w-100 d-flex  m-auto">
  <img src="/imgs/1111.jfif" className="rounded mx-auto d-block mb-5   " alt="..."/>
  </div>

  <h3 className="text-center  mt-4 display-6 fw-bolder">Second Group</h3>
  <div className=" w-100 d-flex  m-auto">
  <img src="/imgs/2222.jfif" className="rounded mx-auto d-block w-25 mb-5 " alt="..."/>
  </div>

  <h3 className="text-center  display-6 fw-bolder">Third Group</h3>
  <div className="w-100 d-flex  m-auto  ">
  <img src="/imgs/3333.jfif" className="rounded mx-auto d-block w-25 " alt="..."/>

  </div>
  
  </>
)};

export default Home;
