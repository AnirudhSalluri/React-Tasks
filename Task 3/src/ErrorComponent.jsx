import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorComponent = ({error,resetErrorBoundary}) => {
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  )
}

export default ErrorComponent