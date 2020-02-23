import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import { tokenized } from '../api';
import  axios from 'axios';

import AsyncSelect from 'react-select/async-creatable';
import { components } from 'react-select';

const Option = ({ children, ...props }) => {
  props.isSelected = false;

  return (
    <components.Option  {...props}>
      {props.data.p_mail ? <>
        <h6>{ props.data.name } { props.data.surname }</h6>
        <small className="text-muted">{ props.data.p_mail }</small>
      </> : <small className="text-muted">{ props.data.label }</small>}
    </components.Option>
  );
};

export default class MultiParameterSelect extends Component {
  async handleChange(param) {
    this.props.onChange(param);
  }

  async loadData(arama) {
    if(arama.length === 0)
      return [];

    if(this.cancelToken) {
      this.cancelToken.cancel();
    }

    this.cancelToken = axios.CancelToken.source();

    var data = await tokenized.get(`/api/author`, { params: { query: arama }, cancelToken: this.cancelToken.token });
    return data.data.data
      .map(a => ({  name: a.name, surname: a.surname, p_mail: a.p_mail, value: a.id, id: a.id  }));
  }

  render() {
    return <AsyncSelect components={{ Option }} value={this.props.selected && { label: this.props.selected }} onChange={this.handleChange.bind(this)} cacheOptions defaultOptions isClearable={true} loadOptions={this.loadData.bind(this)} />;
  }
}
