import React from 'react';
import pt from 'prop-types';
import { Redirect } from 'react-router-dom';
import { EmptyContent } from '../EmptyContent';
import { ProductPreview } from '../ProductPreview';
import { Placeholder } from '../Placeholder';
import Pagination from '../Pagination';

import { ListProducts, ListItemProduct } from './style';

export default class ProductList extends React.Component {
  static defaultProps = {
    products: [],
    currentPage: 1,
  }

  componentDidMount () {
    const { getProducts, products } = this.props;

    if (!products.length) {
      getProducts();
    }
  }

  render() {
    const { currentPage, products, loading, error } = this.props;

    if (loading) {
      return <Placeholder />
    }

    if (error) {
      return (
        <EmptyContent>
          <span>{error}</span>
        </EmptyContent>
      );
    }

    if (!products.length && !loading) {
      return (
        <Redirect
          to={{
            pathname: '/notFound',
            state: {
              title: 'Товары не найдены',
              showLink: false,
            }
          }}
        />
      )
    }

    if (currentPage > products.length) return null;

    return (
      <>
        <ListProducts>
          {products[currentPage - 1].map(
            ({ id, name, status, price, discount, stars, img }) => (
              <ListItemProduct key={id}>
                <ProductPreview
                  id={id}
                  status={status}
                  img={img}
                  title={name}
                  price={price}
                  subPrice={discount && price + price / discount}
                  rating={stars}
                />
              </ListItemProduct>
            )
          )}
        </ListProducts>
        <Pagination
          pages={products}
          currentPage={currentPage}
        />
      </>
    )
  }
}

ProductList.propTypes = {
  products: pt.arrayOf(pt.arrayOf(pt.shape({
    id: pt.number.isRequired,
    name: pt.string.isRequired,
    stars: pt.number.isRequired,
    price: pt.number.isRequired,
    sub_price: pt.oneOfType([
      pt.number,
      pt.oneOf([null])
    ]),
    img: pt.string.isRequired,
    category: pt.string.isRequired,
    status: pt.string.isRequired,
  }).isRequired).isRequired).isRequired,
  currentPage: pt.number.isRequired,
};
