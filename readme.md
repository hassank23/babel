# Babel Website

This repository contains two projects: a Laravel backend with the name `babel-website` and a React frontend with the name `my-app`.

## Prerequisites

Before running the projects, make sure you have the following installed on your system:

- PHP >= 7.3
- Composer
- Node.js
- npm

## Running the Laravel Backend

To run the Laravel backend, follow these steps:

1. Navigate to the `babel-website` directory.
2. Install the dependencies by running `composer install`.
3. Copy the `.env.example` file to `.env` and update the environment variables as needed.
4. Generate an application key by running `php artisan key:generate`.
5. configure database
6. Run the database migrations by running `php artisan migrate`.
7. Start the development server by running `php artisan serve`.

The Laravel backend should now be running on <http://localhost:8000>.

## Running the React Frontend

To run the React frontend, follow these steps:

1. Navigate to the `my-app` directory.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `npm start`.

The React frontend should now be running on <http://localhost:3000>.
