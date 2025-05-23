function TodoRowItem({ rowNumber, rowDescription, rowAssigned, removeTodo }) {
  return (
    <tr
      onClick={() => {
        removeTodo(rowNumber);
      }}
    >
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  );
}

export default TodoRowItem;
