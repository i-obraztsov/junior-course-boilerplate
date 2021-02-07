import { connect } from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = (state) => ({
  minPrice: state.minPrice,
  maxPrice: state.maxPrice,
  discount: state.discount,
  products: state.products,
  activeCategories: state.activeCategories,
});

export default connect(mapStateToProps)(Products);
