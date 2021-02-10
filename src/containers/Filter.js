import { connect } from 'react-redux';
import { resetFilter, applyFilter } from '../actions';
import Filter from '../components/Filter';

const mapStateToProps = (state) => ({
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  discount: state.discount,
  categories: state.allCategories,
  activeCategories: state.activeCategories,
});


const mapDispatchToProps = (dispatch) => ({
  resetFilter: () => dispatch(resetFilter()),
  applyFilter: (filter) => dispatch(applyFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
