import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';
import GenelList from '../../common/GenelList';

export default class List extends Component {
    render() {
        return <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <GenelList url="/api/kullanicilar" edit={id => `/kullanicilar/${id}/edit`} add="/kullanicilar/create">
                        <>
                            <th sort="users.name">İsim</th>
                            <th sort="users.email">Mail</th>
                            <th sort="users.yetki">yetki</th>
                            <th sort="users.takipcisi">takipcisi</th>
                        </>
                        {
                            row => <>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.yetki}</td>
                                <td>{row.takipcisi}</td>
                            </>
                        }
                    </GenelList>
                </CardBody>
            </Card>
        </div>;
    }
}