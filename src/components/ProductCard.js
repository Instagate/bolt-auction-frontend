import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Elevation from '../styles/Elevation';
import Colors from '../styles/Colors';

const ProductCardBlock = styled.div`
  border-radius: 4px;
  margin-top: 24px;
  box-shadow: ${Elevation.z1};
  background-color: ${Colors.surface};

  .product-img {
    margin-bottom: 12px;

    img {
      border-radius: 4px 4px 0 0;
      display: block;
      min-width: 225px;
      min-height: 225px;
      object-fit: cover;
    }
  }

  .product-data {
    margin: 0 16px 12px 16px;
    display: flex;
    flex-direction: column;

    .product-title {
    }

    .auction-data {
      margin-top: auto;
      display: flex;
      justify-content: space-between;

      .limit-time {
        padding-top: 1em;
      }
    }
  }
`;

const ProductCard = ({ id, owner, name, currentPrice, imageArr }) => {
  return (
    <ProductCardBlock>
      <Link to={`/products/${id}?owner=${owner}`}>
        <div className="product-img">
          <img
            src={`${
              imageArr?.length > 0
                ? imageArr[0]
                : 'https://www.yokogawa.com/public/img/default_image.png'
            }`}
            alt="이미지"
          />
        </div>
        <div className="product-data">
          <h5 className="product-title">{name}</h5>
          <div className="auction-data">
            <div className="price">
              <h6>현재 가격</h6>
              <h5>{currentPrice}</h5>
            </div>
            <div className="limit-time">
              <h6>0d 00h 00m</h6>
            </div>
          </div>
        </div>
      </Link>
    </ProductCardBlock>
  );
};

export default ProductCard;