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

import SingleFilePicker, {fix_url} from '../../upload/SingleFilePicker';

import Moment from 'react-moment';
import GenelForm from '../../common/GenelForm';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Portlet, PortletBody, PortletHeader, PortletHeaderToolbar} from "../../partials/content/Portlet";
import SiparisDetay from './SiparisDetay';
import AspectRatio from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css'


class CustomPanel extends Component {
    state = { on: false };

    componentWillMount() {
        this.setState({ on: !!this.props.open });
    }

    render() {
        return <Portlet>
            <PortletHeader
                title={ this.props.title }
                toolbar={<PortletHeaderToolbar>
                    <button
                        type="button"
                        onClick={() => this.setState({
                            on: !this.state.on
                        })}
                        className="btn btn-clean btn-sm btn-icon btn-icon-md ng-star-inserted"
                    >
                        <i className="la la-code" />
                    </button>
                </PortletHeaderToolbar>} />
            { this.state.on && <PortletBody>
                { this.props.children }
            </PortletBody> }
        </Portlet>;
    }
}

export default class AddPresentation extends Component {
    render() {
        return <>
            <GenelForm
                noCard
                noSave
                key={this.props.match.params.id || 0}
                url="/api/submission"
                id={this.props.match.params.id}
                {...this.props}
            >
                {
                    controller => controller.state && controller.state.video && <>
                        <CustomPanel open title="Video">
                            <AspectRatio ratio="16/9" style={{ width: '100%' }}>
                                <iframe style={{ width: '100%' }} frameBorder="0" src={`https://drive.google.com/file/d/${controller.state.video.g_dosyaismi}/preview`} allowFullScreen />
                            </AspectRatio>
                        </CustomPanel>
                        
                        <SiparisDetay
                            value={controller.state.icerikler}
                            onChange={val => controller.setState({icerikler: val})}
                            onSave={() => controller.save()}
                        />
                    </>
                }
            </GenelForm>
        </>;
    }
}
