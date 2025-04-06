import React, { useState } from 'react';
import './ProductPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from '../types';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProductPage = ({product}: {product: Product}) => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div className="product-page">
      {expandedImage && (
        <div className="image-overlay" onClick={() => setExpandedImage(null)}>
          <img src={expandedImage} alt="Expanded view" />
        </div>
      )}
      <div className="product-container">
        <div className="product-image-section">
          <Swiper pagination={{
                type: 'fraction',
              }}
              className="mySwiper"
              modules={[Pagination, Navigation]}
              navigation={true} spaceBetween={10} slidesPerView={1}>
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={img} 
                  alt={`${product.name} ${index + 1}`} 
                  className="product-image"
                  onClick={() => setExpandedImage(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="product-details-section">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-price">${product.price}</div>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
