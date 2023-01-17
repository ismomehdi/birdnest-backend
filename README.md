# Project Birdnest – Backend
This is a [pre-assignment](https://assignments.reaktor.com/birdnest/) for a Reaktor Developer Trainee application. This project is licensed under MIT License.

Take a look at the app [here](https://spring-moon-3266.fly.dev/).

## App Logic

- The index sets a 2 second interval to repeatedly call `updateDatabase`.
- Then `updateDatabase` calls `scrapeAndParse` which pulls the drone/pilot data from the API and returns the processed data to `updateDatabase`.

![Backend Diagram 0](/doc/backend-diagram-0.svg)

- Next `updateDatabase`

![Backend Diagram 0](/doc/backend-diagram-1.svg)
