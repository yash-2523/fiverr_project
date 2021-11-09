import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

export default function GlobalLoader(props) {
    return (
        <div className="w-100 h-100 position-fixed top-0 left-0 d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: "2000"}}>
            <HashLoader size={60} color="#36D7B7" />
        </div>
    )
}