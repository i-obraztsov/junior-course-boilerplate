import { connect } from 'react-redux';
import { resetFilter, setFilter } from '../modules/filter';
import Filter from '../components/Filter';

const mapStateToProps = ({ filter }) => ({
  minPrice: filter.minPrice,
  maxPrice: filter.maxPrice,
  discount: filter.discount,
  categories: filter.allCategories,
  activeCategories: filter.activeCategories,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilter: () => dispatch(resetFilter()),
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
