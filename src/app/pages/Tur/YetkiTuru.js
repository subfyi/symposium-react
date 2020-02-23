import React, {Component} from 'react';
import {
  Input,
  Col,
  FormGroup,
  Label
} from 'reactstrap';

import ParameterForm from '../../common/ParameterForm';
import ParameterList from '../../common/ParameterList';
import ParameterSelect from '../../common/ParameterSelect';

import Validator from '../../common/Validator';

var qname = "Yetki Türü";
var qtype = "yetkicon";
var qredirect = "/tur/yetkituru";
var ptur = 'nar';



export class YetkiTuruEkle extends Component {
  render() {
    return <ParameterForm
      ptur={ptur}
      type={`${qtype}`}
      name={`${qname} Türü`}
      redirect={`${qredirect}`}
      id={this.props.match && this.props.match.params.id} {...this.props}
    >
      {
        controller => <>

          <FormGroup row>
            <Col md="3" className="align-self-center">
              <Label htmlFor="text-input">{qname} Girin</Label>
            </Col>
            <Col xs="12" md="9">
              <Validator
                  name="value"
                  type="required"
                  controller={controller}
              >
                <Input type="text" value={controller.state.value}
                       onChange={a => controller.setState({value: a.currentTarget.value})}/>
              </Validator>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="align-self-center">
              <Label htmlFor="text-input">{qname} Derecesi</Label>
            </Col>
            <Col xs="12" md="9">
              <Validator
                  name="factor"
                  type="required"
                  controller={controller}>
                <Input type="number" value={controller.state.item_num}
                       onChange={a => controller.setState({item_num: a.currentTarget.value})}/>
              </Validator>
            </Col>
          </FormGroup>
        </>
      }
    </ParameterForm>;
  }
}

export class YetkiTuruList extends Component {
  render() {
    return <ParameterList
      ptur={ptur}
      type={`${qtype}`}
      add={`${qredirect}/create`}
      edit={id => `${qredirect}/${id}/edit`}
      {...this.props}>
      <>
        <th sort="value">{qname} Türü</th>
      </>
      {
        row => <>
          <td>{row.value}</td>
        </>
      }
    </ParameterList>;
  }
}
