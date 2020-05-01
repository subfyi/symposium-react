import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import UploadConfig from './UploadConfig';

import fileDialog from 'file-dialog';

export default class ChooseFileButton extends Component {
  async dosyaSec(e) {
    e.preventDefault();

    var dosyalar = await fileDialog({
      accept: this.props.accepts || 'image/*',
      multiple: true
    });

    var controllers = [];

    for(var i = 0; i < dosyalar.length; ++i) {
      var controller = UploadConfig();
      controller.upload(dosyalar[i].name, dosyalar[i].type, dosyalar[i]);
      controllers.push(controller);
    }

    this.props.onFileChosen(controllers);
  }

  render() {
    return <a href="#" className="btn btn-primary btn-sm" onClick={this.dosyaSec.bind(this)}><i className="fa fa-upload" /> Dosya Secin</a>;
  }
}
