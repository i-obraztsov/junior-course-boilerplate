import React from 'react';
import pt from 'prop-types';
import withInputNumber from '../../hocs/withInputNumber';
import { withLogRender } from '../../hocs/withLogRender';
import Discount from 'csssr-school-input-discount/lib';
import {
  Form,
  Input,
  Fieldset,
  Legend,
  Label,
  InputWrap,
  Row,
  Button,
  Checkbox,
  LabelAsButton
} from '../Form';

const InputNumber = withInputNumber(Input);
const DiscountInput = withInputNumber(Discount);

class Filter extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChangeInput = (filter) => {
    const {
      onApply,
      minPrice,
      maxPrice,
      discount,
      activeCategories,
    } = this.props;

    onApply({
      minPrice: filter.minPrice !== undefined ? filter.minPrice : minPrice,
      maxPrice: filter.maxPrice !== undefined ? filter.maxPrice : maxPrice,
      discount: filter.sale !== undefined ? filter.sale : discount,
      categories: filter.categories !== undefined ? filter.categories : activeCategories,
    });
  }

  onChangeCheckbox = (event) => {
    const { activeCategories } = this.props;
    let categories = activeCategories;

    if (event.target.checked) {
      categories = categories.concat(event.target.name);
    } else {
      categories = categories.filter(category => category !== event.target.name)
    }

    this.handleChangeInput({ categories })
  }

  render() {
    const { minPrice, maxPrice, discount, categories } = this.props;

    return(
      <Form method="post" action="#" onSubmit={this.handleSubmit}>
        <Fieldset>
          <Legend>Цена</Legend>
          <Row noWrap>
            <Label>
              от
              <InputWrap>
                <InputNumber
                  value={minPrice}
                  name="minPrice"
                  handleChangeInput={this.handleChangeInput}
                />
              </InputWrap>
            </Label>

            <Label>
              до
              <InputWrap>
                <InputNumber
                  value={maxPrice}
                  name="maxPrice"
                  handleChangeInput={this.handleChangeInput}
                />
              </InputWrap>
            </Label>
          </Row>
        </Fieldset>
        <DiscountInput
          title="Скидка"
          name="sale"
          value={discount}
          handleChangeInput={this.handleChangeInput}
        />

        <Fieldset marginTop>
          <Legend>Категории</Legend>
            <Row>
              {categories.map(category => {
                return (
                  <React.Fragment key={category}>
                    <Checkbox
                      id={category}
                      name={category}
                      value={category}
                      onChange={this.onChangeCheckbox}
                    />
                    <LabelAsButton as="label" htmlFor={category} secondary>
                      {category}
                    </LabelAsButton>
                  </React.Fragment>
                )
              })}
            </Row>
        </Fieldset>

        <Button type="reset" secondary fullWidth>Сбросить фильтры</Button>
      </Form>
    )
  }
}

export default withLogRender(Filter);

Filter.propTypes = {
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  categories: pt.array.isRequired,
  discount: pt.number,
  onApply: pt.func.isRequired
};

