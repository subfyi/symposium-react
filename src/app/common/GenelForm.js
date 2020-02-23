
import React, { Component } from 'react';
import swal2 from 'sweetalert2';
import { hatagoster, tokenized } from '../api';

import { Button, Card, CardBody, CardHeader, CardGroup, FormFeedback, FormText, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import SimpleReactValidator from 'simple-react-validator';

export default class GenelForm extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      validators: {
        file: {
          message: 'You must upload at last a single file',
          rule: (val, params, validator) => {
            return !!val;
          },
          required: true 
        }
      }
    });
    this.state = {};
    console.log(props);
  }

  async componentDidMount() {
    if(this.props.id) {
      var parameter = await tokenized.get(`${this.props.url}/${this.props.id}`);
      this.setState(parameter.data);
    } else if(this.props.newModel) {
      this.setState(this.props.newModel);
    }
  }

  async save(e) {
    e.preventDefault();

    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return ;
    }

    var hata = await hatagoster(this.props.id ?
        tokenized.patch(`${this.props.url}/${this.props.id}`, this.state)
        :
        tokenized.post(`${this.props.url}`, this.state)
    );

    if(!hata) {
      if(this.props.history) {
        this.props.history.push(this.props.redirect);
      }
      await swal2.fire('Başarılı', 'Kayıt basarı ile eklendi.', 'success');
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
             { this.props.name } { this.props.id ? "Düzenle" : "Ekle" }
          </CardHeader>
          <CardBody>
            { this.props.children(this) }
            <Row>
              <Col xs="12">
                <a href="#" className="btn btn-primary col-12 mt-4" onClick={this.save.bind(this)}><i className="fa fa-save" /> { this.props.id ? "Düzenle" : "Ekle" }</a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
