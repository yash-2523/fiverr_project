import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import {getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth'
import { AuthContext } from '../../Context/AuthContext';
import { LoaderContext } from '../../Context/LoaderContext';
import { toast } from 'react-toastify';
import app from '../../firebase';

export default function SignIn() {

    const {user} = useContext(AuthContext);
    const email = useRef("");
    const password = useRef("");
    const {loader,setLoader} = useContext(LoaderContext);
    const auth = getAuth(app); 

    let HandleGoogleSignIn = () => {
       setLoader(true)
       
       const provider = new GoogleAuthProvider();
       signInWithPopup(auth,provider).then(result => {
          setLoader(false)
       }).catch(err => {
           setLoader(false)
           toast.error(err.message)
       })
    }

    let HandleSignIn = (e) => {
        setLoader(true);
        e.preventDefault();
        
        signInWithEmailAndPassword(auth,email.current.value,password.current.value).then((userCredential) => {
            setLoader(false);
        }).catch(err => {
            setLoader(false);
            
            toast.error(err.message)
            
        }) 
    }
    if(user !== null){
        return <Navigate to="/"></Navigate>
    }
    return (
        <div className="d-flex justify-content-center align-items-centers">
            <div className="col-lg-5 col-md-7 col-10 mt-5 py-4 px-5 shadow rounded auth-container">
                <h1 className="text-center mb-4">Sign In</h1>
                <form className="px-lg-5 px-md-3 mt-3 mb-4 d-flex flex-column justify-content-between" onSubmit={(e) => HandleSignIn(e)}>
                    <input placeholder="Email" ref={email} type="email" required></input>
                    <input placeholder="Password" ref={password} type="password" required></input>
                    <button className="btn btn-success w-100 align-self-center" type="submit">Sign In</button>
                    
                </form>
                <hr></hr>
                <div className="w-100 d-flex flex-lg-row flex-md-row flex-sm-column flex-xsm-column flex-column flex-wrap justify-content-around align-items-center mb-4" style={{columnGap: '1rem',rowGap: '0.5rem'}}>
                    <button className="btn btn-light d-flex align-items-center shadow" style={{columnGap: "0.5rem"}} onClick={HandleGoogleSignIn}><img src="https://img.icons8.com/color/16/000000/google-logo.png" className="m-0" />       Sign In with Google</button>
                </div>
                <p className="text-center mb-3"><Link to="/signUp">Create an account</Link></p>
            </div>
        </div>
    )
}