import { connect } from 'react-redux';
import { setFilter } from '../modules/filter';
import { Filter } from '../components/Filter';

const mapStateToProps = ({ filter, router }) => ({
  minPrice: filter.minPrice,
  maxPrice: filter.maxPrice,
  discount: filter.discount,
  categories: filter.allCategories,
  activeCategory: router.location.query.category || '',
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
