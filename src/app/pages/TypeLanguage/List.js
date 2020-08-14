import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GenelList from '../../common/GenelList';

export default class List extends Component {
    render() {
        return <GenelList
            url="/api/typelanguage"
            add="/typelanguage/create"
            edit={id => `/typelanguage/${id}/edit`}
            {...this.props}>
            <>
                <th>active</th>
                <th>name</th>
            </>
            {
                row => <>
                    <td>{row.active ? 'Yes' : 'No'}</td>
                    <td>{row.name}</td>
                </>
            }
        </GenelList>;
    }
}

