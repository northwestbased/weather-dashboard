import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faTimes } from '@fortawesome/free-solid-svg-icons'

class TableRow extends Component {
    render() {
        let location = this.props.location
        if (Object.keys(location).length === 0 && location.constructor === Object) {
            return ""
        }
        return (
            <div className={this.props.className + " forecast row"}>
                <div className="rowControls data">
                    <div>
                        <button
                            className="up"
                            onClick={this.props.MoveUp}
                            title="Move Up"
                        >
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>

                        <button
                            onClick={this.props.Unpin}
                            className="unpin"
                            title="Remove Location"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <button
                            className="down"
                            onClick={this.props.MoveDown}
                            title="Move Down"
                        >
                            <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                    </div>
                </div>

                <div className="current-conditions data">
                    <div>
                        <div><img src={location.current.condition.icon} 
                        title={location.current.condition.text}
                        alt={location.current.condition.text} /></div>

                        <div>
                            <div>Current: {location.current.temp_f} °F</div>
                            <div className="location">{location.location.name}, {location.location.region}</div>
                        </div>
                    </div>
                </div>

                {location.forecast.forecastday.map(d => (
                    <div className="forecast-day data">
                        <img src={d.day.condition.icon} alt={d.day.condition.text} title={d.day.condition.text} />
                        <div> High: {d.day.maxtemp_f} °F</div>
                        <div> Low: {d.day.mintemp_f} °F</div>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default TableRow