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

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


// Example 5
const useStyles52 = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: "auto"
    }
}));

const useStyles51 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5)
    }
}));

function TablePaginationActions5(props) {
    const classes = useStyles51();
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
        <div className={classes.root}>
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

TablePaginationActions5.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};

function createData5(name, calories, fat) {
    return {name, calories, fat};
}
var rows5 = [
    createData5("Cupcake", 305, 3.7),
    createData5("Donut", 452, 25.0),
];


var request = 'http://127.0.0.1:8000/wwww';
var setValueAaa = null;
fetch(request)
    .then(
        function(response) {
            console.log(response);
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function(data) {
                rows5.push([
                    createData5("Eclair", 262, 16.0),
                    createData5("Frozen yoghurt", 159, 6.0),
                ].sort((a, b) => (a.calories < b.calories ? -1 : 1)));

                    console.log(data[0]);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

export default function Main() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
setValueAaa = setValue;
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    // Example 5
    const classes5 = useStyles52();
    const [page5, setPage5] = React.useState(0);
    const [rowsPerPage5, setRowsPerPage5] = React.useState(5);

    const emptyRows5 =
        rowsPerPage5 - Math.min(rowsPerPage5, rows5.length - page5 * rowsPerPage5);

    function handleChangePage5(event, newPage) {
        setPage5(newPage);
    }

    function handleChangeRowsPerPage5(event) {
        setRowsPerPage5(parseInt(event.target.value, 10));
    }


    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="kt-section">
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
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

                        <div className={classes.root}>

                            {value === 0 && <TabContainer>
                                <div className="kt-section__content">
                                    <Paper className={classes5.root}>
                                        <div className={classes5.tableWrapper}>
                                            <Table className={classes5.table}>
                                                <TableBody>
                                                    {rows5
                                                        .slice(
                                                            page5 * rowsPerPage5,
                                                            page5 * rowsPerPage5 + rowsPerPage5
                                                        )
                                                        .map(row => (
                                                            <TableRow key={row.name}>
                                                                <TableCell component="th" scope="row">
                                                                    {row.name}
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    {row.calories}
                                                                </TableCell>
                                                                <TableCell align="right">{row.fat}</TableCell>
                                                            </TableRow>
                                                        ))}

                                                    {emptyRows5 > 0 && (
                                                        <TableRow style={{height: 48 * emptyRows5}}>
                                                            <TableCell colSpan={6}/>
                                                        </TableRow>
                                                    )}
                                                </TableBody>
                                                <TableFooter>
                                                    <TableRow>
                                                        <TablePagination
                                                            rowsPerPageOptions={[5, 10, 25]}
                                                            colSpan={3}
                                                            count={rows5.length}
                                                            rowsPerPage={rowsPerPage5}
                                                            page={page5}
                                                            SelectProps={{
                                                                inputProps: {"aria-label": "Rows per page"},
                                                                native: true
                                                            }}
                                                            onChangePage={handleChangePage5}
                                                            onChangeRowsPerPage={handleChangeRowsPerPage5}
                                                            ActionsComponent={TablePaginationActions5}
                                                        />
                                                    </TableRow>
                                                </TableFooter>
                                            </Table>
                                        </div>
                                    </Paper>
                                </div>
                            </TabContainer>}
                            {value === 1 && <TabContainer>Item Two</TabContainer>}
                            {value === 2 && <TabContainer>Item Three</TabContainer>}
                            {value === 3 && <TabContainer>Item Four</TabContainer>}
                            {value === 4 && <TabContainer>Item Five</TabContainer>}
                            {value === 5 && <TabContainer>Item Six</TabContainer>}
                            {value === 6 && <TabContainer>Item Seven</TabContainer>}
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

const jsCode5 = `
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

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
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'Rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}
`;