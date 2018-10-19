import React from 'react'
import Moment from 'react-moment';
import "./styles/Table.scss"

const Table = props => {
    const date = new Date();
    let format0 = "dddd"
    let format1 = "MM/DD/YY"

    return (
        <table>
            <tbody>
            <tr className="table-header">
                <td></td>
                <td>Current Conditions</td>
                {
                    Array.from(Array(7).keys()).map(i =>
                        <td>
                            <div className="day-of-week">
                                <Moment add={{ days: i }} format={format0}>{date}</Moment>
                            </div>
                            <div className="date">
                                <Moment add={{ days: i }} format={format1}>{date}</Moment>
                            </div>
                        </td>
                    )
                }
            </tr>

            {props.children}
            </tbody>
        </table>
    )
}

export default Table