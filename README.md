# Avayler Tech Test

This project was completed as part of a tech test required by Avayler. It was created mainly using `ReactJS / NextJS` and `Typescript`.

My approach was to create reusable components that are simple, scalable and easy to work with, making it easier to add more functionality if its needed in the future.

The app was developed with the following in mind:

- Responsiveness
- Accessibility
- Simplicity
- Scalability

## Styles

Styling was done using `Sass` pre-processor and `Modular CSS`.

## Tests

Tests were built using `Jest & React testing library`.

## Installation

Please follow the instructions to clone this project and install all the necessary dependencies.

1. Open a terminal and navigate to the folder in which you wish to save the project. Run the following command:

```
git clone https://github.com/Dpartipilo/launches-pairing.git
```

2. Navigate into the new created folder e.g: `cd launches-pairing` and run the following command:

```
yarn install | yarn
```

## Running the App

1. In order to run the App please run the command:

```
 yarn dev
```

2. It should open a tab in your browser with the following address:
   (if it doesn't open automatically please open a tab and copy it manually)

```
http://localhost:3000
```

3. To run tests please run the following command:

```
 yarn test
```

## Author

- [Diego Partipilo](https://github.com/Dpartipilo)

## Acknowledgments

Thank you for the opportunity to do this tech test, I really hope you can fine some value on it. Apologies for the delay I made the mistake of booking too many things in the same week.

## Further development

- Further unit tests on all components.
- Integration tests.
- API request tests.
- More accessibility features.
- Error handlers.

## To consider

- The API https://api.spacexdata.com/v3/ is not working properly (I am not sure if that was intentional) Solved it using v4 version of the API.
- Many properties required didn't exist in the new API, hopefully the ones I picked are the correct replacements.

# Task to be completed

We would like you to clone this repository and amend the home page to display a list of Cards with the launch data retrieved from the spacex data api. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v3/launches

Your solution should cover the following tasks:

- Make api request on page load
- Store response json into component state
- Display data top 10 items

The data that we would like you to display are:

- mission_name
- launch_date_utc
- from rocket object
  - list core_serial from the cores array in first_stage
  - payload_id and payload_type from payloads array in second_stage
- display the image from mission_patch_small in links
- use launch_success and launch_failure_details to show the user the success/failure of launch and reason of failure.

Note
flight_number as a unique property for each launch object.
