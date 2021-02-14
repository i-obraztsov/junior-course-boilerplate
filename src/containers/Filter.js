import { connect } from 'react-redux';
import { withHistory } from '../hocs/withHistory';
import { resetFilter, setFilter } from '../modules/filter';
import { setPage } from '../modules/pagination';
import { Filter } from '../components/Filter';

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
  setPage: (pageNumber) => dispatch(setPage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withHistory(Filter));
