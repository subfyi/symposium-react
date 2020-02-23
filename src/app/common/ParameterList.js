
import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import GenelList from './GenelList';

export default class ParameterList extends Component {
  render() {
    return <div className="animated fadeIn">
    <Card>
      <CardBody>
        <GenelList url={`/api/parameters${(this.props.ptur && `-${this.props.ptur}`) || ''}/${this.props.type}`} {...this.props} />
        </CardBody>
        </Card>
        </div>;
  }
}
