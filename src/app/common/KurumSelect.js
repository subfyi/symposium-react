import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import { tokenized } from '../api';
import  axios from 'axios';

import AsyncSelect from 'react-select/async';

export default class KurumSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  async componentDidMount() {
    if(this.props.value) {
      var data;

      if(this.props.cachedValue && this.props.value == this.props.cachedValue.id) {
        data = this.props.cachedValue;
      } else {
        data = (await tokenized.get(`/api/kurumlar/${this.props.value}`)).data;
      }

      this.setState({ selected: ({ value: data.id, label: data.ad }) });
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if((prevProps.value !== this.props.value) && (!this.state.selected || this.props.value !== this.state.selected.value)) {
      var data;

      if(this.props.cachedValue && this.props.value == this.props.cachedValue.id) {
        data = this.props.cachedValue;
      } else {
        data = (await tokenized.get(`/api/kurumlar/${this.props.value}`)).data;
      }

      this.setState({ selected: ({ value: data.id, label: data.ad }) });
    }
  }

  handleChange(param) {
    this.setState({ selected: param });
    this.props.onChange((param && param.value) || null);
  }

  async loadData(arama) {
    if(this.cancelToken) {
      this.cancelToken.cancel();
    }

    this.cancelToken = axios.CancelToken.source();

    var data = await tokenized.get(`/api/kurumlar`, { params: { query: arama }, cancelToken: this.cancelToken.token });
    return data.data.data
      .filter(data => data.id !== 17)
      .map(data => ({ value: data.id, label: data.ad }));
  }

  render() {
    return <AsyncSelect value={this.state.selected} onChange={this.handleChange.bind(this)} cacheOptions defaultOptions isClearable={true} loadOptions={this.loadData.bind(this)} />;
  }
}
