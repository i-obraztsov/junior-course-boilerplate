import { connect } from 'react-redux';
import { getProducts, productSelector } from '../modules/products';
import { Product } from '../components/Product';

const mapStateToProps = ({ productsList }, props) => ({
  loading: productsList.loading,
  error: productsList.error,
  product: productSelector(productsList, props),
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
