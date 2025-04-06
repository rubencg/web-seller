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

  // Function to split description into paragraphs
  const renderDescription = (description: string) => {
    return description.split('\n').map((paragraph, index) => (
      <p key={index} className="product-description">
        {paragraph.trim()}
      </p>
    ));
  };

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
          <div className="description-container">
            {renderDescription(product.description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
