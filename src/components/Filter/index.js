import React from 'react';
import pt from 'prop-types';
import withContext from '../../hocs/withContext';
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

const InputNumber = withContext(Input);
const DiscountInput = withContext(Discount);
const CategoryCheckbox = withContext(Checkbox);

class Filter extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { categories } = this.props;

    return(
      <Form method="post" action="#" onSubmit={this.handleSubmit}>
        <Fieldset>
          <Legend>Цена</Legend>
          <Row noWrap>
            <Label>
              от
              <InputWrap>
                <InputNumber name="minPrice" type="text"/>
              </InputWrap>
            </Label>

            <Label>
              до
              <InputWrap>
                <InputNumber name="maxPrice" type="text" />
              </InputWrap>
            </Label>
          </Row>
        </Fieldset>

        <DiscountInput
          title="Скидка"
          name="discount"
        />

        <Fieldset marginTop>
          <Legend>Категории</Legend>
            <Row>
              {categories.map(category => {
                return (
                  <React.Fragment key={category}>
                    <CategoryCheckbox
                      id={category}
                      type="checkbox"
                      name={category}
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
  categories: pt.array.isRequired,
};

