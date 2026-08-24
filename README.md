# ⏱ Digital Clock & Stopwatch

A simple, dependency-free web app built with vanilla **HTML, CSS, and JavaScript** as a
hands-on assignment to practice core JS concepts — the DOM, `Date` objects, timers, and
event handling.

## Features

- **Live Digital Clock** — displays the current time in `HH:MM:SS` format, updating every second.
- **Stopwatch** — millisecond-precision stopwatch (`HH:MM:SS:MS`) with:
  - **Start** — begins/resumes timing
  - **Stop** — pauses timing and logs the elapsed time to history
  - **Reset** — clears the stopwatch and history back to zero
- **History Log** — every time you stop the stopwatch, the recorded time is added to a
  running list so you can compare multiple laps/attempts.
- Clean, responsive dark-themed UI that adapts to smaller screens.

## Tech Stack

- HTML5
- CSS3 (Flexbox, gradients, media queries)
- Vanilla JavaScript (no frameworks or libraries)

## How It Works

- `updateClock()` uses `Date.getHours()`, `getMinutes()`, and `getSeconds()` with
  `setInterval()` to refresh the digital clock display every second.
- The stopwatch tracks elapsed time using `Date.now()` timestamps rather than a naive
  counter, so it stays accurate even if the browser throttles the interval.
- `displayTime()` formats the elapsed milliseconds into hours, minutes, seconds, and
  milliseconds using `Math.floor()` and `padStart()`.
- `saveHistory()` appends each completed stopwatch run as a list item to the on-screen history.

## Getting Started

No build steps or dependencies — just open it in a browser.

1. Clone the repo:
   ```bash
   git clone https://github.com/gosangariJoshitha/Digital-clock-.git
   ```
2. Open `index.html` in any modern browser.

## Project Structure

```
Digital-clock-/
├── index.html    # Markup for the clock, stopwatch, and history panel
├── script.js     # Clock and stopwatch logic
├── styles.css    # Styling and layout
└── README.md
```

## Learning Focus

This project was built to practice:

- Manipulating the DOM with `document.getElementById()`
- Working with JavaScript's `Date` object and timestamps
- Using `setInterval()` / `clearInterval()` for real-time updates
- Basic event handling via `onclick`
- String formatting with `padStart()`
