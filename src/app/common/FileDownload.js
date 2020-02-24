import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import prettysize from 'prettysize';

export default class FileDownload extends Component {
  render() {
    return this.props.value && <div className={this.props.className}>
      <a href={"https://iseser.com/uploads/dosya/" + this.props.value.f_klasorismi + "/" + this.props.value.r_dosyaisimi} target="_blank" className="btn btn-sm btn-outline-primary"><i className="fa fa-download" /> {this.props.label}</a>
    </div>;
  }
}
