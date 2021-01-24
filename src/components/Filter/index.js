import React from 'react';
import pt from 'prop-types';
import { Form, InputNumber, Fieldset, Legend, Label, Button } from '../Form';
import { LogRender } from '../LogRender';

export class Filter extends LogRender {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChangeInput = (filter) => {
    const { onApply, minPrice, maxPrice } = this.props;

    onApply({
      min: filter.minPrice || minPrice,
      max: filter.maxPrice || maxPrice,
    });
  }

  render() {
    const { minPrice, maxPrice } = this.props;

    return(
      <Form method="post" action="#" onSubmit={this.handleSubmit}>
        <Fieldset>
          <Legend>Цена</Legend>
          <Label>
            от
            <InputNumber
              value={minPrice}
              handleChangeInput={this.handleChangeInput}
              name="minPrice"
            />
          </Label>

          <Label>
            до
            <InputNumber
              value={maxPrice}
              handleChangeInput={this.handleChangeInput}
              name="maxPrice"
            />
          </Label>
        </Fieldset>

        <Button type="submit">Применить</Button>
      </Form>
    )
  }
}

Filter.propTypes = {
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  onApply: pt.func.isRequired
};

