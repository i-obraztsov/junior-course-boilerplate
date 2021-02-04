import React from 'react';
import pt from 'prop-types';
import { inputNumberMask } from '../../utils/inputNumberMask';
import { stringifyQuery } from '../../utils/url';
import { withLogRender } from '../../hocs/withLogRender';
import { AppContext } from '../../AppContext';
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

class Filter extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChangePrice = (event) => {
    const { applyFilter } = this.props;
    const maskedValue = inputNumberMask(event.target.value);

    const newState = {
      [event.target.name]: maskedValue,
    };

    applyFilter(newState);
  }

  handleChangeCategory = (event) => {
    const { applyFilter, activeCategories } = this.props;
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

    applyFilter(newState);
  }

  render() {
    const { categories, resetFilter } = this.props;

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
                  onChange={this.handleChangePrice}
                />
              </InputWrap>
            </Label>
          </Row>
        </Fieldset>

        <AppContext.Consumer>
          {(context) => (
            <Discount
              title="Скидка"
              name="discount"
              onChange={this.handleChangePrice}
              value={context.discount}
            />
          )}
        </AppContext.Consumer>

        <Fieldset marginTop>
          <Legend>Категории</Legend>
            <Row>
              {categories.map(category => {
                return (
                  <React.Fragment key={category}>
                    <Checkbox
                      id={category}
                      type="checkbox"
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

        <Button
          type="reset"
          secondary
          fullWidth
          onClick={resetFilter}
        >
          Сбросить фильтры
        </Button>
      </Form>
    )
  }
}

export default withLogRender(Filter);

Filter.propTypes = {
  applyFilter: pt.func.isRequired,
  activeCategories: pt.array.isRequired,
  categories: pt.array.isRequired,
  resetFilter: pt.func.isRequired,
};

