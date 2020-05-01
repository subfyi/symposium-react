import React, {Component} from 'react';
import {
    Badge,
    Card,
    Input,
    CardBody,
    CardHeader,
    Col,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,

    Table,
    InputGroup, InputGroupAddon, InputGroupText, Form, FormGroup, Label, FormText, CustomInput
} from 'reactstrap';
import Modal from 'react-bootstrap/Modal'

import ParameterSelect from '../../common/ParameterSelect';
import MultiParameterListSelect from '../../common/MultiParameterListSelect';

import {Portlet, PortletBody, PortletHeader,PortletHeaderToolbar} from "../../partials/content/Portlet";
import ChooseFileButton from '../../upload/ChooseFileButton';
import {Thumbnail} from '../../upload/FilePickerCore';
import SingleFilePicker, {fix_url} from '../../upload/SingleFilePicker';
import MultiFilePicker from '../../upload/MultiFilePicker';

import CKEditor from '../../common/CKEditor';
import FilePickerCore from '../../upload/FilePickerCore';
import UploadConfig from '../../upload/UploadConfig';
import { tokenized } from '../../api';

class SiparisGaleriModal extends Component {
    constructor(props) {
        super(props);

        this.state = { files: [] };
    };

    onChange(props) {
        this.props.onChange2({ ...this.props.value, ...props });
    }

    async componentDidMount() {
        this.setState({ myself: 
            (await tokenized.get('/api/myself')).data
        });
    }

    render() {
        return <Modal
            show={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={this.props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    { this.props.title } Ekle
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGroup row>
                    <Col md="3" className="align-self-center">
                        <Label htmlFor="text-input">Dosyalar</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <MultiFilePicker
                            value={this.state.files}
                            onChange={files => this.setState({ files })}
                            noThumb
                        />
                    </Col>
                </FormGroup>
                { this.props.children ? this.props.children(this.props.value, this.onChange.bind(this)) : <FormGroup row>
                    <Col md="3" className="align-self-center">
                        <Label htmlFor="text-input">Aciklama</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <CKEditor
                            value={this.props.value.aciklama || "" }
                            onChange={data => this.onChange({ aciklama: data })}
                        />
                    </Col>
                </FormGroup>}
            </Modal.Body>
            <Modal.Footer>
                <Button color="primary" onClick={a => {
                    this.props.onSave({ ...this.props.value, ...{ newFiles: this.state.files } } );
                }}>Kaydet</Button>
            </Modal.Footer>
        </Modal>
    }
}

export default class SiparisGaleri extends Component {
    state = { visible: false };

    async componentDidMount() {
        this.setState({ myself: 
            (await tokenized.get('/api/myself')).data
        });
    }

    render() {
        return (
        <Portlet>
            <PortletHeader
                title={ this.props.title }
                toolbar={ this.props.edit && <PortletHeaderToolbar>
                    <button
                        type="button"
                        onClick={() => this.setState({
                            visible: this.props.visible ? null : (this.props.value || {})
                        })}
                        className="btn btn-clean btn-sm btn-icon btn-icon-md ng-star-inserted"
                    >
                        <i className="la la-code" />
                    </button>
                </PortletHeaderToolbar>} />
                { (this.state.visible && 
                    <SiparisGaleriModal
                        {...this.props} 
                        onHide={a => this.setState({ visible: null })}
                        onChange2={a => this.setState({ visible: a })}
                        value={this.state.visible}
                        onSave={a => {
                            this.props.onChange(a);
                            
                            this.props.onIcerikEkle && this.props.onIcerikEkle({
                                isicerik: a.aciklama
                            });

                            this.props.onSave && this.props.onSave(a);

                            this.setState({ visible: false });
                        }}
                    />
                ) || null}
            { (this.props.value && this.props.value.files && this.props.value.files.length && <PortletBody>
                <Row>
                    { (this.props.value.files || []).map(a => <Col md="3">
                        <Thumbnail
                            id={a.dosya.id}
                            url={a.dosya.$blob_url} />

                        <FilePickerCore
                            controller={a.dosya = ((a.dosya.$state && a.dosya) || UploadConfig(fix_url(a.dosya)))}
                            onNotify={() => {
                                if (a.dosya.$state === 1) {
                                    this.props.onChange({ ...this.props.value, files: this.props.value.files.filter(b => b !== a) });
                                } else {
                                    this.forceUpdate();
                                }
                            }}
                            noThumb
                        />
                    </Col>) }
                </Row>
            </PortletBody>) || null }
        </Portlet>
        );
    }
}
