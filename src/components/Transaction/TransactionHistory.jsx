import {Table, Thead, Td} from './Transaction.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <Table  className="transaction-history">
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} style={{ backgroundColor: index % 2 === 1 ? 'lightgrey' : 'transparent' }}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table >
  );
};



