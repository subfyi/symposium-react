import React, {Component} from 'react';
import {
    Button, FormGroup, Input, Col, Pagination, PaginationItem, PaginationLink, Row, Table
} from 'reactstrap';
import {Link} from 'react-router-dom';

import {tokenized} from '../api';
import axios from 'axios';
import Excel from 'exceljs/dist/es5/exceljs.browser.js';
import {saveAs} from 'file-saver';
import ReactDOMServer from 'react-dom/server';
import PaginatorCore from './PaginatorCore';
import {FormattedMessage} from "react-intl";

function strip(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

export default class DataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            params: {page: 1, itemPerPage: 25, query: "", sort: "id", desc: true, ...(this.props.defaultParams || {})}
        };
    }

    setupTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
        }

        if (this.props.updateInterval) {
            this.timer = setInterval(() => {
                this.componentDidMount();
            }, this.props.updateInterval);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url || (this.props.defaultParams && prevProps.defaultParams && (this.props.defaultParams.tur !== prevProps.defaultParams.tur || this.props.defaultParams.olusturan !== prevProps.defaultParams.olusturan))) {
            this.setupTimer();
            console.log('Default: ', this.props.defaultParams);
            this.setState({
                data: null,
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

        this.setupTimer();

        this.cancelToken = axios.CancelToken.source();
        var data = await tokenized.get(this.props.url, {
            params: this.state.params,
            cancelToken: this.cancelToken.token
        });
        this.setState({data: data.data});
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = 0;
        }
    }

    async updateAndReload(params, e) {
        e.preventDefault();

        params = {...this.state.params, ...params};

        if (params.page > this.state.data.last_page || params.page <= 0) {
            return;
        }

        this.setState({params: params}, _ => this.componentDidMount());
    }

    async updateAndReload2(params) {
        console.log('Params: ', params);
        console.log('Final Params: ', {...this.state.params, ...params});

        this.setState({params: {...this.state.params, ...params}}, _ => this.componentDidMount());
    }

    async handleExcel(e) {
        e.preventDefault();

        var workbook = new Excel.Workbook();
        workbook.creator = 'Narusta';
        workbook.created = new Date();
        workbook.modified = new Date();

        var sheet = workbook.addWorksheet(this.props.name || "Report");

        var data = await tokenized.get(this.props.url, {params: {...this.state.params, ...{itemPerPage: -1}}});

        var header = this.props.children[0].props.children.props.children[1].props.children;

        var array = ['ID'].concat(header
            .filter(a => a && a.props)
            .filter(a => !a.props.islemtest)
            .map(a => strip(ReactDOMServer.renderToString(a))));

        var headerRow = sheet.addRow(array);

        headerRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {argb: 'FFFFFF00'},
                bgColor: {argb: 'FF0000FF'}
            };

            cell.border = {
                top: {style: 'thin'},
                left: {style: 'thin'},
                bottom: {style: 'thin'},
                right: {style: 'thin'}
            };
        });

        for (var row of data.data.data) {
            var data = this.props.children[1].props.children(row);

            var array = [row.id].concat(data.props.children[1].props.children
                .filter(a => a && a.props)
                .filter(a => !a.props.islemtest)
                .map(a => strip(ReactDOMServer.renderToString(a))));

            sheet.addRow(array);
        }

        for (let i = 0; i < sheet.columns.length; i += 1) {
            let dataMax = 0;
            const column = sheet.columns[i];
            for (let j = 1; j < column.values.length; j += 1) {
                const columnLength = column.values[j].length + 2;
                if (columnLength > dataMax) {
                    dataMax = columnLength;
                }
            }
            column.width = dataMax < 12 ? 12 : dataMax;
        }

        var data = await workbook.xlsx.writeBuffer();

        var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
        saveAs(blob, (this.props.name || "Report") + ".xlsx");
    }

    th(th, index) {
        return <th key={index} {...th.props}
                   style={{cursor: 'pointer'}}
                   onClick={this.updateAndReload.bind(this, {
                       sort: th.props.sort,
                       desc: this.state.params.sort === th.props.sort ? !this.state.params.desc : true
                   })}
        >{th.props.children} {this.state.params.sort === th.props.sort ? this.state.params.desc ?
            <i className="fa fa-sort-down"/> :
            <i className="fa fa-sort-up"/> : ''}
        </th>;
    }

    render() {
        if (!this.state.data)
            return <div><FormattedMessage id="general.Loading"/></div>;

        return <div>
            <FormGroup row>

                {this.props.add && <Col xs="12" md="2"><Link to={this.props.add} className="col-md-12 btn btn-primary font-xl d-block mb-12"><i className="fa fa-plus"/> <FormattedMessage
                    id="general.add_new"/></Link></Col>}

                <Col md="2">
                    <Input type="select" value={this.state.params.itemPerPage.toString()}
                           onChange={a => this.updateAndReload2({itemPerPage: +a.currentTarget.value})}>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                        <option value="-1"><FormattedMessage id="general.all"/></option>
                    </Input>
                </Col>
                <Col xs="12" md="2"></Col>
                <Col xs="12" md="2">
                    {this.props.add && <Button
                        color="primary"
                        block
                        className="font-xl"
                        onClick={this.handleExcel.bind(this)}>
                        <i className="fa fa-file-excel"/>
                        <FormattedMessage id="general.excell"/></Button>}
                </Col>
                <Col xs="12" md="4">
                    <Input placeholder="Arama..." type="text" value={this.state.params.query}
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
                    <PaginatorCore
                        activePage={this.state.data.current_page}
                        pageCount={this.state.data.last_page}

                        showPages={15}

                        prevPage={index => <PaginationItem onClick={this.updateAndReload.bind(this, {page: index})}><PaginationLink previous tag="button"><FormattedMessage
                            id="general.prev"/></PaginationLink></PaginationItem>}

                        page={index => <PaginationItem key={index} active={this.state.data.current_page === index}>
                            <PaginationLink tag="button" onClick={this.updateAndReload.bind(this, {page: index})}>{index}</PaginationLink>
                        </PaginationItem>}

                        nextPage={index => <PaginationItem
                            onClick={this.updateAndReload.bind(this, {page: index})}><PaginationLink next
                                                                                                     tag="button"><FormattedMessage
                            id="general.next"/></PaginationLink></PaginationItem>}

                        dots={index => <PaginationItem
                            onClick={this.updateAndReload.bind(this, {page: index})}><PaginationLink tag="button">{index}</PaginationLink></PaginationItem>}
                    />
                </Pagination>
            </nav>
        </div>;
    }
}
