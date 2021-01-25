import React from 'react';
import pt from 'prop-types';
import withInputNumber from '../../hocs/withInputNumber';
import Discount from 'csssr-school-input-discount/lib';
import {
  Form,
  Input,
  Fieldset,
  Legend,
  Label,
  InputWrap,
  Row,
} from '../Form';

import { LogRender } from '../LogRender';

const InputNumber = withInputNumber(Input);
const DiscountInput = withInputNumber(Discount);

export class Filter extends LogRender {
  handleChangeInput = (filter) => {
    const { onApply, minPrice, maxPrice, discount } = this.props;

    onApply({
      min: filter.minPrice !== undefined ? filter.minPrice : minPrice,
      max: filter.maxPrice !== undefined ? filter.maxPrice : maxPrice,
      discount: filter.sale !== undefined ? filter.sale : discount,
    });
  }

  render() {
    const { minPrice, maxPrice, discount } = this.props;

    return(
      <Form method="post" action="#">
        <Fieldset>
          <Legend>Цена</Legend>
          <Row>
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
      </Form>
    )
  }
}

Filter.propTypes = {
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  discount: pt.number,
  onApply: pt.func.isRequired
};

