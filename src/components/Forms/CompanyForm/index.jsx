import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Spacer from 'common/Spacer';
import { ErrorMessage, InputContainer, Label, StyledForm } from './style';

const schema = budgetSpent =>
  yup.object().shape({
    budget: yup
      .number()
      .positive()
      .min(budgetSpent, `The total budget cannot be less than the spent budget (€${budgetSpent})`)
      .required('You must enter a value'),
  });

const CompanyForm = ({ company, onSubmit }) => {
  const {
    control,
    errors,
    formState: { isSubmitting, isDirty, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { budget: company.budget },
    resolver: yupResolver(schema(company.budgetSpent)),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ onBlur, onChange, value }) => (
          <InputContainer>
            <Label>Budget</Label>
            <NumberFormat
              allowNegative={false}
              thousandSeparator
              fixedDecimalScale={2}
              decimalScale={2}
              prefix="€ "
              onValueChange={v => onChange(v.floatValue)}
              value={value}
              onBlur={onBlur}
            />
          </InputContainer>
        )}
        defaultValue=""
        name="budget"
        control={control}
      />
      {errors.budget && <ErrorMessage>{errors.budget.message}</ErrorMessage>}
      <Spacer />
      <button disabled={!isDirty || !isValid} type="submit">
        {isSubmitting ? 'Loading' : 'Submit'}
      </button>
    </StyledForm>
  );
};

CompanyForm.propTypes = {
  company: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func,
};

CompanyForm.defaultProps = {
  company: {},
  onSubmit: () => {},
};

export default CompanyForm;
