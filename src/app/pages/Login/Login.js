import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Button, Card, CardBody, CardGroup, FormFeedback, FormText, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';
import { log_in, hatagoster } from '../../api';

export class Validator extends Component {
  render() {
    var error = this.props.validate();

    var a = this.props.children;
    a = React.cloneElement(a, { invalid: !!error, className: (a.props.className || '') + (!!error ? ' is-invalid' : '') });

    return [
      a,
      error && <FormFeedback className="d-block">{error}</FormFeedback>
    ];
  }
}



class Login extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    this.state = {
      username: "",
      password: ""
    };
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return ;
    }

    await hatagoster((async () => {
      await log_in(this.state.username, this.state.password);

      this.setState({ logged_in: true });
    })());
  }

  render() {
    if(this.state.logged_in) {
      return <Redirect url="/urun-fatura" />
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Validator validate={_ => this.validator.message('username', this.state.username, 'required')}>
                          <Input type="text" placeholder="Username" value={this.state.username} onChange={a => this.setState({ username: a.currentTarget.value })} autoComplete="username" />
                        </Validator>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Validator validate={_ => this.validator.message('password', this.state.password, 'required')}>
                          <Input type="password" placeholder="Password" value={this.state.password} onChange={a => this.setState({ password: a.currentTarget.value })} autoComplete="current-password" />
                        </Validator>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleSubmit.bind(this)}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
