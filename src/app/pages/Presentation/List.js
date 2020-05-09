import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';
import GenelList from '../../common/GenelList';
import { Link } from 'react-router-dom';

import FileDownload from '../../common/FileDownload';
 
export default class List extends Component {
    render() {
        return <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <GenelList islem={false} url="/api/submission?presentation=1">
                        <>
                            <th sort="created_at">Sended Date</th>
                            <th sort="pap_title">Title of Abstract</th>
                            <th sort="topic.value">Topic of Article</th>
                            <th sort="parampap.value">Pap. Type</th>
                            <th sort="parampre.value">Pre. Type</th>
                            <th>Authors</th>
                            <th></th>
                        </>
                        {
                            row => <>
                                <td>{row.created_at}</td>
                                <td>{row.pap_title}</td>
                                <td>{row.topic && row.topic.value}</td>
                                <td>{row.parampap && row.parampap.value}</td>
                                <td>{row.parampre && row.parampre.value}</td>
                                <td>{row.authors.map((author, index) => <div>
                                <div>{index + 1}. {author.name} {author.surname}
                                    {!!author.correspond && <span>(Correspond)</span>}
                                    {!!author.presenter && <span>(Presenter)</span>}
                                </div>
                                </div>)}</td>
                                <th><Link to={"/presentation/" + row.id + "/watch"} className="btn btn-sm btn-outline-primary"><i className="fas fa-eye" /> Watch</Link></th>
                            </>
                        }
                    </GenelList>
                </CardBody>
            </Card>
        </div>;
    }
}