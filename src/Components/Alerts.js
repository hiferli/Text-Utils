import React from 'react'
import capitalize from 'C:/Users/Dell/Desktop/text-utils/src/index.js';

export default function Alerts(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}
