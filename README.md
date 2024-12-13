# Country Info App - Frontend

## Overview

The frontend for the Country Info App is a responsive, user-friendly application built using **React** with **Next.js** framework. It fetches data from the backend to display country information.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/diogofernandoj/country-info-app-frontend.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Add the following configuration:

     ```env
     NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. The frontend will be available at:

   ```
   http://localhost:3000
   ```

---

## Features

### 1. Country List Page

- Displays a list of countries.
- Each country name is clickable and navigates to the country info page.

### 2. Country Info Page

- Displays detailed information about the selected country, including:
  - **Country Name**
  - **Country Flag**
  - **Border Countries Widget** (Clickable names to navigate to other countries)
  - **Population Chart** (Displays population data over time)

---

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the built application.

---

## Notes

Ensure the backend is running on port 4000 and the `NEXT_PUBLIC_API_BASE_URL` is correctly set in `.env` for proper functionality.

---

## Troubleshooting

- **Backend is not reachable:** Verify that the backend is running on `http://localhost:4000`.
- **Environment variable issues:** Ensure the `.env.local` file is correctly configured.

---

## Documentation Links

- **Backend API Documentation:** [Nager.Date API Documentation](https://date.nager.at/swagger/index.html)
- **Population and Flag API Documentation:** [Postman API Documentation](https://documenter.getpostman.com/view/1134062/T1LJjU52)
