import React from 'react'
import { InputGroup, Button, FormControl, Container } from 'react-bootstrap'
export default props => (
  <Container className='mr-n2 ml-n2'>
    <InputGroup className='mb-4 mt-3 pr-5 pl-5'>
      <FormControl
        type='text'
        id='description'
        className='form-control text-center'
        placeholder='Adicione ou Edite uma tarefa'
        value={props.description}
        onChange={props.handleChange}
        aria-label='Add or edit'
      />
      <InputGroup.Append>
        <Button
          variant='primary'
          className='pl-4 pr-4'
          icon='plus'
          onClick={props.handleAdd}
        >
          OK
        </Button>
      </InputGroup.Append>
    </InputGroup>
  </Container>
)
