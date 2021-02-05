import React from "react"

const Alert  =({alert})=>{

    return (
            alert !== null && (
            <div className = {`bg-danger text-light m-3  ${alert.type}`}>
                    <i className = "fa fa-info-circle p-3"></i>{alert.msg}
            </div>
            )
        )

}
export default Alert