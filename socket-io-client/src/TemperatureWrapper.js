import React from 'react';
import PropTypes from 'prop-types';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles.css';

const TemperatureWrapper = props => {
    return (
        <div className="box">
        <div className="wave -one"></div>
            <div className="wave -two"></div>
                <div className="wave -three"></div>
                    <div id="wethercon">
                        <i className="fas fa-sun-o" style={{color:'yellow'}}></i>
                    </div>
                    <div className="info">
                         <h2 className="location" ><i className="fas fa-street-view"></i> {props.city}
                         </h2> 
                         <p id="date"></p>  
                         <h1 className="temp">{props.temp}&deg;K</h1>
                         <h3 className="tempmin_max" >Min {props.min_temp}&deg;K | Max {props.max_temp}&deg;K
                         </h3>  
                    </div>
                </div>
    );
}

TemperatureWrapper.propTypes = {
    temp: PropTypes.number.isRequired
}

export default TemperatureWrapper;