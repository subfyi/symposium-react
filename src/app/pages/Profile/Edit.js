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
                direct={true}
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
                                    name="u_title"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="titlecon"
                                        cachedValue={controller.state.utitle}
                                        value={controller.state.u_title}
                                        onChange={a => controller.setState({u_title: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="select">Type</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="u_type"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="materialcon"
                                        cachedValue={controller.state.utype}
                                        value={controller.state.u_type}
                                        onChange={a => controller.setState({u_type: a})} />
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
                                    name="gender"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="gender"
                                        cachedValue={controller.state.genderdata}
                                        value={controller.state.gender}
                                        onChange={a => controller.setState({gender: a})} />
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
                                    name="institution"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.institution}
                                           onChange={a => controller.setState({institution: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Faculty</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="faculty"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.faculty}
                                        onChange={a => controller.setState({faculty: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Department</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="department"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.department}
                                           onChange={a => controller.setState({department: a.currentTarget.value})}/>
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
                                <Input type="password" value={controller.state.password}
                                    autocomplete="new-password"
                                    onChange={a => controller.setState({password: a.currentTarget.value})}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Address :</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="address"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.address}
                                           onChange={a => controller.setState({address: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                    </>
                }
            </CommonForm>
        );
    }
}

