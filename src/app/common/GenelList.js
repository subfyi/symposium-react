
import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import DataTable from './DataTable';
import { tokenized, hatagoster } from '../api';
import swal2 from 'sweetalert2';
import '../customcss.css';
import { Link } from 'react-router-dom';

export default class GenelList extends Component {
  constructor(props) {
    super(props);

    this.dataTable = React.createRef();
  }

  async handleDelete(parameter, e) {
    e.preventDefault();

    var modal = await swal2.fire({
      title: 'Are you sure?',
      text: "You can not get it back!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!'
    });

    if(!modal.value) {
      return ;
    }

    var hata = await hatagoster(tokenized.delete(`${this.props.url}/${parameter.id}`));

    if(!hata) {
      this.dataTable.current.updateAndReload({}, e);
      await swal2.fire('Success', 'Record succesccfully deleted!', 'success');
    }
  }

  async handleEdit(parameter, e) {
    e.preventDefault();

    this.props.history.push(this.props.edit(parameter.id));
  }

  render() {
    return <>
      <DataTable add={this.props.add} url={this.props.url} ref={this.dataTable} defaultParams={this.props.defaultParams}>
        <thead>
          <tr>
            <th sort="id">#</th>
            {this.props.children[0]}
            {(this.props.islem !== false && <th>İşlemler</th>) || null}
          </tr>
        </thead>
        <tbody>
          {
            row => <tr key={row.id}>
              <td>{row.id}</td>
              {this.props.children[1](row)}
              {(this.props.islem !== false && <td className="thstyle">
                {this.props.edit && <Link to={this.props.edit(row.id)} className="btn btn-sm btn-outline-primary"><i className="fas fa-edit" /> Edit</Link>}
                {this.props.sil !== false && <a href="#" onClick={this.handleDelete.bind(this, row)} className="btn btn-outline-danger ml-1 btn-sm"><i className="fa fa-trash" /> Delete</a>}
              </td>) || null}
            </tr>
          }
        </tbody>
      </DataTable>
    </>;
  }
}

