import { connect } from 'react-redux';
import { filterGoods } from '../utils/filterGoods';
import { memoize } from '../utils/memoize';
import Products from '../components/Products';

const memoizeFilter = memoize(filterGoods);

const mapStateToProps = ({ filter }) => {
  const filteredProducts = memoizeFilter(filter.products, {
    categories: filter.activeCategories.length
      ? filter.activeCategories
      : filter.allCategories,
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    discount: filter.discount,
  });

  return {
    products: filteredProducts,
  };
};

export default connect(mapStateToProps)(Products);
