import React from 'react';
import DualListBox from 'react-dual-listbox';
import { hatagoster, tokenized } from '../api';
import { Label, Input, CustomInput } from 'reactstrap';

export default class MultiAracSelect extends React.Component {
    state = {};
    
    async componentDidMount() {
      var araclar = await tokenized.get('/api/araclar', { params: { itemPerPage: -1 }});

      this.setState({
        araclar: araclar.data.data
      });
    }

    aracClick(arac) {
      var selected = this.props.selected.indexOf(arac.id) !== -1;

      if(selected) {
        this.props.onChange( this.props.selected.filter(a => a !== arac.id) );
      } else {
        this.props.onChange( this.props.selected.concat([arac.id]) );
      }
    }
 
    render() {
        if(!this.state.araclar)
          return null;

        return <ul>
          {this.state.araclar.map(arac => <li key={arac.id}>
            <CustomInput
              id={'arac_' + arac.id}
              type="checkbox"
              checked={ this.props.selected.indexOf(arac.id) !== -1 }
              onChange={this.aracClick.bind(this, arac)}
              label={<><b>{ arac.plaka }</b> { arac.marka } { arac.model } ({ arac.model_yili })</>}
              />
          </li>)}
        </ul>;
    }
}
