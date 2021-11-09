import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { AuthContext } from '../../Context/AuthContext';
import { LoaderContext } from '../../Context/LoaderContext';
import { toast } from 'react-toastify';
import app from '../../firebase';

export default function SignUp() {

    const {user} = useContext(AuthContext);
    const auth = getAuth(app);
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const {loader,setLoader} = useContext(LoaderContext);

    

    let HandleSignUp = (e) => {
        setLoader(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
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
                <h1 className="text-center mb-4">Sign Up</h1>
                <form className="px-lg-5 px-md-3 mt-3 mb-4 d-flex flex-column justify-content-between" onSubmit={(e) => HandleSignUp(e)}>
                    <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                    <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                    <input placeholder="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                    <button className="btn btn-success w-100 align-self-center" disabled={password==="" || confirmPassword !== password} type="submit">Sign Up</button>
                </form>
                <p className="text-center mb-3"><Link to="/signIn">Already have an account</Link></p>
            </div>
            
        </div>
    )
}