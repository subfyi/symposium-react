import React from 'react';
import DualListBox from 'react-dual-listbox';
import { hatagoster, tokenized } from '../api';

export default class MultiKurumSelect extends React.Component {
    state = {};
    
    async componentDidMount() {
      var kurumlar = await tokenized.get('/api/kurumlar', { params: { itemPerPage: -1 }});

      this.setState({
        kurumlar: kurumlar.data.data.map(a => ({ value: a.id, label: a.ad }))
      });
    }
 
    onChange = (selected) => {
        this.props.onChange(selected);
    };
 
    render() {
        if(!this.state.kurumlar)
          return null;

          console.log(this.props.selected);

        return (
            <DualListBox
                canFilter 
                options={this.state.kurumlar}
                selected={this.props.selected}
                onChange={this.onChange}
            />
        );
    }
}
