import React from 'react';
import './TopHeader.css'

function TopHeader() {
    const languages = ['ENG', 'SPA', 'ARI', 'UKR'];
    const currency = ['USD', 'DZA', 'CAD', 'XCD'];
    return (
        <div className="top-head-bar">
            <div>
                World Wide Completely Free Returns and Free Shipping
            </div>
            <div className="top-selectbox">
                <select className="small">
                    {languages.map((lan, index) => { return <option value={lan} key={index}>{lan}</option> })}
                </select>
                |
                <select className="small">
                    {currency.map((curr, index) => { return <option value={curr} key={index}>{curr}</option> })}
                </select>
            </div>
        </div>
    )
}

export default TopHeader;