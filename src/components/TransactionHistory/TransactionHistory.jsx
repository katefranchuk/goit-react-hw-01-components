import PropTypes from 'prop-types';

import {
  TransactionsTable,
  TransactionsHead,
  TableRow,
  TableHeading,
  TransactionsBody,
  TransactionData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TransactionsHead>
        <TableRow>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRow>
      </TransactionsHead>

      <TransactionsBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TransactionData>{item.type}</TransactionData>
            <TransactionData>{item.amount}</TransactionData>
            <TransactionData>{item.currency}</TransactionData>
          </TableRow>
        ))}
      </TransactionsBody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
