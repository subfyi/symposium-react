import React, {Component} from 'react';
import {Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table} from 'reactstrap';
import { Link } from 'react-router-dom';

import {tokenized} from '../api';
import axios from 'axios';

export default class DataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            params: {page: 1, itemPerPage: 25, query: "", sort: "id", desc: true, ...(this.props.defaultParams || {})}
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps || this.props.url !== prevProps.url || this.props.defaultParams !== prevProps.defaultParams) {
            console.log('Default: ', this.props.defaultParams);
            this.setState({
                params: {
                    page: 1,
                    itemPerPage: 25,
                    query: "",
                    sort: "id",
                    desc: true, ...(this.props.defaultParams || {})
                }
            }, _ => this.componentDidMount());
        }
    }

    async componentDidMount() {
        if (this.cancelToken) {
            this.cancelToken.cancel();
        }

        this.cancelToken = axios.CancelToken.source();
        var data = await tokenized.get(this.props.url, {params: this.state.params, cancelToken: this.cancelToken.token});
        this.setState({data: data.data});
    }

    async updateAndReload(params, e) {
        e.preventDefault();

        if (params.page > this.state.data.last_page || params.page <= 0) {
            return;
        }

        this.setState({params: {...this.state.params, ...params}}, _ => this.componentDidMount());
    }

    th(th, index) {
        return <th key={index} {...th.props}
                   style={{cursor: 'pointer'}}
                   onClick={this.updateAndReload.bind(this, {
                       sort: th.props.sort,
                       desc: this.state.params.sort === th.props.sort ? !this.state.params.desc : true
                   })}
        >{th.props.children} {this.state.params.sort === th.props.sort ? this.state.params.desc ? <i className="fa fa-sort-down"/> :
            <i className="fa fa-sort-up"/> : ''}
        </th>;
    }

    render() {
        if (!this.state.data)
            return <div>Yukleniyor...</div>;

        return <div>
            <FormGroup row>
                <Col xs="12" md="2">
                    {this.props.add && <Link to={this.props.add} className="col-md-12 btn btn-primary font-xl d-block mb-12"><i className="fa fa-plus" /> Yeni Ekle</Link>}
                </Col>
                <Col xs="12" md="6"></Col>
                <Col xs="12" md="4">
                    <Input placeholder="Search" type="text" value={this.state.params.query}
                           onChange={e => this.updateAndReload({query: e.currentTarget.value, page: 1}, e)}/>
                </Col>
            </FormGroup>
            <Table hover bordered striped responsive size="m">
                <thead>
                <tr>
                    {React.Children.map(
                        this.props.children[0].props.children.props.children, (th, index) => th && (
                            th.type === React.Fragment ? React.Children.map(th.props.children, (th, index) => !th ? null : th.props && th.props.sort ? this.th(th, index) : th)
                                : th.props && th.props.sort ? this.th(th, index) : th)
                    )}
                </tr>
                </thead>
                <tbody>
                {this.state.data && this.state.data.data.map(this.props.children[1].props.children)}
                </tbody>
            </Table>
            <nav>
                <Pagination>
                    <PaginationItem disabled={this.state.data.current_page === 1}
                                    onClick={this.updateAndReload.bind(this, {page: this.state.data.current_page - 1})}><PaginationLink previous
                                                                                                                                        tag="button">Prev</PaginationLink></PaginationItem>
                    {([...Array(this.state.data.last_page)].map((_, sayfa) => (
                        <PaginationItem key={sayfa} active={this.state.data.current_page === sayfa + 1}>
                            <PaginationLink tag="button" onClick={this.updateAndReload.bind(this, {page: sayfa + 1})}>{sayfa + 1}</PaginationLink>
                        </PaginationItem>)))}
                    <PaginationItem disabled={this.state.data.current_page === this.state.data.last_page}
                                    onClick={this.updateAndReload.bind(this, {page: this.state.data.current_page + 1})}><PaginationLink next
                                                                                                                                        tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
            </nav>
        </div>;
    }
}
