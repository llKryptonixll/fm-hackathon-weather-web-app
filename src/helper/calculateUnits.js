export function celsiusToFahrenheit(rawTemp, targetUnit) {
  if (targetUnit === 'Fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  } else {
    return Math.round(rawTemp)
  }
}

export function kmhToMph(rawSpeed, targetUnit) {
  if (targetUnit === 'mph') {
    return Math.round(rawSpeed * 0.621371)
  } else {
    return Math.round(rawSpeed)
  }
}

export function mmToIn(rawPrecipitation, targetUnit) {
  if (targetUnit === 'in') {
    return Math.round(rawPrecipitation / 25.4)
  } else {
    return rawPrecipitation
  }
}
