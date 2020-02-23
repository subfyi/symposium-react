
import React, { Component } from 'react';
import swal2 from 'sweetalert2';
import { hatagoster, tokenized } from '../api';

import { Button, Card, CardBody, CardHeader, CardGroup, FormFeedback, FormText, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';

import GenelForm from './GenelForm';

export default class ParameterForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <GenelForm url={`/api/parameters${(this.props.ptur && `-${this.props.ptur}`) || ''}/${this.props.type}`} {...this.props}/>;
  }
}
