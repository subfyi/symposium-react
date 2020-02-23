import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import { tokenized } from '../api';

import { components } from 'react-select';

import AsyncSelect from 'react-select/async';

const Option = ({ children, ...props }) => {
  return (
    <components.Option {...props}>
      <h6>{ props.data.name }</h6>
      <small className="text-muted">{ props.data.email }</small>
    </components.Option>
  );
};

const SingleValue = ({ children, ...props }) => {
  return (
    <components.SingleValue {...props}>{ props.data.name }</components.SingleValue>
  );
}

export default class ParameterSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersTask: tokenized.get('/api/users'),
      users: []
    };
  }

  async componentDidMount() {
    var users = (await this.state.usersTask).data.kullanicilar;
    var selected;

    if(this.props.value) {
      selected = users.find(a => a.id === this.props.value);
    }

    this.setState({
      users: users,
      selected
    });
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if((prevProps.value !== this.props.value) && (!this.state.selected || this.props.id !== this.state.selected.id)) {
      var user = this.state.users.find(a => a.id === this.props.value);
      this.setState({ selected: user });
    }
  }

  handleChange(param) {
    this.setState({ selected: param });
    this.props.onChange((param && param.id) || null);
  }

  async loadData(arama) {
    var users = (await this.state.usersTask).data.kullanicilar;
    return !arama || !arama.length ? users : users.filter(a => a.name.toLowerCase().indexOf(arama.toLowerCase()) !== -1 || a.email.toLowerCase().indexOf(arama.toLowerCase()) !== -1);
  }

  render() {
    return <AsyncSelect components={{ SingleValue, Option }} value={this.state.selected} onChange={this.handleChange.bind(this)} cacheOptions defaultOptions isClearable={true} loadOptions={this.loadData.bind(this)} />;
  }
}
