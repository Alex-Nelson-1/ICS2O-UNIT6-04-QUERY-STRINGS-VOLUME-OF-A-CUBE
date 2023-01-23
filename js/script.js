// Created by: Alex Nelson
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT6-04-QUERY-STRINGS-VOLUME-OF-A-CUBE/sw.js", {
    scope: "/ICS2O-UNIT6-04-QUERY-STRINGS-VOLUME-OF-A-CUBE/",
  })
}



/**
 * This function displays an alert.
 */
window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const length = params.get("l")
  console.log(length)

  // process
  const volume = (length ** 3)


  // output
  document.getElementById("dimension").innerHTML = "side length = " + length
  document.getElementById("output").innerHTML = "Volume: " + volume + " cm³"
}