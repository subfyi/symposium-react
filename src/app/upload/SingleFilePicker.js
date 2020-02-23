import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import UploadConfig from './UploadConfig';
import FilePickerCore from './FilePickerCore';

export function fix_url(data) {
  if(data && data.f_dosyayeri === 1) {
    return {
      id: data.id,
      name: data.r_dosyaisimi,
      size: data.f_dosya_boyut,
      access_url: `/uploads/${data.f_klasorismi}/${data.f_dosyaisimi}`
    };
  }

  return data;
}

export default class SingleFilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controller: UploadConfig(fix_url(props.value))
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.value !== this.props.value) {
      if(!this.props.value && this.state.controller.$state !== 3) {
        return ;
      }

      var controller = UploadConfig(this.props.value.$state ? this.props.value : fix_url(this.props.value));

      if(controller !== this.state.controller) {
        this.setState({
          controller: controller
        });
      }
    }
  }

  onUpdate() {
    var param = this.state.controller;
    if(param.$state === 3) {
      if(this.props.value !== param) {
        this.props.onChange(param);
      }
    } else {
      if(this.props.value !== null) {
        this.props.onChange(null);
      }
    }
  }

  render() {
    return <FilePickerCore controller={this.state.controller} onNotify={this.onUpdate.bind(this)} {...this.props} />
  }
}
