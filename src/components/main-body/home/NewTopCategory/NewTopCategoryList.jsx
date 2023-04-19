import React from 'react';
import img1 from '../../../../assets/images/category/category_img_1.png';
import img2 from '../../../../assets/images/category/category_img_2.png';
import img3 from '../../../../assets/images/category/category_img_3.png';
import img4 from '../../../../assets/images/category/category_img_4.png';
import img5 from '../../../../assets/images/category/category_img_5.png';
import img6 from '../../../../assets/images/category/category_img_6.png';
import img7 from '../../../../assets/images/category/category_img_7.png';
import img8 from '../../../../assets/images/category/category_img_8.png';
import img10 from '../../../../assets/images/category/category_img_10.png';
import './NewTopCategoryList.css';

function NewTopCategoryList() {
  const imgs = [
    { name: 'Lipstick', image: img1 },
    { name: 'Bracelet', image: img2 },
    { name: 'Top', image: img3 },
    { name: 'Jeans', image: img4 },
    { name: 'Earings', image: img5 },
    { name: 'Necklace', image: img6 },
    { name: 'Skirts', image: img10 },
    { name: 'Shoes & Bag', image: img7 },
    { name: 'Two Pices', image: img8 },
    { name: 'Jeans', image: img4 },
    { name: 'Earings', image: img5 },
    { name: 'Necklace', image: img6 },
  ];
  return (
    <>
      <section>
        <div className='category-container'>
          <h1 className='section-head'>New Top Category</h1>
          <div className='row-category-container'>
            {imgs.map((obj, index) => {
              return (
                <div className='category-list' key={index}>
                  <a href='product-list.html'>
                    <div className='img'>
                      <img src={obj.image} alt='' />
                    </div>
                    <h5>{obj.name}</h5>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewTopCategoryList;
