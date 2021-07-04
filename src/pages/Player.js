import React from 'react'
import Header from "../components/header/Header"
import"./player.css"
import { useButtonContext } from '../context/buttonLibraryContext'


const Player = () => {
  const {hiddenButtonState} = useButtonContext()
  return (
    <div className="section-container">
     <section className={`songs-selector ${hiddenButtonState ? "disabled-library" : "enabled-library"}`}>This is the songs section</section>
     <section className={`audio-player ${hiddenButtonState ? "disabled-library" : "enabled-library"}`}><Header/></section>
    </div>
  )
}

export default Player
