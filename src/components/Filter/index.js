import React from 'react';
import pt from 'prop-types';
import { Form, Input, Fieldset, Legend, Label, Button } from '../Form';
import { LogRender } from '../LogRender';

export class Filter extends LogRender {
  constructor(props) {
    super(props);

    this.minRef = React.createRef(0);
    this.maxRef = React.createRef(100);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onApply } = this.props;
    const min = +this.minRef.current.value;
    const max = +this.maxRef.current.value;

    if (min <= 0 || max <= 0 || min > max) return;

    onApply(min, max);
  }

  render() {
    const { minPrice, maxPrice } = this.props;

    return(
      <Form method="post" action="#" onSubmit={this.handleSubmit}>
        <Fieldset>
          <Legend>Цена</Legend>
          <Label>
            от
            <Input type="number" ref={this.minRef} defaultValue={minPrice} />
          </Label>

          <Label>
            до
            <Input type="number" ref={this.maxRef} defaultValue={maxPrice} />
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

