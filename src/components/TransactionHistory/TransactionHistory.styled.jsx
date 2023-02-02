import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 80%;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.shadow};
`;

export const TransactionsHead = styled.thead`
  background-color: #00bcd5;
  color: ${props => props.theme.colors.whiteText};
  text-transform: uppercase;
`;
export const TableRow = styled.tr`
  
  height: 40px;
`;
export const TableHeading = styled.th``;
export const TransactionsBody = styled.tbody`
  background-color: ${props => props.theme.colors.backgroundColor};

  tr:nth-child(odd) {
    background-color: ${props => props.theme.colors.whiteBackground};
  }
`;
export const TransactionData = styled.td`
  color: ${props => props.theme.colors.secondaryText};
  text-transform: capitalize;
`;
