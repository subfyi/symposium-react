import React, { Component } from 'react';

import fileDialog from 'file-dialog';
import UploadConfig from './UploadConfig';
import { fix_url } from './SingleFilePicker';
import FilePickerCore from './FilePickerCore';

export default class MultiFilePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controllers: (props.value || []).map(val => UploadConfig(fix_url(val)))
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.value !== prevProps.value) {
      this.setState({
        controllers: this.state.controllers
          .filter(a => a.$state === 2 || (this.props.value || []).indexOf(a) !== -1)
          .concat((this.props.value || [])
            .filter(a => this.state.controllers.indexOf(a) === -1)
            .map(val => UploadConfig(fix_url(val)))
          )
      });
    }
  }

  get controllers() {
    return this.state.controllers.filter(a => a.$state === 3);
  }

  async dosyaSec(e) {
    e.preventDefault();

    var dosyalar = await fileDialog({
      accept: this.props.accepts || 'image/*',
      multiple: true
    });

    for(var i = 0; i < dosyalar.length; ++i) {
      var controller = UploadConfig();
      controller.upload(dosyalar[i].name, dosyalar[i].type, dosyalar[i]);
      this.state.controllers.push(controller);
    }

    this.forceUpdate();
  }

  handleChange(controller) {
    if(controller.$state === 2) {
      return ;
    }

    if(controller.$state === 1) {
      var index = this.state.controllers.indexOf(controller);
      this.state.controllers.splice(index, 1);
      
      this.forceUpdate();
    }

    var params = this.controllers;

    var ids1 = (this.props.value || []).map(a => a.id || (a.toJSON() && a.toJSON().id));
    var ids2 = params.map(a => a.id);

    if(ids1.length !== ids2.length || ids1.filter(id => ids2.indexOf(id) === -1).length) {
      this.props.onChange(params);
    }
  }

  render() {
    return <div>
      <a href="#" className="btn btn-outline-primary btn-sm" onClick={this.dosyaSec.bind(this)}><i className="fa fa-upload" /> Dosya Secin</a>
      {(this.state.controllers || []).map((a, index) => <FilePickerCore key={index} className="mt-2" onNotify={this.handleChange.bind(this, a)} controller={a} />)}
    </div>;
  }
}
