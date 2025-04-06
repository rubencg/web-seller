import React, { useState } from 'react';
import './ProductPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Product, Asset} from '../types';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductPage = ({product}: {product: Product}) => {
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);

  // Function to split description into paragraphs
  const renderDescription = (description: string) => {
    return description.split('\n').map((paragraph, index) => (
      <p key={index} className="product-description">
        {paragraph.trim()}
      </p>
    ));
  };

  const renderAsset = (asset: Asset, index: number) => {
    if (asset.type === 'video') {
      return (
        <video 
          src={asset.url}
          controls
          className="product-asset"
          onClick={() => setExpandedAsset(asset.url)}
        />
      );
    }
    return (
      <img 
        src={asset.url}
        alt={`${product.name} ${index + 1}`}
        className="product-image"
        onClick={() => setExpandedAsset(asset.url)}
      />
    );
  };

  return (
    <div className="product-page">
      {expandedAsset && (
        <div className="asset-overlay" onClick={() => setExpandedAsset(null)}>
          {expandedAsset.endsWith('.mp4') ? (
            <video src={expandedAsset} controls autoPlay />
          ) : (
            <img src={expandedAsset} alt="Expanded view" />
          )}
        </div>
      )}
      <div className="product-container">
        <div className="product-image-section">
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            className="mySwiper"
            modules={[Pagination, Navigation]}
            navigation={true}
            spaceBetween={10}
            slidesPerView={1}
          >
            {product.assets.map((asset, index) => (
              <SwiperSlide key={index}>
                {renderAsset(asset, index)}
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
