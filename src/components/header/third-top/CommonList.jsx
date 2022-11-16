import React from 'react'
import megamenu_banner from '../../../assets/images/megamenu_banner.jpg'
import './ThirdHeader.css'

function CommonList() {
    const accessoriesAndParts = ['Cables & Adapters', 'Batteries', 'Chargers', 'Bags & Cases', 'Electronic Cigarettes'];
    const smartElectronics = ['Cables & Adapters', 'Chargers', 'Bags & Cases', 'Light Bulbs', 'Watch Fashion'];
    const accessoriesAndPartsTwo = ['Projectors', 'Audio Amplifier Boards', 'Smart Electronics', 'Bags & Cases', 'Tees, Knits & Pools'];
    const electronicCegarettes = ['Audio & Video', 'Televisions', 'TV Receivers', 'Projectors', 'TV Sticks'];
    const portableAudioAndVideo = ['Portable Audio & Video', 'Audio & Video', 'Televisions', 'TV Receivers', 'TV Sticks'];
    const megaMenuSubItems = ['Accessories & Parts', 'Smart Electronics', 'Accessories & Parts', 'Electronic Cigarettes', 'Portable Audio & Video', 'Makeup Kit'];
    return (
        <>
            <ul className="megamenu">
                {megaMenuSubItems.map((item, index) => {
                    return <li className="sub-column-item" key={index}><a href="#">{item}</a>{
                        index === 0 ? <ul>
                            {accessoriesAndParts.map((item, index) => { return <li key={index}><a href="#">{item}</a></li> })}
                        </ul> : index === 1 ? <ul>
                            {smartElectronics.map((item, index) => { return <li key={index}><a href="#">{item}</a></li> })}
                        </ul> : index === 2 ? <ul>
                            {accessoriesAndPartsTwo.map((item, index) => { return <li key={index}><a href="#">{item}</a></li> })}
                        </ul> : index === 3 ? <ul>
                            {electronicCegarettes.map((item, index) => { return <li key={index}><a href="#">{item}</a></li> })}
                        </ul> : index === 4 ? <ul>
                            {portableAudioAndVideo.map((item, index) => { return <li key={index}><a href="#">{item}</a></li> })}
                        </ul> : index === 5 ? <ul>
                            <li className="mega-menu-banner"><a href="#"><img src={megamenu_banner} alt="" /></a>
                            </li>
                        </ul> : ''
                    }
                    </li>
                })}
            </ul>
        </>
    )
}

export default CommonList