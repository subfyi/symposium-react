/* eslint-disable no-restricted-imports */
import React from "react";
import clsx from "clsx";
import Notice from "../../../partials/content/Notice";
import CodeExample from "../../../partials/content/CodeExample";
import {
    TextField,
    MenuItem,
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    OutlinedInput,
    FilledInput,
    InputBase,
    Paper,
    IconButton,
    Divider,
    InputAdornment,
    Grid
} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {
    fade,
    withStyles,
    makeStyles,
    createMuiTheme
} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";

// Example 1
const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    }
}));

const currencies = [
    {
        value: "USD",
        label: "$"
    },
    {
        value: "EUR",
        label: "€"
    },
    {
        value: "BTC",
        label: "฿"
    },
    {
        value: "JPY",
        label: "¥"
    }
];

// Example 2
const useStyles2 = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    }
}));

// Example 3
const useStyles3 = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    }
}));

// Example 4
const useStyles4 = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing(1)
    }
}));

// Example 5
const useStyles5 = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    input: {
        margin: theme.spacing(1)
    }
}));

// Example 6
const useStyles6 = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    }
}));

// Example 7
const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "green"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "red"
            },
            "&:hover fieldset": {
                borderColor: "yellow"
            },
            "&.Mui-focused fieldset": {
                borderColor: "green"
            }
        }
    }
})(TextField);

const BootstrapInput = withStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "auto",
        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}))(InputBase);

const useStylesReddit = makeStyles(theme => ({
    root: {
        border: "1px solid #e2e2e1",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#fcfcfb",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:hover": {
            backgroundColor: "#fff"
        },
        "&$focused": {
            backgroundColor: "#fff",
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main
        }
    },
    focused: {}
}));

function RedditTextField(props) {
    const classes = useStylesReddit();

    return (
        <TextField InputProps={{classes, disableUnderline: true}} {...props} />
    );
}

const useStyles7 = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    }
}));

const theme7 = createMuiTheme({
    palette: {
        primary: green
    }
});

// Example 8
const useStyles8 = makeStyles({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400
    },
    input: {
        marginLeft: 8,
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4
    }
});

// Example 9
const ranges = [
    {
        value: "0-20",
        label: "0 to 20"
    },
    {
        value: "21-50",
        label: "21 to 50"
    },
    {
        value: "51-100",
        label: "51 to 100"
    }
];

const useStyles9 = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    },
    textField: {
        flexBasis: 200
    }
}));

// Example 10
const useStyles10 = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

// Example 11
const useStyles11 = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    },
    textField: {
        flexBasis: 200
    }
}));

// Example 12
const useStyles12 = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    },
    textField: {
        flexBasis: 200
    }
}));

export default function Create() {
    // Example 1
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: "Cat in the Hat",
        age: "",
        multiline: "Controlled",
        currency: "EUR"
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    // Example 2
    const classes2 = useStyles2();
    const [values2, setValues2] = React.useState({
        name: "Cat in the Hat",
        age: "",
        multiline: "Controlled",
        currency: "EUR"
    });

    const handleChange2 = name => event => {
        setValues2({...values2, [name]: event.target.value});
    };

    // Example 4
    const [labelWidth4, setLabelWidth4] = React.useState(0);
    const [name4, setName4] = React.useState("Composed TextField");
    const labelRef4 = React.useRef(null);
    const classes4 = useStyles4();

    React.useEffect(() => {
        setLabelWidth4(labelRef4.current.offsetWidth);
    }, []);

    function handleChange4(event) {
        setName4(event.target.value);
    }

    return (
        <>
            <CodeExample beforeCodeTitle="BAŞLANGIÇ">
                <div className="kt-section">
                    <div className="kt-section__content">
                        <form className={classes2.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Teslim Yeri Adresi *:"
                                className={classes2.textField}
                                value="name"
                                onChange={handleChange2("name")}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Baskı Merkezi"
                                className={classes2.textField}
                                value={values2.currency}
                                onChange={handleChange("currency")}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes2.menu
                                    }
                                }}
                                margin="normal"
                                variant="outlined"
                            >
                                {currencies.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id="outlined-required"
                                label="Siparişin Beklenen Teslim Tarihi *:"
                                defaultValue=" "
                                className={classes2.textField}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-error"
                                label="Keşif Yapan Kişi:"
                                defaultValue=" "
                                className={classes2.textField}
                                margin="normal"
                                variant="outlined"
                            />


                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Sipariş Durumu *:"
                                className={classes2.textField}
                                value={values2.currency}
                                onChange={handleChange("currency")}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes2.menu
                                    }
                                }}
                                margin="normal"
                                variant="outlined"
                            >
                                {currencies.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>


                        </form>
                    </div>
                </div>
            </CodeExample>
            <CodeExample beforeCodeTitle="Sipariş AYRINTILARI">
                <TextField
                    id="outlined-email-input"
                    label="Sipariş Başlığı: *"
                    defaultValue=" "
                    className={classes2.textField}
                    name="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Sipariş Özeti:"
                    multiline
                    rows="4"
                    defaultValue=" "
                    className={classes2.textField}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Kurum Seç (Yoksa Bireysel Seç)"
                    className={classes2.textField}
                    value={values2.currency}
                    onChange={handleChange("currency")}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes2.menu
                        }
                    }}
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>

                <TextField
                    id="outlined-multiline-static"
                    label="Takipçi Seçiniz"
                    defaultValue=" "
                    className={classes2.textField}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Sipariş Detayları:"
                    multiline
                    rows="4"
                    defaultValue=" "
                    className={classes2.textField}
                    margin="normal"
                    variant="outlined"
                />
                <div className="kt-section">
                    <div className="kt-section__content">
                        <div className={classes4.container}>

                            <FormControl className={classes4.formControl} variant="outlined">
                                <InputLabel ref={labelRef4} htmlFor="component-outlined">
                                    Name
                                </InputLabel>
                                <OutlinedInput
                                    id="component-outlined"
                                    value={name4}
                                    onChange={handleChange4}
                                    labelWidth={labelWidth4}
                                />
                            </FormControl>

                        </div>
                    </div>
                </div>
            </CodeExample>


        </>
    );
}
