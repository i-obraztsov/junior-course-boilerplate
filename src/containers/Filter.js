import { connect } from 'react-redux';
import { setFilter } from '../modules/filter';
import { allCategoriesSelector } from '../modules/products';
import { Filter } from '../components/Filter';

const mapStateToProps = ({ filter, router, productsList }) => ({
  minPrice: filter.minPrice,
  maxPrice: filter.maxPrice,
  discount: filter.discount,
  loading: productsList.loading,
  error: productsList.error,
  categories: allCategoriesSelector(productsList),
  activeCategory: router.location.query.category || '',
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
