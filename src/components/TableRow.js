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
            <tr className={this.props.className}>
                <td className="rowControls">
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
                </td>

                <td className="current-conditions">
                    <div>
                        <div><img src={location.current.condition.icon} 
                        title={location.current.condition.text}
                        alt={location.current.condition.text} /></div>

                        <div>
                            <div>Current: {location.current.temp_f} °F</div>
                            <div className="location">{location.location.name}, {location.location.region}</div>
                        </div>
                    </div>
                </td>

                {location.forecast.forecastday.map(d => (
                    <td className="forecast-day">
                        <img src={d.day.condition.icon} alt={d.day.condition.text} title={d.day.condition.text} />
                        <div> High: {d.day.maxtemp_f} °F</div>
                        <div> Low: {d.day.mintemp_f} °F</div>
                    </td>
                )
                )}
            </tr>
        )
    }
}

export default TableRow