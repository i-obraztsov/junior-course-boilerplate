import React from 'react';
import pt from 'prop-types';
import { inputNumberMask } from '../../utils/inputNumberMask';
import { stringifyQuery, parseQuery } from '../../utils/url';
import Discount from 'csssr-school-input-discount/lib';
import {
  Form,
  Input,
  Fieldset,
  Legend,
  Label,
  InputWrap,
  Row,
  Checkbox,
  LabelAsButton
} from '../Form';

import { BaseButton } from '../../styles';

export default class Filter extends React.Component {
  static defaultProps = {
    setFilter: () => {},
    minPrice: 0,
    maxPrice: 10,
    discount: 0,
    categories: [],
    activeCategories: [],
    resetFilter: () => {},
  }

  componentDidMount() {
    const { setFilter } = this.props;
    const { category } = parseQuery(window.location.search.substr(1));

    if (category) {
      setFilter({ activeCategories: category });
    }

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setFromHistory = (event) => {
    const { setFilter } = this.props;
    const { category = [] } = parseQuery(window.location.search.substr(1));

    setFilter({ activeCategories: category });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChangePrice = (event) => {
    const { setFilter } = this.props;
    const maskedValue = inputNumberMask(event.target.value);

    const newState = {
      [event.target.name]: maskedValue,
    };

    setFilter(newState);
  }

  handleChangeCategory = (event) => {
    const { setFilter, activeCategories } = this.props;
    let categories = [];

    if (event.target.checked) {
      categories = activeCategories.concat(event.target.name);
    } else {
      categories = activeCategories.filter(
        (category) => category !== event.target.name
      );
    }

    const url = `${window.location.pathname}?${stringifyQuery({
      category: categories,
    })}`;

    window.history.pushState(null, 'category', url);

    const newState = { activeCategories: categories };

    setFilter(newState);
  }

  handleResetFilter = (event) => {
    event.preventDefault();

    const { resetFilter } = this.props;

    resetFilter();
    window.history.pushState(null, 'page', window.location.pathname);
  }

  render() {
    const {
      activeCategories,
      categories,
      discount,
      minPrice,
      maxPrice,
    } = this.props;

    return(
      <Form method="post" action="#" onSubmit={this.handleSubmit}>
        <Fieldset>
          <Legend>Цена</Legend>
          <Row noWrap>
            <Label>
              от
              <InputWrap>
                <Input
                  name="minPrice"
                  type="text"
                  value={minPrice}
                  onChange={this.handleChangePrice}
                />
              </InputWrap>
            </Label>

            <Label>
              до
              <InputWrap>
                <Input
                  name="maxPrice"
                  type="text"
                  value={maxPrice}
                  onChange={this.handleChangePrice}
                />
              </InputWrap>
            </Label>
          </Row>
        </Fieldset>

        <Discount
          title="Скидка"
          name="discount"
          onChange={this.handleChangePrice}
          value={discount}
        />

        <Fieldset marginTop>
          <Legend>Категории</Legend>
            <Row>
              {categories.map(category => {
                return (
                  <React.Fragment key={category}>
                    <Checkbox
                      id={category}
                      type="checkbox"
                      checked={activeCategories.includes(category)}
                      name={category}
                      onChange={this.handleChangeCategory}
                    />
                    <LabelAsButton as="label" htmlFor={category} secondary>
                      {category}
                    </LabelAsButton>
                  </React.Fragment>
                )
              })}
            </Row>
        </Fieldset>

        <BaseButton
          type="reset"
          secondary
          fullWidth
          onClick={this.handleResetFilter}
        >
          Сбросить фильтры
        </BaseButton>
      </Form>
    )
  }
}

Filter.propTypes = {
  setFilter: pt.func.isRequired,
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  discount: pt.number.isRequired,
  categories: pt.arrayOf(pt.string).isRequired,
  activeCategories: pt.arrayOf(pt.string).isRequired,
  resetFilter: pt.func.isRequired,
};

