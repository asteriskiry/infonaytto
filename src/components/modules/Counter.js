import React from 'react'

/**
 * Laskuri, joka laskee kuinka monta päivää on jäljellä tapahtumaan X
 * 
 * @param {Object} event - Tapahtuma, johon lasketaan päiviä
 * @param {string} event.name - Tapahtuman nimi
 * @param {Date} event.date - Tapahtuman päivämäärä
 */
const Counter = ({ event }) => {
  const oneDay = 1000 * 60 * 60 * 24 // millisekunnit * sekunnit * minuutit * tunnit

  const targetDate = event.date
  const currentDate = Date.now()


  return (
    <div>Päiviä jäljellä {event.name}: {Math.round(Math.abs((targetDate - currentDate) / oneDay))}</div>
  )
}

export default Counter
