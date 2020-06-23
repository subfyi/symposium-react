import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    ButtonGroup,
    Table,
} from 'reactstrap';

import SingleFilePicker, {fix_url} from '../../upload/SingleFilePicker';

import Moment from 'react-moment';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CustomPanel extends Component {
    state = {on: true};

    render() {
        return <Card className="mb-5">
            <CardHeader onClick={a => {
                this.setState({on: !this.state.on});
            }} style={{cursor: 'pointer'}}>
                <i className="fa fa-align-justify"></i>
                {' '}{this.props.label}

                {!this.state.on && <i className="fa fa-eye"></i>}

            </CardHeader>
            <CardBody>
                {this.state.on && this.props.children}
            </CardBody>
        </Card>;
    }
}


export default class SiparisDetay extends Component {
    state = {};

    render() {
        return (  <Card>
            <CardHeader title="Questions" />
                <CardBody>
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Sahibi</th>
                        <th style={{ width: '20%' }}>Oluşturma</th>
                        <th style={{ width: '20%' }}>Güncelleme</th>
                        <th style={{ width: '20%' }}>Geçen</th>
                        <th style={{ width: '10%' }}>İşlem</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (this.props.value || []).map(row => <>
                            <tr>
                                <td>{(row.user && row.user.name) || 'You'}</td>
                                <td>{row.created_at || "Now"}</td>
                                <td>{row.updated_at || "Now"}</td>
                                <td><Moment fromNow ago>{row.created_at}</Moment></td>
                                <td className="d-flex flex-column">
                                    {this.state.editingRow === row ? <ButtonGroup>
                                        <Button color="primary" onClick={a => {
                                            row.updated_at = null;
                                            this.setState({editingRow: null});
                                            this.props.onSave();
                                        }}>Edit</Button>
                                    </ButtonGroup> : <ButtonGroup>
                                        <Button color="warning" size="sm"  onClick={a => this.setState({editingRow: row})}>Edit</Button>
                                    </ButtonGroup>}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    {(row.dosyalar || []).map(dosya => <div className="mt-1 mb-1"><SingleFilePicker value={dosya.dosya} disabled noThumb /></div>)}

                                    {this.state.editingRow === row ? <>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={(row.initialData || (row.initialData = row.isicerik)) || ""}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                row.isicerik = data;
                                            }}
                                        />
                                    </> : <div className="icerik-alani" dangerouslySetInnerHTML={{__html: row.isicerik}}/>}
                                </td>
                            </tr>
                        </>)
                    }
                    </tbody>
                </Table>
                <Button className="col-md-12" color="primary" onClick={a => {
                    if(this.state.editingRow) {
                        this.state.editingRow.updated_at = null;
                        this.setState({editingRow: null});
                        this.props.onSave();
                        return ;
                    }

                    var obj = {
                        user: {name: 'You'}
                    };

                    this.props.onChange((this.props.value || []).concat([obj]));
                    this.setState({editingRow: obj});
                }}>{ this.state.editingRow ? 'Save' : 'Add New' }</Button>
                </CardBody>
            </Card>
        );
    }
}
