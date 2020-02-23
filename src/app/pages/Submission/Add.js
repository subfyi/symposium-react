import React, {Component} from 'react';
import {
    Badge,
    Card,
    Input,
    CustomInput,
    Button,
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
import AuthorSelect from '../../common/AuthorSelect';

import MultiParameterSelect from '../../common/MultiParameterSelect';
import ParameterSelect from '../../common/ParameterSelect';
import SingleFilePicker from '../../upload/SingleFilePicker';


export default class Add extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CommonForm
                name="Submission"
                url="/api/submission"
                id={this.props.match.params.id}
                {...this.props}
            >
                {
                    controller => <>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Article Title (ENG) </Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="pap_title"
                                    type="required"
                                    controller={controller}>
                                    <Input type="text" value={controller.state.pap_title}
                                           onChange={a => controller.setState({pap_title: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Abstract Text (ENG)</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="pap_abstract"
                                    type="required"
                                    controller={controller}>
                                    <Input type="textarea"
                                    rows="10"
                                    value={controller.state.pap_abstract}
                                           onChange={a => controller.setState({pap_abstract: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Keywords</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="pap_keyword"
                                    type="required"
                                    controller={controller}>
                                    <MultiParameterSelect 
                                        type="tagcon"
                                        selected={(controller.state.pap_keyword || "").split('|').filter(a => a.length).map(a => ({ value: a, label: a }))}
                                        onChange={a => controller.setState({ pap_keyword: (a && a.join('|')) || "" })}
                                    />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Topic</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="pap_topic_p"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="keywordcon"
                                        value={controller.state.pap_topic_p}
                                        onChange={a => controller.setState({pap_topic_p: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Presentation Type</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="pre_type"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="uygulamacon"
                                        value={controller.state.pre_type}
                                        onChange={a => controller.setState({pre_type: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Abstract (.doc, .docx)</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="abstract_dosya"
                                    value={ controller.state.abstract_dosya || controller.state.full_paper_dosya || controller.state.poster_presentation_dosya }
                                    type="file"
                                    controller={controller}>
                                        <SingleFilePicker
                                            value={controller.state.abstract_dosya}
                                            onChange={a => controller.setState({ abstract_dosya: a })}
                                        />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Full Paper (.doc, .docx)</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="full_paper_dosya"
                                    value={controller.state.abstract_dosya || controller.state.full_paper_dosya || controller.state.poster_presentation_dosya}
                                    type="file"
                                    controller={controller}>
                                        <SingleFilePicker
                                            value={controller.state.full_paper_dosya}
                                            onChange={a => controller.setState({ full_paper_dosya: a })}
                                        />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Poster Presentation (.pdf)</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="poster_presentation_dosya"
                                    value={controller.state.abstract_dosya || controller.state.full_paper_dosya || controller.state.poster_presentation_dosya}

                                    type="file"
                                    controller={controller}>
                                        <SingleFilePicker
                                            value={controller.state.poster_presentation_dosya}
                                            onChange={a => controller.setState({ poster_presentation_dosya: a })}
                                        />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Prefered Publish Type</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="pap_type"
                                    type="required"
                                    controller={controller}>
                                    <ParameterSelect
                                        type="birimcon"
                                        value={controller.state.pap_type}
                                        onChange={a => controller.setState({pap_type: a})} />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Message to Congress</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Validator
                                    name="mes_congress"
                                    type="required"
                                    controller={controller}>
                                    <Input type="textarea" value={controller.state.mes_congress}
                                    rows="3"
                                           onChange={a => controller.setState({mes_congress: a.currentTarget.value})}/>
                                </Validator>
                            </Col>
                        </FormGroup>

                        <table className="table table-striped tablo">
                            <thead>
                                <tr>
                                    <th style={{ width: '5%' }}>#</th>
                                    <th style={{ width: '25%' }}>Mail</th>
                                    <th style={{ width: '25%' }}>Name</th>
                                    <th style={{ width: '25%' }}>Surname</th>
                                    <th style={{ width: '10%' }}>Correspond</th>
                                    <th style={{ width: '10%' }}>Presenter</th>
                                </tr>
                            </thead>
                            <tbody>
                            {(controller.state.authors || []).map((author, index) => <tr>
                                <td>{index + 1}</td>
                                <td><AuthorSelect
                                        selected={author.p_mail}
                                        onChange={value => {
                                            if(value && value.name) {
                                                author.name = value.name;
                                                author.surname = value.surname;
                                            }

                                            author.p_mail = value && (value.p_mail || value.label || value);
                                            this.forceUpdate();
                                        }}
                                    /></td>
                                <td>
                                    <Input type="text" value={author.name} onChange={a => {
                                        author.name = a.currentTarget.value;
                                        this.forceUpdate();
                                    }} />
                                </td>
                                <td><Input type="text" value={author.surname} onChange={a => {
                                    author.surname = a.currentTarget.value;
                                    this.forceUpdate();
                                }} /></td>
                                <td><CustomInput
                                    id={'correspond' + index}
                                    type="radio"
                                    checked={ !!author.correspond }
                                    onChange={_ => {
                                        author.correspond = !author.correspond;

                                        if(author.correspond) {
                                            for(let _author of controller.state.authors) {
                                                if(author !== _author) {
                                                    _author.correspond = false;
                                                }
                                            }
                                        }

                                        this.forceUpdate();
                                    }}
                                /></td>
                                <td><CustomInput
                                    id={'presenter' + index}
                                    type="radio"
                                    checked={ !!author.presenter }
                                    onChange={_ => {
                                        author.presenter = !author.presenter;

                                        if(author.presenter) {
                                            for(let _author of controller.state.authors) {
                                                if(author !== _author) {
                                                    _author.presenter = false;
                                                }
                                            }
                                        }

                                        this.forceUpdate();
                                    }}
                                /></td>
                            </tr>)}
                            </tbody>
                        </table>

                        <Button color="primary" onClick={a => controller.setState({ authors: (controller.state.authors || []).concat([{  }]) })}>Add Author</Button>
                    </>
                }
            </CommonForm>
        );
    }
}
