import { connect } from 'react-redux';
import { withHistory } from '../hocs/withHistory';
import { productSliceSelector, setPage } from '../modules/pagination';
import Products from '../components/Products';

const mapDispatchToProps = (dispatch) => ({
  setPage: (pageNumber) => dispatch(setPage(pageNumber)),
});

const mapStateToProps = ({ filter, pagination }) => ({
  products: productSliceSelector(filter),
  currentPage: pagination.page,
});

export default connect(mapStateToProps, mapDispatchToProps)(withHistory(Products));
