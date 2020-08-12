import React, {useState} from "react";
import {FormattedMessage} from "react-intl";
import {Link, Redirect} from "react-router-dom";
import {Input, Row, Label, Col, FormGroup} from "reactstrap";
import SimpleReactValidator from 'simple-react-validator';
import {free, hatagoster, log_in, loggedIn} from "../../../api";
import swal2 from 'sweetalert2';
import Validator from '../../../common/Validator';

export default class extends React.Component {
    state = {loading: true};

    constructor(props) {
        super(props);

        this.validator = new SimpleReactValidator();
    }

    async componentDidMount() {
        const { token, email } = this.props.match.params;

        var hata = await hatagoster(
            free.get('/api/reset', { params: { token: decodeURIComponent(token), email: decodeURIComponent(email) } })
        );

        if (!hata) {
            this.setState({loading: false});
        } else {
            this.setState({loading: 'hata'});
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { token, email } = this.props.match.params;

        if (this.loading)
            return;

        if (!this.validator.allValid()) {
            this.validator.showMessages();
            this.forceUpdate();
            return;
        }

        var hata;

        this.loading = true;
        try {
            hata = await hatagoster(
                free.post('/api/reset', { token:decodeURIComponent(token), email:decodeURIComponent(email), password: this.state.password })
            );
        } finally {
            this.loading = false;
        }

        if (!hata) {
            await log_in(decodeURIComponent(email), this.state.password);
            loggedIn(true);
            await swal2.fire('Successful', 'Successfully Send New.', 'success');
        }
    }

    render() {
        if (this.state.loading == 'hata')
            return <Redirect to="/auth/login" />;
        if (this.state.loading)
            return null;

        return (
            <div className="login-form login-forgot" style={{display: "block"}}>
                <div className="text-center mb-10 mb-lg-20">
                    <h3 className="font-size-h1">Reset Your Password </h3>
                    <div className="text-muted font-weight-bold">
                        Enter your new password
                    </div>
                </div>
                <div className="form-group fv-plugins-icon-container">
                    <FormGroup>
                            <Input
                                type="text"
                                readOnly
                                className={`form-control form-control-solid h-auto py-5 px-6 `}
                                value={decodeURIComponent(this.props.match.params.email)}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Validator
                            name="password"
                            type="required"
                            controller={this}>
                            <Input
                                type="password"
                                className={`form-control form-control-solid h-auto py-5 px-6 `}
                                onChange={a => this.setState({password: a.currentTarget.value})}
                                value={this.state.password || ""}
                            />
                        </Validator>
                    </FormGroup>
                </div>


                <Row>
                    <Col md="6">
                        <Link to="/auth/login">
                            <a className="btn btn-secondary btn-elevate kt-login__btn-secondary btn-block">
                                Back
                            </a>
                        </Link>
                    </Col>
                    <Col md="6">
                        <button
                            disabled={!!this.loading}
                            onClick={this.handleSubmit.bind(this)}
                            className="btn btn-primary btn-elevate kt-login__btn-primary btn-block"
                        >
                            {!this.loading ? 'Submit' : 'Please wait..'}
                        </button>
                    </Col>
                </Row>
            </div>
        );
    }
};
