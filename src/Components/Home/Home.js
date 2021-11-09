import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Home() {
  
  const {user} = useContext(AuthContext);

  if(user === null){
    return <Navigate to="/signIn"></Navigate>
  }
  return (
    <div>
      <h1>Continue from here</h1>
    </div>
  );
}