import React from 'react'
import IconButton from '../IconButton/IconButton'
import If from '../If/If'
import styled from 'styled-components'

const Td = styled.td`
  html {
    animation: all 1s ease;
  }
  width: 60vw;
  word-break: break-word;
  background-color: aliceblue;
`

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <Td>
          {todo.done ? (
            <div>
              <p>
                <s className='text-muted'>{todo.description}</s> <b>OK</b>
              </p>
            </div>
          ) : (
            todo.description
          )}
        </Td>
        <Td
          style={{
            width: '250px',
            textAlign: 'center',
            animation: 'all 1s ease'
          }}
        >
          <If test={!todo.done}>
            <IconButton
              type='success'
              icon='check'
              onClick={() => props.markAsDone(todo)}
            />
          </If>
          <If test={todo.done}>
            <IconButton
              type='primary'
              icon='undo'
              onClick={() => props.unDone(todo)}
            />
          </If>
          <IconButton
            type='warning'
            icon='edit'
            onClick={() => props.handleEdit(todo)}
          />
          <IconButton
            type='danger'
            icon='trash-o'
            onClick={() => props.handleRemove(todo)}
          />
        </Td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th style={{ width: '65vw' }}>Descrição</th>
          <th style={{ width: '250px' }}>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
