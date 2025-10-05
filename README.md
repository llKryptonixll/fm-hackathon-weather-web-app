# Frontend Mentor - Weather app solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Weather Now Preview](/project-preview.png)

### Links

- Solution URL: [Github Code](https://github.com/llKryptonixll/fm-hackathon-weather-web-app)
- Live Site URL: [Preview](https://fm-weather-now.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [React](https://reactjs.org/) - JS library

### What I learned

In this project, I learned to structure React code more effectively. Previously, I would often write the main logic directly in App.jsx because my projects were small and didn’t require contexts, custom hooks. This project taught me how to break the application into smaller, reusable components, use custom hooks when appropriate, and keep the main App.jsx file clean and focused on composition rather than logic.

I also learned more about handling errors properly instead of just logging them to the console. While I implemented basic error handling in this project, I realized there are more structured ways to manage errors, such as showing user-friendly messages, using error boundaries, or integrating with centralized error logging services. This is an area I want to improve on in future projects to make my applications more robust and user-friendly.

## Author

- Website - [Lucas Cerri](https://cerri-webdev.com/)
- Frontend Mentor - [@llKryptonixll](https://www.frontendmentor.io/profile/llKryptonixll)
