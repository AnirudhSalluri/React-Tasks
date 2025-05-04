import React from 'react'

const ErrorBoundaryCom = ({error,resetErrorBoundary}) => {
  return (
    <div>
    <div>Hi you entered a Error Component</div>
    <div>{error.message}</div>
    </div>
  )
}

export default ErrorBoundaryCom
