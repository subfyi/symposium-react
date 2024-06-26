import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import { FormattedMessage, injectIntl } from 'react-intl';
import { Card, CardBody } from 'reactstrap';
import swal2 from 'sweetalert2';
import { hatagoster, tokenized } from '../api';
import DataTable from './DataTable';


export default injectIntl(class GenelList extends Component {
    constructor(props) {
        super(props);

        this.dataTable = React.createRef();
    }

    async handleDelete(parameter, e) {
        e.preventDefault();

        var modal = await swal2.fire({
            title: this.props.intl.formatMessage({id: 'general.are_you_sure'}),
            text: this.props.intl.formatMessage({id: 'general.u_cannot_undo'}),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.props.intl.formatMessage({id: 'general.yes_delete_it'})
        });

        if (!modal.value) {
            return;
        }

        var hata = await hatagoster(tokenized.delete(`${this.props.url}/${parameter[this.props.idKey || "id"]}`));

        if (!hata) {
            this.dataTable.current && this.dataTable.current.updateAndReload({}, e);
            await swal2.fire(
                this.props.intl.formatMessage({id: 'general.success'}),
                this.props.intl.formatMessage({id: 'general.delete_success'}),
                'success');
        }
    }

    async handleEdit(parameter, e) {
        e.preventDefault();

        this.props.history.push(this.props.edit(parameter[this.props.idKey || "id"]));
    }

    async handleAdd(e) {
        e.preventDefault();

        this.props.history.push(this.props.add);
    }

    render() {
        return <>
            <Card>
                <CardBody>
                    <DataTable updateInterval={this.props.updateInterval} name={this.props.name} add={this.props.add}
                               url={this.props.url} ref={this.dataTable} defaultParams={this.props.defaultParams} intl={this.props.intl}>
                        <thead>
                        <tr>
                            <th sort="id">#</th>
                            {this.props.children[0]}
                            {(this.props.islem !== false && <th><FormattedMessage id="general.operations"/></th>) || null}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            row => <tr key={row[this.props.idKey || "id"]} className={this.props.trstyle && this.props.trstyle(row)}>
                                <td>{row[this.props.idKey || "id"]}</td>
                                {this.props.children[1](row)}
                                {(this.props.islem !== false && <td className="thstyle">
                                    {this.props.edit && <a href={this.props.edit(row[this.props.idKey || "id"])}
                                                           onClick={this.handleEdit.bind(this, row)}
                                                           className="btn btn-sm btn-outline-primary"><i
                                        className="fa fa-pencil-alt"/></a>}
                                    <a href="#" onClick={this.handleDelete.bind(this, row)}
                                       className="btn btn-outline-danger ml-1 btn-sm"><i className="fa fa-trash"/>
                                    </a>
                                </td>) || null}
                            </tr>
                        }
                        </tbody>
                        {null}
                        <>
                            {this.props.add && <Col md="1">
                                <a href={this.props.add} onClick={this.handleAdd.bind(this)}
                                   className="btn btn-outline-light btn-add font-xl btn-block"><i className="fas fa-plus"></i> <FormattedMessage id="general.new"/> </a>
                            </Col>}
                            {this.props.children[2]}
                        </>
                    </DataTable>
                </CardBody>
            </Card>
        </>;
    }
});


