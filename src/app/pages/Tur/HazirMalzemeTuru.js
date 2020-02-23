import React, {Component} from 'react';
import {
  Input,
  Col,
  FormGroup,
  Label
} from 'reactstrap';

import ParameterForm from '../../common/ParameterForm';
import ParameterList from '../../common/ParameterList';
import MultiKurumSelect from '../../common/MultiKurumSelect';

import {Validator} from '../Login';

var qname = "Hazır Malzemeler";
var qtype = "hmaterialcon";
var qredirect = "/tur/hmalzemeturu";
var ptur = 'nar';



export class HazirMalzemeTuruEkle extends Component {
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
              <Validator validate={_ => controller.validator.message('value', controller.state.value, 'required')}>
                <Input type="text" value={controller.state.value}
                       onChange={a => controller.setState({value: a.currentTarget.value})}/>
              </Validator>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="align-self-center">
              <Label htmlFor="text-input">Kurumlar</Label>
            </Col>
            <Col xs="12" md="9">
              <MultiKurumSelect
                selected={ (controller.state.kurumlar || []).map(a => a.kurum_id) }
                onChange={a => controller.setState({ kurumlar: a.map(b => ({ kurum_id: b })) })} />
            </Col>
          </FormGroup>
        </>
      }
    </ParameterForm>;
  }
}

export class HazirMalzemeTuruList extends Component {
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
