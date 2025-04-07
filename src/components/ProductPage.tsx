import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Product, Asset } from '../types';
import { formatDate } from '../utils';

const ProductPage = ({ product }: { product: Product }) => {
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);

  const renderDescription = (description: string) => {
    return description.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-3 text-secondary">
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
          className="img-fluid rounded"
          onClick={() => setExpandedAsset(asset.url)}
          style={{ cursor: 'pointer', maxHeight: '600px' }}
        />
      );
    }
    return (
      <img
        src={asset.url}
        alt={`${product.name} ${index + 1}`}
        className="img-fluid rounded"
        onClick={() => setExpandedAsset(asset.url)}
        style={{ cursor: 'pointer', maxHeight: '600px', objectFit: 'contain' }}
      />
    );
  };

  return (
    <div className="container py-4">
      {expandedAsset && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-90"
          style={{ zIndex: 1050, cursor: 'pointer' }}
          onClick={() => setExpandedAsset(null)}
        >
          {expandedAsset.endsWith('.mp4') ? (
            <video src={expandedAsset} controls autoPlay className="img-fluid" style={{ maxHeight: '90vh' }} />
          ) : (
            <img src={expandedAsset} alt="Expanded view" className="img-fluid" style={{ maxHeight: '90vh' }} />
          )}
        </div>
      )}

      <div className="row g-4">
        {/* Image / Media Slider */}
        <div className="col-md-6">
          <Swiper
            pagination={{ type: 'fraction' }}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className="rounded overflow-hidden"
            modules={[Pagination, Navigation]}
          >
            {product.assets.map((asset, index) => (
              <SwiperSlide key={index}>{renderAsset(asset, index)}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="h2 mb-3">{product.name}</h1>
          <div className="mb-4">
            <div className="h4 fw-bold text-dark">${product.price}</div>
            {product.originalPrice && (
              <div className="text-muted">
                Original price:{' '}
                <span className="text-decoration-line-through">${product.originalPrice}</span>
              </div>
            )}
          </div>

          <div className="mb-4">{renderDescription(product.description)}</div>

          <div className="pt-4 border-top">
            <p className="mb-2">
              <strong>Date Bought:</strong> {formatDate(product.dateBought)}
            </p>
            {product.originalProductUrl && (
              <a
                href={product.originalProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fw-medium text-decoration-none"
              >
                View Original Product
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
