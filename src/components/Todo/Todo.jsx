import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../PageHeader";
import { Form, List } from "./index";

const URL = "https://backend-todo-express.herokuapp.com/api/todos";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.unDone = this.unDone.bind(this);

    this.refresh();
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`).then(resp => {
      this.setState({ ...this.state, description: "", list: resp.data });
    });
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(resp => this.refresh());
    this.refresh();
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh());
  }

  handleEdit(todo) {
    axios
      .put(`${URL}/${todo._id}`, { description: this.state.description })
      .then(resp => this.refresh());
  }

  markAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { done: "true" })
      .then(resp => this.refresh());
  }

  unDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { done: "false" })
      .then(resp => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <Form
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <List
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
          markAsDone={this.markAsDone}
          unDone={this.unDone}
        />
      </div>
    );
  }
}
