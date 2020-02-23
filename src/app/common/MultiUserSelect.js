import React from 'react';
import DualListBox from 'react-dual-listbox';
import { hatagoster, tokenized } from '../api';

const tipler = {
  50: "Uretim/Montaj",
  51: "Folyo Uygulama",
  52: "Kalite Kontrol Uzmani/Uretim",
  53: "Yardimci Eleman",
  55: "Elektrik Ustasi"
};

export default class MultiUserSelect extends React.Component {
    state = {};
    
    async componentDidMount() {
      var kullanicilar = await tokenized.get('/api/users', { params: { itemPerPage: -1 }});

      var gruplu = kullanicilar.data.kullanicilar
        .reduce((a, b) => (a[b.takipcisi] = ((a[b.takipcisi] && a[b.takipcisi].concat([b])) || [b])) && a, {});

      var users = Object.keys(gruplu).filter(a => this.props.showAll === true || tipler[a]).map(grup => ({
          label: tipler[grup] || "Diger",
          options: gruplu[grup]
            .map(a => ({ value: a.id, label: a.name }))
        }));

      this.setState({
        users
      });
    }
 
    onChange = (selected) => {
        this.props.onChange(selected);
    };
 
    render() {
        if(!this.state.users)
          return null;

        return (
            <DualListBox
                canFilter 
                options={this.state.users}
                selected={this.props.selected}
                onChange={this.onChange}
            />
        );
    }
}
