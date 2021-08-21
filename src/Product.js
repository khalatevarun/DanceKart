import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product">
      <img
        className="product__image"
        src="//lp2.hm.com/hmgoepprod?set=source[/c3/08/c308e8eae26682c548bf8be6608bf7dccffedd45.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]"
        alt=""
      />
      <div className="product__info">
        <div className="product_infoLineOne">Relaxed Fit Hoodie</div>
        <div className="product__infoLineTwo">
          Hoodie in sweatshirt fabric made from a cotton blend.
        </div>
        <br />
        <div className="product_infoLineThree">
          <div className="product__price">Rs. 1,499</div>
          <div className="product__add">+ Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
