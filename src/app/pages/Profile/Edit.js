import React, {Component} from 'react';
import {
    Badge,
    Card,
    Input,
    CardBody,
    CardHeader,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table,
    InputGroup, InputGroupAddon, InputGroupText, Form, FormGroup, Label
} from 'reactstrap';

import CommonForm from '../../common/GenelForm';
import KurumSelect from '../../common/KurumSelect';
import Validator from '../../common/Validator';

export default class Edit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CommonForm
                name="Yazılar"
                url="/api/yazilar"
                id={this.props.match.params.id}
                {...this.props}
            >
                {
                    controller => <>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Plaka</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="plaka"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.plaka}
                                           onChange={a => controller.setState({plaka: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Marka</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="marka"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.marka}
                                           onChange={a => controller.setState({marka: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Model</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="model"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.model}
                                           onChange={a => controller.setState({model: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Model Yılı</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="model_yili"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.model_yili}
                                           onChange={a => controller.setState({model_yili: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Şasi No</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="sasi_no"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.sasi_no}
                                           onChange={a => controller.setState({sasi_no: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Tonaj</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="tonaj"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.tonaj}
                                           onChange={a => controller.setState({tonaj: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                    </>
                }
            </CommonForm>
        );
    }
}

