
import React, { Component } from 'react';
import { FormFeedback } from 'reactstrap';

export default class Validator extends Component {
  render() {
    var error = this.props.controller.validator.message(this.props.name, this.props.value || this.props.controller.state[this.props.name], this.props.type);

    var a = this.props.children;
    a = a && React.cloneElement(a, { invalid: !!error, className: ((a.props && a.props.className) || '') + (!!error ? ' is-invalid' : '') });

    return <>
      {a}
      {error && <FormFeedback className="d-block">{error}</FormFeedback>}
    </>;
  }
}
