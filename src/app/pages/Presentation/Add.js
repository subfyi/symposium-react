import React, {Component} from 'react';
import GenelForm from '../../common/GenelForm';

import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import SiparisDetay from './SiparisDetay';
import AspectRatio from 'react-aspect-ratio';
import 'react-aspect-ratio/aspect-ratio.css'
import {CardHeaderToolbar} from "../../../_metronic/_partials/controls";


class CustomPanel extends Component {
    state = { on: false };

    componentWillMount() {
        this.setState({ on: !!this.props.open });
    }

    render() {
        return <Card>
            <CardHeader
                title={ this.props.title }
                toolbar={<CardHeaderToolbar>
                    <button
                        type="button"
                        onClick={() => this.setState({
                            on: !this.state.on
                        })}
                        className="btn btn-clean btn-sm btn-icon btn-icon-md ng-star-inserted"
                    >
                        <i className="la la-code" />
                    </button>
                </CardHeaderToolbar>} />
            { this.state.on && <CardBody>
                { this.props.children }
            </CardBody> }
        </Card>;
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
