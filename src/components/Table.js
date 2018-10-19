import React from 'react'
import Moment from 'react-moment';
import "./styles/Table.scss"

const Table = props => {
    const date = new Date();
    let format0 = "ddd"

    return (
        <div class="table">
            <div className="header row">
                <div className="data"></div>
                <div className="data">Current</div>
                {
                    Array.from(Array(7).keys()).map(i =>
                        <div className="data">
                            <div className="day-of-week">
                                <Moment add={{ days: i }} format={format0}>{date}</Moment>
                            </div>
                        </div>
                    )
                }
            </div>
            {props.children}
        </div>
    )
}

export default Table