import React from "react";
import {Formik} from "formik";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {FormattedMessage, injectIntl} from "react-intl";
import {Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import * as auth from "../../store/ducks/auth.duck";
import {register} from "../../crud/auth.crud";

function Registration(props) {
    const {intl} = props;

    return (
        <div className="kt-login__body">
            <div className="">
                <div className="kt-login__title">
                    <h3>
                        <FormattedMessage id="AUTH.REGISTER.TITLE"/>
                    </h3>
                </div>

                <Formik
                    initialValues={{
                        email: "",
                        fullname: "",
                        username: "",
                        password: "",
                        acceptTerms: true,
                        confirmPassword: ""
                    }}
                    validate={values => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = intl.formatMessage({
                                id: "AUTH.VALIDATION.REQUIRED_FIELD"
                            });
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = intl.formatMessage({
                                id: "AUTH.VALIDATION.INVALID_FIELD"
                            });
                        }

                        if (!values.fullname) {
                            errors.fullname = intl.formatMessage({
                                id: "AUTH.VALIDATION.REQUIRED_FIELD"
                            });
                        }

                        if (!values.username) {
                            errors.username = intl.formatMessage({
                                id: "AUTH.VALIDATION.REQUIRED_FIELD"
                            });
                        }

                        if (!values.password) {
                            errors.password = intl.formatMessage({
                                id: "AUTH.VALIDATION.REQUIRED_FIELD"
                            });
                        }

                        if (!values.confirmPassword) {
                            errors.confirmPassword = intl.formatMessage({
                                id: "AUTH.VALIDATION.REQUIRED_FIELD"
                            });
                        } else if (values.password !== values.confirmPassword) {
                            errors.confirmPassword =
                                "Password and Confirm Password didn't match.";
                        }

                        if (!values.acceptTerms) {
                            errors.acceptTerms = "Accept Terms";
                        }

                        return errors;
                    }}
                    onSubmit={(values, {setStatus, setSubmitting}) => {
                        register(
                            values.email,
                            values.fullname,
                            values.username,
                            values.password
                        )
                            .then(({data: {accessToken}}) => {
                                props.register(accessToken);
                            })
                            .catch(() => {
                                setSubmitting(false);
                                setStatus(
                                    intl.formatMessage({
                                        id: "AUTH.VALIDATION.INVALID_LOGIN"
                                    })
                                );
                            });
                    }}
                >
                    {({
                          values,
                          status,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting
                      }) => (
                        <form onSubmit={handleSubmit} noValidate autoComplete="off">
                            {status && (
                                <div role="alert" className="alert alert-danger">
                                    <div className="alert-text">{status}</div>
                                </div>
                            )}
                            <div className="row">
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Name"
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Surname"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>

                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Title"
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Type"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Gender"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>

                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Institution"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Faculty"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Department"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        margin="normal"
                                        label="Mobile / GSM"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        label="Email"
                                        margin="normal"
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        helperText={touched.email && errors.email}
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        type="password"
                                        margin="normal"
                                        label="Password"
                                        className="kt-width-full"
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        helperText={touched.password && errors.password}
                                        error={Boolean(touched.password && errors.password)}
                                    />
                                </div>

                                <div className="form-group mb-0 col-md-6">
                                    <TextField
                                        type="password"
                                        margin="normal"
                                        label="Confirm Password"
                                        className="kt-width-full"
                                        name="confirmPassword"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.confirmPassword}
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                        error={Boolean(
                                            touched.confirmPassword && errors.confirmPassword
                                        )}
                                    />
                                </div>
                                <div className="form-group mb-0 col-md-12">
                                    <TextField
                                        margin="normal"
                                        label="Address"
                                        name="surname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fullname}
                                        helperText={touched.fullname && errors.fullname}
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <Link
                                    to="/auth/forgot-password"
                                    className="kt-link kt-login__link-forgot col-md-4"
                                >
                                    <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON"/>
                                </Link>

                                <Link to="/auth" className="col-md-4">
                                    <button type="button" className="btn btn-secondary btn-elevate kt-login__btn-secondary  col-md-12">
                                        Back
                                    </button>
                                </Link>

                                <button
                                    disabled={isSubmitting}
                                    className="btn btn-primary btn-elevate kt-login__btn-primary col-md-4"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default injectIntl(
    connect(
        null,
        auth.actions
    )(Registration)
);
