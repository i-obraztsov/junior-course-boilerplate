import { connect } from 'react-redux';
import { productSliceSelector, } from '../modules/products';
import ProductList from '../components/ProductList';

const mapStateToProps = ({ filter, router }) => ({
  products: productSliceSelector({ ...filter, ...router.location }),
  currentPage: +router.location.query.page || 1,
});

export default connect(mapStateToProps)(ProductList);
