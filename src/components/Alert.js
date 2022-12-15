import React from 'react'

function Alert(props) {
    let capitalize =(word)=>{
        let temp= word.toLowerCase();
        return  temp.charAt(0).toUpperCase() + temp.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        <strong>{capitalize(props.alert.tp)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" 
        aria-label="Close"></button>
    </div>
  )
}

export default Alert
