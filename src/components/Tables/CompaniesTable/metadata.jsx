import NumberFormat from 'react-number-format';
import Company from 'components/Company';

const companiesMetadata = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Budget',
    Cell: ({ row }) => (
      <NumberFormat
        allowNegative={false}
        thousandSeparator
        fixedDecimalScale={2}
        decimalScale={2}
        prefix="€ "
        displayType="text"
        value={row.original.budget}
      />
    ),
  },
  {
    Header: 'Budget Spent',
    Cell: ({ row }) => (
      <NumberFormat
        allowNegative={false}
        thousandSeparator
        fixedDecimalScale={2}
        decimalScale={2}
        prefix="€ "
        displayType="text"
        value={row.original.budgetSpent}
      />
    ),
  },
  {
    Header: 'Date of First Purchase',
    accessor: 'dateOfFirstPurchase',
  },
  {
    Header: 'Actions',
    id: 'expander',
    Cell: ({ row }) => <Company company={row.original} />,
  },
];

export default companiesMetadata;
