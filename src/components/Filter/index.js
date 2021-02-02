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
} from '../Form';

const InputNumber = withInputNumber(Input);
const DiscountInput = withInputNumber(Discount);


class Filter extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

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
      <Form method="post" action="#" onSubmit={this.handleSubmit}>
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

export default withLogRender(Filter);

Filter.propTypes = {
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  discount: pt.number,
  onApply: pt.func.isRequired
};

