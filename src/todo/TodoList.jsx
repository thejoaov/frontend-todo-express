import React from "react";
import IconButton from "../template/IconButton";
import If from "../template/If";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td style={{ width: "60vw", wordBreak: "break-word" }}>
          {todo.description}
        </td>
        <td style={{ width: "40vw" }}>
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
          <th style={{ width: "60vw" }}>Descrição</th>
          <th style={{ width: "40vw" }}>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
