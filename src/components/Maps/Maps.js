import React from 'react';
import './Maps.scss';
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

const Maps = (props) => {
    const stamenTonerTiles ='http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
    const stamenTonerAttr ='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    let mapCenter = [props.path.location.latitude, props.path.location.longitude];
    let position = [props.path.location.latitude, props.path.location.longitude];
    const zoomLevel = 8;
    console.log(props.path)
    return (
        <div className='Maps'>
                {/* <Link className='return-home' to="/">
                    <button>
                        <i className="fas fa-arrow-circle-left"></i>
                    </button>
                </Link> */}
            <section className='map-container'>
                <div className='map-header'>
                    <h2>{props.path.name}</h2>
                </div>
            <Map center={mapCenter}
                 zoom={zoomLevel}>
                <TileLayer attribution={stamenTonerAttr}
                           url={stamenTonerTiles}/> 
                <Marker position={position}>
                    <Popup className='pop'>
                        <b>{props.path.name}</b> 
                        <br /> Location: {props.path.location.city}
                        <br /> Latitude: {props.path.location.latitude}
                        <br /> Longitude: {props.path.location.longitude}
                        {/* <br /> Website: <a href='https://denver.bcycle.com/' blank='target'>{props.path.name}</a> */}
                    </Popup>
                </Marker>
            </Map>
            </section>
        </div>
    )
}

export default Maps;