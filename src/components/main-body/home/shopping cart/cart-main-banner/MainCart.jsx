import React from 'react'
import { Link } from 'react-router-dom';
import brdscrbImg from '../../../../../assets/images/breadcrumbs_img.png';
import '../Cart.css';

function MainCart({ name }) {
    return (
        <div>
            <section className="breadcrumbs-wrapper">
                <div className="container">
                    <div className='row'>
                        <h1>{name}</h1>
                        <ol className="breadcrumb">
                            <Link to='/' className="breadcrumb-item"><li>Home</li></Link>
                            <li className="breadcrumb-item active">{name}</li>
                        </ol>
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