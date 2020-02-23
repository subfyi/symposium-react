import React, { Component } from 'react';
import { Badge, Card, FormGroup, Input, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import { tokenized } from '../api';
import  axios from 'axios';

import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import { Marker } from "react-google-maps";
import Map from "./Map";

export default class AddressSelect extends Component {
  constructor(props) {
    super(props);
    
    this.searchBox = React.createRef();
    this.input = React.createRef();
  }

  componentDidUpdate(prevProps) {
      if(prevProps.value && !this.props.value) {
        this.input.current.value = '';
      }
  }

  onPlacesChanged() {
    var places = this.searchBox.current.getPlaces();
    var place = places[0];

    if(place) {
        this.props.onChange({
            formatted_address: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
    } else {
        this.props.onChange(null);
    }
  }

  render() {
    return <div>
        <StandaloneSearchBox
            ref={this.searchBox}
            onPlacesChanged={this.onPlacesChanged.bind(this)}
        >
            <Input type="text" placeholder="Adres secin..."
                innerRef={this.input}
                value={(this.props.value && this.props.value.formatted_address) || undefined}
                onChange={a => this.props.value && this.props.onChange(null)}
                onBlur={a => !this.props.value && (this.input.current.value = '')}
            />
        </StandaloneSearchBox>
        
        <div className="mt-2">
            {this.props.value && <Map
            >
                <Marker position={{ lat: this.props.value.lat, lng: this.props.value.lng }} />
            </Map>}
        </div>
    </div>;
  }
}
