
import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";

import { Input, Row, Label, Col, FormGroup } from "reactstrap";
import SimpleReactValidator from 'simple-react-validator';
import {free, hatagoster, log_in, loggedIn} from "../../../api";
import swal2 from 'sweetalert2';
import Validator from '../../../common/Validator';
import ParameterSelect from "../../../common/ParameterSelect";

export default class extends React.Component {
  state = { };

  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();
  }

  async handleSubmit(e) {
    e.preventDefault();

    if(this.loading)
      return ;

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return ;
    }

    var hata;

    this.loading = true;
    try {
      hata = await hatagoster(
          free.post('/api/register', this.state)
      );
    } finally {
      this.loading = false;
    }

    if(!hata) {
      await log_in(this.state.email, this.state.password);
      loggedIn(true);
      await swal2.fire('Successful', 'Successfully registered.', 'success');
    }
  }

  render() {
    return (
        <div className="kt-login__body">
          <div className="">
            <div className="kt-login__title">
              <h3>
                <FormattedMessage id="AUTH.REGISTER.TITLE"/>
              </h3>
            </div>

            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Name</Label>
                  <Validator
                      name="name"
                      type="required"
                      controller={this}>
                    <Input
                        type="text"
                        onChange={a => this.setState({ name: a.currentTarget.value })}
                        value={this.state.name || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Surname</Label>
                  <Validator
                      name="surname"
                      type="required"
                      controller={this}>
                    <Input
                        type="text"
                        onChange={a => this.setState({ surname: a.currentTarget.value })}
                        value={this.state.surname || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Title</Label>
                  <Validator
                      name="title"
                      type="required"
                      controller={this}>
                    <ParameterSelect
                        free
                        type="titlecon"
                        value={this.state.title}
                        onChange={a => this.setState({title: a})} />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Type</Label>
                  <Validator
                      name="type"
                      type="required"
                      controller={this}>
                    <ParameterSelect
                        free
                        type="materialcon"
                        value={this.state.type}
                        onChange={a => this.setState({type: a})} />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Gender</Label>
                  <Validator
                      name="gender"
                      type="required"
                      controller={this}>
                    <ParameterSelect
                        free
                        type="gender"
                        value={this.state.gender}
                        onChange={a => this.setState({gender: a})} />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Institution</Label>
                  <Validator
                      name="institution"
                      type="required"
                      controller={this}>
                    <Input
                        type="text"
                        onChange={a => this.setState({ institution: a.currentTarget.value })}
                        value={this.state.institution || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Faculty</Label>
                  <Validator
                      name="faculty"
                      type="required"
                      controller={this}>
                    <Input
                        type="text"
                        onChange={a => this.setState({ faculty: a.currentTarget.value })}
                        value={this.state.faculty || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Department</Label>
                  <Validator
                      name="department"
                      type="required"
                      controller={this}>
                    <Input
                        type="text"
                        onChange={a => this.setState({ department: a.currentTarget.value })}
                        value={this.state.department || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Mobile / GSM</Label>
                  <Input
                      type="text"
                      onChange={a => this.setState({ iletisim: a.currentTarget.value })}
                      value={this.state.iletisim || ""}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Email</Label>
                  <Validator
                      name="email"
                      type="required"
                      controller={this}>
                    <Input
                        type="email"
                        onChange={a => this.setState({ email: a.currentTarget.value })}
                        value={this.state.email || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Password</Label>
                  <Validator
                      name="password"
                      type="required"
                      controller={this}>
                    <Input
                        type="password"
                        onChange={a => this.setState({ password: a.currentTarget.value })}
                        value={this.state.password || ""}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Confirm Password</Label>
                  <Validator
                      name="password2"
                      type="required"
                      controller={this}>
                    <Input
                        type="password"
                        onChange={a => this.setState({ password2: a.currentTarget.value })}
                        value={this.state.password2}
                    />
                  </Validator>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                      type="textarea"
                      rows="4"
                      onChange={a => this.setState({ address: a.currentTarget.value })}
                      value={this.state.address}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <Link
                    to="/auth/forgot-password"
                    className="kt-link kt-login__link-forgot col-md-4"
                >
                  <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON"/>
                </Link>
              </Col>
              <Col md="4">
                <Link to="/auth/login">
                  <a className="btn btn-secondary btn-elevate kt-login__btn-secondary btn-block">
                    Back
                  </a>
                </Link>
              </Col>
              <Col md="4">
                <button
                    disabled={!!this.loading}
                    onClick={this.handleSubmit.bind(this)}
                    className="btn btn-primary btn-elevate kt-login__btn-primary btn-block"
                >
                  { !this.loading ? 'Submit' : 'Please wait..' }
                </button>
              </Col>
            </Row>
          </div>
        </div>
    );
  }
};
