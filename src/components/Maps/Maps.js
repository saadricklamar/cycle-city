import React from 'react';
import './Maps.scss';
import { Link, Redirect } from "react-router-dom";
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

const Maps = (props) => {
    const stamenTonerTiles ='http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
    const stamenTonerAttr ='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    let mapCenter = [props.path.location.latitude, props.path.location.longitude];
    let position = [props.path.location.latitude, props.path.location.longitude];
    const zoomLevel = 8;
    return (
        <div className='Maps'>
                <Link to="/">
                    <button className='go-home'>
                        <i onClick={props.redirect()} className="fas fa-arrow-circle-left"></i>
                    </button>
                </Link>
            <section className='map-container'>
                <div className='map-header'>
                    <h2>{props.path.name}</h2>
                    <i title='Favorite this Bike Path' className="fas fa-bicycle"></i>
                </div>
            <Map center={mapCenter}
                 zoom={zoomLevel}>
                <TileLayer attribution={stamenTonerAttr}
                           url={stamenTonerTiles}/> 
                <Marker position={position}>
                    <Popup className='pop-up'>
                        <h6>{props.path.name}</h6>
                        <hr></hr>
                        <p className='info'>Location: {props.path.location.city}</p>
                        <br/>
                        <p className='info'>Latitude: {props.path.location.latitude}</p>
                        <br/>
                        <p className='info'> Longitude: {props.path.location.longitude}</p>
                        <br/>
                        <p className='info'>Website: <a className='website' href='https://denver.bcycle.com/' target='_blank'>{props.path.name}</a></p>
                    </Popup>
                </Marker>
            </Map>
            </section>
        </div>
    )
}

export default Maps;