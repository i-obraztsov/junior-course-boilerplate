import { connect } from 'react-redux';
import { productSliceSelector, getProducts, } from '../modules/products';
import ProductList from '../components/ProductList';

const mapStateToProps = ({ filter, router, productsList }) => ({
  loading: productsList.loading,
  error: productsList.error,
  products: productSliceSelector({ ...filter, ...router.location, ...productsList }),
  currentPage: +router.location.query.page || 1,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
