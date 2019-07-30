import React from "react";
import IconButton from "../template/IconButton";
import If from "../template/If";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <If test={!todo.done}>
            <IconButton
              style="success"
              icon="check"
              onClick={() => props.markAsDone(todo)}
            />
          </If>
          <If test={todo.done}>
            <IconButton
              style="primary"
              icon="undo"
              onClick={() => props.unDone(todo)}
            />
          </If>
          <IconButton
            style="warning"
            icon="edit"
            onClick={() => props.handleEdit(todo)}
          />
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
