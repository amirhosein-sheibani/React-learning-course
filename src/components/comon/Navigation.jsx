import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Navigation = () => {
  const { id } = useParams();
  const navigate=useNavigate();

  const handleSave=()=>{
    navigate("/Movies")
  }
  return (
    <div>
      <h1>Movie Form : {id}</h1>
      <button style={{borderRadius:"10px"}} className="btn bg-primary text-white" onClick={handleSave}>
        save
      </button>
    </div>
  );  
};

export default Navigation;
