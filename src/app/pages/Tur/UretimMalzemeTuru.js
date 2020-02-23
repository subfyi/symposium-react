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
import MultiKurumSelect from '../../common/MultiKurumSelect';
import MultiParameterSelect from '../../common/MultiParameterSelect';
import MultiFilePicker from '../../upload/MultiFilePicker';

import Validator from '../../common/Validator';

var qname = "Üretim Malzeme Türü";
var qtype = "umaterialcon";
var qredirect = "/tur/umalzemeturu";
var ptur = 'nar';

export class UretimMalzemeTuruEkle extends Component {
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
              <Label htmlFor="text-input">Kurumlar</Label>
            </Col>
            <Col xs="12" md="9">
              <MultiKurumSelect
                selected={ (controller.state.kurumlar || []).map(a => a.kurum_id) }
                onChange={a => controller.setState({ kurumlar: a.map(b => ({ kurum_id: b })) })} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="align-self-center">
              <Label htmlFor="text-input">{qname} Fiyatı</Label>
            </Col>
            <Col xs="12" md="9">
              <Validator
                  name="birimfiyat"
                  type="required"
                  controller={controller}>
                <Input type="number" value={controller.state.birimfiyat}
                       onChange={a => controller.setState({birimfiyat: a.currentTarget.value})}/>
              </Validator>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="align-self-center">
              <Label htmlFor="text-input">Birim Turleri</Label>
            </Col>
            <Col xs="12" md="9">
              <MultiParameterSelect
                type="birimturcon"
                ptur="nar"
                value={ (controller.state.enabled_fields || "").split('|') }
                onChange={values => controller.setState({ enabled_fields: (values && values.join('|')) || null }) } />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3" className="align-self-center">
              <Label htmlFor="text-input">Dosyalar</Label>
            </Col>
            <Col xs="12" md="9">
              <MultiFilePicker
                value={controller.state.dosyalar && controller.state.dosyalar.map(a => a.dosya)}
                onChange={dosyalar => console.log('Dosyalar', dosyalar) || controller.setState({
                  dosyalar: controller.state.dosyalar
                    .filter(a => dosyalar.find(b => b.id === a.dosya.id))
                    .concat(
                      dosyalar
                        .filter(a => !controller.state.dosyalar.find(b => b.dosya_id === a.id))
                        .map(a => ({ dosya: a }))
                    )
                })}
              />
            </Col>
          </FormGroup>
        </>
      }
    </ParameterForm>;
  }
}

export class UretimMalzemeTuruList extends Component {
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
