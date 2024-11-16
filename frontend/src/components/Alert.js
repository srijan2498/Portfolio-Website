import React, { useEffect } from 'react'

const Alert = ({ alertState }) => {
    useEffect(() => { }, [alertState.message])
  return (
      <div className={`alert_container ${alertState.success == true ?"success":"failure"}`}>
        {alertState.message}
    </div>
  )
}

export default Alert
