import React from 'react'
import { useSelector } from 'react-redux'

const Loaded = () => {
  const isLoaded = useSelector((store) => store.getUsersList.isLoaded)

  return (
    !isLoaded && (
      <div className="spinner">
        <div className="blob top" />
        <div className="blob bottom" />
        <div className="blob left" />
        <div className="blob move-blob" />
      </div>
    )
  )
}

export default Loaded
