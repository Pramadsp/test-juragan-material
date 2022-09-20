import React from 'react'
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column notfound-container">
            <img src="/assets/img/404.png" />
            <Link to="/" className="btn bg-blue mt-5 text-white btn-link-notfound" style={{width: '50%'}}>Kembali</Link>
        </div>
    )
}
