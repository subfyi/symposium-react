import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';
import GenelList from '../../common/GenelList';

import FileDownload from '../../common/FileDownload';
 
export default class List extends Component {
    render() {
        return <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <GenelList url="/api/submission" edit={id => `/submission/${id}/edit`} add="/submission/create">
                        <>
                            <th sort="created_at">Sended Date</th>
                            <th sort="pap_title">Title of Abstract</th>
                            <th sort="topic.value">Topic of Article</th>
                            <th sort="parampap.value">Pap. Type</th>
                            <th sort="parampre.value">Pre. Type</th>
                            <th>Authors</th>
                            <th>Files</th>

                            <th sort="bloglar.updated_at">Creator</th>
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
                                <td>
                                    <FileDownload label="Abstract" value={row.abstract_dosya} />
                                    <FileDownload label="Full Paper" value={row.full_paper_dosya} />
                                    <FileDownload label="Presentation" value={row.poster_presentation_dosya} />
                                </td>
                                <td>
                                    { row.user.name } { row.user.surname } 
                                </td>
                            </>
                        }
                    </GenelList>
                </CardBody>
            </Card>
        </div>;
    }
}