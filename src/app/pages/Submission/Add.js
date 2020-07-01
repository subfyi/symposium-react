import React, {Component} from 'react';
import { Input,     CustomInput,  Button,     Col, FormGroup, Label } from 'reactstrap';

import CommonForm from '../../common/GenelForm';
import Validator from '../../common/Validator';
import AuthorSelect from '../../common/AuthorSelect';
import MultiParameterSelect from '../../common/MultiParameterSelect';
import ParameterSelect from '../../common/ParameterSelect';
import SingleFilePicker from '../../upload/SingleFilePicker';
import {tokenized} from '../../api';
import GDriveSingleFilePicker from '../../upload/GDriveSingleFilePicker';

export default class Add extends Component {
    state = {};

    async componentWillMount() {
        const user = await tokenized.get('/api/myself');
        this.setState({user: user.data});
    }

    render() {
        if (!this.state.user)
            return null;

        return (
            <CommonForm
                key={this.props.match.params.id || 0}
                name="Submission"
                url="/api/submission"
                id={this.props.match.params.id}
                redirect="/submissions"
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
                                    <Input type="text"
                                           disabled={!!controller.state.paper_approved && !(this.state.user && this.state.user.yetki >= 8)}

                                           value={controller.state.pap_title}
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
                                           disabled={!!controller.state.paper_approved && !(this.state.user && this.state.user.yetki >= 8)}
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
                                        selected={(controller.state.pap_keyword || "").split('|').filter(a => a.length).map(a => ({
                                            value: a,
                                            label: a
                                        }))}
                                        onChange={a => controller.setState({pap_keyword: (a && a.join('|')) || ""})}
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
                                        onChange={a => controller.setState({pap_topic_p: a})}/>
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
                                        disabled={!!controller.state.paper_approved && !(this.state.user && this.state.user.yetki >= 8)}
                                        onChange={a => controller.setState({pre_type: a})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Abstract (.doc, .docx)</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <SingleFilePicker
                                    disabled={!(this.state.user.yetki >= 8)}
                                    value={controller.state.abstract_dosya}
                                    onChange={a => controller.setState({abstract_dosya: a})}
                                />
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
                                        onChange={a => controller.setState({full_paper_dosya: a})}
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
                                        disabled={!(this.state.user.yetki >= 8)}
                                        value={controller.state.poster_presentation_dosya}
                                        onChange={a => controller.setState({poster_presentation_dosya: a})}
                                    />
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Presentation File (.mp4)</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <GDriveSingleFilePicker
                                    disabled={!(this.state.user.yetki >= 8)}
                                    accepts="video/mp4|aplications/pdf"
                                    value={controller.state.video}
                                    onChange={a => controller.setState({video: a})}
                                />
                            </Col>
                        </FormGroup>
                        {controller.state.video && this.state.user && this.state.user.yetki >= 8 && <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Video Approved</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <CustomInput
                                    id="video_approved"
                                    type="checkbox"
                                    checked={!!controller.state.video_approved}
                                    onChange={a => controller.setState({video_approved: a.currentTarget.checked ? 1 : 0})}
                                />
                                <a href={`https://drive.google.com/file/d/${controller.state.video.g_dosyaismi}/preview`} target="_blank"
                                   className="mt-2 btn btn-sm btn-outline-primary">
                                    Watch Video
                                </a>
                            </Col>
                        </FormGroup>}

                        {this.state.user && this.state.user.yetki >= 8 && <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Paper Approved</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <CustomInput
                                    id="paper_approved"
                                    type="checkbox"
                                    checked={!!controller.state.paper_approved}
                                    onChange={a => controller.setState({paper_approved: a.currentTarget.checked ? 1 : 0})}
                                />
                            </Col>
                        </FormGroup>}

                        {this.state.user && this.state.user.yetki >= 8 && <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">title_year</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Input type="text" value={controller.state.title_year}
                                       onChange={a => controller.setState({title_year: a.currentTarget.value})}/>
                            </Col>
                        </FormGroup>}
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
                                        onChange={a => controller.setState({pap_type: a})}/>
                                </Validator>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Message to Congress</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Input type="textarea" value={controller.state.mes_congress} rows="3"
                                       onChange={a => controller.setState({mes_congress: a.currentTarget.value})}/>
                            </Col>
                        </FormGroup>

                        <Validator name="authors" type="required" value={(controller.state.authors || []).length ? 'a' : ''} controller={controller}>
                            <table className="table table-striped tablo">
                                <thead>
                                <tr>
                                    <th style={{width: '5%'}}>#</th>
                                    <th style={{width: '25%'}}>Mail</th>
                                    <th style={{width: '25%'}}>Name</th>
                                    <th style={{width: '25%'}}>Surname</th>
                                    <th style={{width: '10%'}}>Correspond</th>
                                    <th style={{width: '10%'}}>Presenter</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {(controller.state.authors || []).map((author, index) => <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Validator name="author.p_mail" type="required" value={author.p_mail} controller={controller}>
                                                <AuthorSelect
                                                    selected={author.p_mail}
                                                    onChange={value => {
                                                        if (value && value.name) {
                                                            author.name = value.name;
                                                            author.surname = value.surname;
                                                            author.adress = value.adress;
                                                        }

                                                        author.p_mail = value && (value.p_mail || value.label || value);
                                                        this.forceUpdate();
                                                    }}
                                                />
                                            </Validator>
                                        </td>
                                        <td>
                                            <Validator name="author.name" type="required" value={author.name} controller={controller}>
                                                <Input type="text" value={author.name} onChange={a => {
                                                    author.name = a.currentTarget.value;
                                                    this.forceUpdate();
                                                }}/>
                                            </Validator>
                                        </td>
                                        <td>
                                            <Validator name="author.surname" type="required" value={author.surname} controller={controller}>
                                                <Input type="text" value={author.surname} onChange={a => {
                                                    author.surname = a.currentTarget.value;
                                                    this.forceUpdate();
                                                }}/>
                                            </Validator>
                                        </td>
                                        <td>
                                            <Validator name="correspond" type="required"
                                                       value={(controller.state.authors || []).find(a => a.correspond) ? 'ok' : ''}
                                                       controller={controller}>
                                                <CustomInput
                                                    id={'correspond' + index}
                                                    type="radio"
                                                    checked={!!author.correspond}
                                                    onChange={_ => {
                                                        author.correspond = !author.correspond;

                                                        if (author.correspond) {
                                                            for (let _author of controller.state.authors) {
                                                                if (author !== _author) {
                                                                    _author.correspond = false;
                                                                }
                                                            }
                                                        }

                                                        this.forceUpdate();
                                                    }}
                                                />
                                            </Validator>
                                        </td>
                                        <td>
                                            <Validator name="presenter" type="required"
                                                       value={(controller.state.authors || []).find(a => a.presenter) ? 'ok' : ''}
                                                       controller={controller}>
                                                <CustomInput
                                                    id={'presenter' + index}
                                                    type="radio"
                                                    checked={!!author.presenter}
                                                    onChange={_ => {
                                                        author.presenter = !author.presenter;

                                                        if (author.presenter) {
                                                            for (let _author of controller.state.authors) {
                                                                if (author !== _author) {
                                                                    _author.presenter = false;
                                                                }
                                                            }
                                                        }

                                                        this.forceUpdate();
                                                    }}
                                                />
                                            </Validator>
                                        </td>
                                        <td>
                                            <Button size="sm" outline color="danger"
                                                    onClick={_ => controller.setState({authors: controller.state.authors.filter(a => a !== author)})}>
                                                <i className="fa fa-trash"/>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td colSpan="6">
                                            <Validator name="author.adress" type="required" value={author.adress} controller={controller}>
                                                <Input placeholder="Affiliation Adress" type="text" value={author.adress} onChange={a => {
                                                    author.adress = a.currentTarget.value;
                                                    this.forceUpdate();
                                                }}/>
                                            </Validator>
                                        </td>
                                    </tr>
                                </>)}
                                </tbody>
                            </table>
                        </Validator>
                        <Button color="primary" onClick={a => controller.setState({authors: (controller.state.authors || []).concat([{}])})}>Add
                            Author</Button>
                    </>
                }
            </CommonForm>
        );
    }
}
