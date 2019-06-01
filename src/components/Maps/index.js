import React, { Component } from 'react';
import { render } from 'react-dom';
import './Maps.css';
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

class Maps extends Component {
    constructor() {
        super() 
        this.state = {
            stamenTonerTiles: 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png',
            stamenTonerAttr: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            mapCenter: [39.72055, -104.95253],
            zoomLevel: 6
        }
    }


    render() {
        const position = [39.72055, -104.95253];
    return (
        <div className='Maps'>
            {/* <header>
                <Link className='return-home' to="/">
                    Return Home
                </Link>
            </header> */}
            <section>
            <Map center={this.state.mapCenter}
                 zoom={this.state.zoomLevel}>
                <TileLayer attribution={this.state.stamenTonerAttr}
                           url={this.state.stamenTonerTiles}/> 
                <Marker position={position}>
                    <Popup className='pop'>
                        <b>Denver B-cycle</b> 
                        <br /> Location: Denver, CO
                        <br /> Latitude: 39.7
                        <br /> Longitude: -104
                        <br /> Website: <a href='https://denver.bcycle.com/' blank='target'>Denver B-cycle</a>
                    </Popup>
                </Marker>
            </Map>
            </section>
        </div>
    )
    }
}

export default Maps;