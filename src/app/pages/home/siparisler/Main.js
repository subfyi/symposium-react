import React, {useMemo} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {
    Portlet,
    PortletBody,
    PortletHeader,
    PortletHeaderToolbar
} from "../../../partials/content/Portlet";
import {metronic} from "../../../../_metronic";
import QuickStatsChart from "../../../widgets/QuickStatsChart";
import OrderStatisticsChart from "../../../widgets/OrderStatisticsChart";
import OrdersWidget from "../../../widgets/OrdersWidget";
import SalesBarChart from "../../../widgets/SalesBarChart";
import DownloadFiles from "../../../widgets/DownloadFiles";
import NewUsers from "../../../widgets/NewUsers";
import LatestUpdates from "../../../widgets/LatestUpdates";
import BestSellers from "../../../widgets/BestSellers";
import RecentActivities from "../../../widgets/RecentActivities";
import PortletHeaderDropdown from "../../../partials/content/CustomDropdowns/PortletHeaderDropdown";
import CodeExample from "../../../partials/content/CodeExample";
import Notice from "../../../partials/content/Notice";
import {
    makeStyles,
    lighten,
    withStyles,
    useTheme
} from "@material-ui/core/styles";
import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    Toolbar,
    Typography,
    Tooltip,
    IconButton,
    TableSortLabel,
    TablePagination,
    Switch,
    FormControlLabel,
    TableFooter
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            data: [],
            tab: 0,
            rowPerPage: 5,
            page: 0
        };
    }
    async componentDidMount() {
        console.log('component geldi');

        var response = await fetch('http://127.0.0.1:8000/welcome22');
        var data = await response.json();

        this.setState({ data });
    }

    render() {
        console.log('render fonksiyonu calisti');

        return <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={this.state.tab}
                    onChange={a => this.setState({ tab: a.value })}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="Bitmeyen (Ankara)"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                    <Tab label="Item Four"/>
                    <Tab label="Item Five"/>
                    <Tab label="Item Six"/>
                    <Tab label="Item Seven"/>
                </Tabs>
            </AppBar>
            
            
            {this.state.tab === 0 && <TabContainer>
                <div className="kt-section__content">
                    <Paper className="asdasd">
                        <div className="adsasdasd">
                            <Table className="asdfasdfsadf">
                                <TableBody>
                                    {(this.state.data || [])
                                        .slice(
                                            this.state.page * this.state.rowPerPage,
                                            this.state.page * this.state.rowPerPage + this.state.rowPerPage
                                        )
                                        .map(row => (
                                            <TableRow key={row[0]}>
                                                <TableCell component="th" scope="row">
                                                    {row[0]}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row[1]}
                                                </TableCell>
                                                <TableCell align="right">{row[2]}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25]}
                                            colSpan={3}
                                            count={this.state.data.length}
                                            rowsPerPage={this.state.rowPerPage}
                                            page={this.state.page}
                                            SelectProps={{
                                                inputProps: {"aria-label": "Rows per page"},
                                                native: true
                                            }}
                                            onChangePage={(a, b) => this.setState({ page: b })}
                                            onChangeRowsPerPage={a => this.setState({ rowPerPage: Number(a.currentTarget.value) })}
                                            ActionsComponent={TablePaginationActions5}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </Paper>
                </div>
            </TabContainer>}
    </div>
    }
};


function TablePaginationActions5(props) {
    const theme = useTheme();
    const {count, page, rowsPerPage, onChangePage} = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="First Page"
            >
                {theme.direction === "rtl" ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="Previous Page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight/>
                ) : (
                    <KeyboardArrowLeft/>
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft/>
                ) : (
                    <KeyboardArrowRight/>
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Last Page"
            >
                {theme.direction === "rtl" ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </div>
    );
}
