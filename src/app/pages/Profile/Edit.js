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
import ParameterSelect from "../../common/ParameterSelect";

export default class Edit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CommonForm
                name="My Profile"
                url="/api/profile"
                id={this.props.match.params.id}
                {...this.props}
            >
                {
                    controller => <>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Name</Label>
                            </Col>
                            <Col xs="3" md="3">
                                <Validator
                                    name="name"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.name}
                                           onChange={a => controller.setState({name: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                            <Col md="3">
                                <Label htmlFor="text-input">Surname</Label>
                            </Col>
                            <Col xs="3" md="3">
                                <Validator
                                    name="surname"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.surname}
                                           onChange={a => controller.setState({surname: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="select">Title</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="factor_cins"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="para-birimi"
                                        value={controller.state.factor_cins}
                                        onChange={a => controller.setState({factor_cins: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="select">Type
                                </Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="factor_cins"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="para-birimi"
                                        value={controller.state.factor_cins}
                                        onChange={a => controller.setState({factor_cins: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="select">Gender
                                </Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="factor_cins"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="para-birimi"
                                        value={controller.state.factor_cins}
                                        onChange={a => controller.setState({factor_cins: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>


                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">E-Mail Address</Label>
                            </Col>
                            <Col xs="3" md="3">
                                <Validator
                                    name="email"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.email}
                                           onChange={a => controller.setState({email: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Institution</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="unvan"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.unvan}
                                           onChange={a => controller.setState({unvan: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md="3">
                            <Label htmlFor="text-input">Faculty</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Validator
                                name="unvan"
                                type="required"
                                controller={controller}>
                                <Input type="text" value={controller.state.unvan}
                                       onChange={a => controller.setState({unvan: a.currentTarget.value})}/>
                            </Validator>
                        </Col>
                    </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Department</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="unvan"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.unvan}
                                           onChange={a => controller.setState({unvan: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Mobile / GSM </Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="iletisim"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.iletisim}
                                           onChange={a => controller.setState({iletisim: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Password</Label>
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
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Address :</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="aciklama"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.aciklama}
                                           onChange={a => controller.setState({aciklama: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                    </>
                }
            </CommonForm>
        );
    }
}

