import React, {Component} from 'react';
import GenelList from '../../common/GenelList';

export default class List extends Component {
    render() {
        return <GenelList
            url="/api/typetopic"
            add="/typetopic/create"
            edit={id => `/typetopic/${id}/edit`}
            {...this.props}>
            <>
                <th>active</th>
                <th>type</th>
                <th>name</th>
            </>
            {
                row => <>
                    <td>{row.active ? 'Yes' : 'No'}</td>
                    <td>{row.lang.name}</td>
                    <td>{row.name}</td>
                </>
            }
        </GenelList>;
    }
}

