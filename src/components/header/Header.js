import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { useButtonContext } from '../../context/buttonLibraryContext'

import "./header.css"

const Header = () => {

  const {changeButtonState} = useButtonContext()

  console.log(changeButtonState)
  return (
    <header className="header">
        <h1>Chillhop sounds</h1>
        <button onClick={changeButtonState}>Library <FontAwesomeIcon icon={faMusic}/></button>
      </header>
  )
}

export default Header
