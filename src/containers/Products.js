import { connect } from 'react-redux';
import { filterGoods } from '../utils/filterGoods';
import { memoize } from '../utils/memoize';
import Products from '../components/Products';

const memoizeFilter = memoize(filterGoods);

const mapStateToProps = ({
  minPrice,
  maxPrice,
  discount,
  activeCategories,
  allCategories,
  products,
}) => {
  const filteredProducts = memoizeFilter(products, {
    categories: activeCategories.length ? activeCategories : allCategories,
    minPrice,
    maxPrice,
    discount,
  });

  return {
    products: filteredProducts,
  };
};

export default connect(mapStateToProps)(Products);
