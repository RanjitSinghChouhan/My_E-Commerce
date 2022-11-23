import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import brdscrbImg from '../../../../../assets/images/breadcrumbs_img.png';
import '../Cart.css';

function MainCart() {
    return (
        <div>
            <section className="breadcrumbs-wrapper">
                <div className="container">
                    <div className='row'>
                        <h1>Cart</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <Link to='/' className="breadcrumb-item"><li >Home</li></Link>
                                <li className="breadcrumb-item active">Cart</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="img">
                        <img src={brdscrbImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainCart