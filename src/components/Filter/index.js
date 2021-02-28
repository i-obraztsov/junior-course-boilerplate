import React from 'react';
import pt from 'prop-types';
import { inputNumberMask } from '../../utils/inputNumberMask';
import Discount from 'csssr-school-input-discount/lib';

import { ResetLink, CategoryLink } from './style';

import {
  Form,
  Input,
  Fieldset,
  Legend,
  Label,
  InputWrap,
  Row,
} from '../Form';

export class Filter extends React.Component {
  static defaultProps = {
    setFilter: () => {},
    minPrice: 0,
    maxPrice: 10,
    discount: 0,
    categories: [],
    activeCategory: '',
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

  render() {
    const {
      activeCategory,
      categories,
      discount,
      minPrice,
      maxPrice,
      loading,
      error
    } = this.props;

    if (loading || error || !categories.length) {
      return null;
    }

    return(
      <>
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
        </Form>

        <Fieldset as="div" marginTop>
        <Legend as="div">Категории</Legend>
          <Row>
            {categories.map(category => (
              <CategoryLink
                key={category}
                to={`?category=${category}`}
                isActive={activeCategory === category}
              >
                {category}
              </CategoryLink>
            ))}
          </Row>
      </Fieldset>

      <ResetLink to={{ search: '' }}>
        Сбросить фильтры
      </ResetLink>
    </>
    )
  }
}

Filter.propTypes = {
  setFilter: pt.func.isRequired,
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  discount: pt.number.isRequired,
  categories: pt.arrayOf(pt.string).isRequired,
  activeCategory: pt.string.isRequired,
};

