# 🌍 WorldWise

## Live Demo

Check out the live app: [WorldWise](https://13reath.github.io/WorldWise/)

## Screenshots

### Main Page

![Main Page](main-page.png)

### App Page

![App Page](app-page.png)

## Technologies Used

- React
- Vite
- React Router v6
- React Leaflet & Leaflet
- CSS Modules
- GitHub Pages (for deployment)

## Deployment

1. Make sure your `vite.config.js` includes the correct base path:

   ```js
   export default defineConfig({
     base: "/WorldWise/",
     ...
   });
   ```

2. Deploy the project using:
   ```bash
   npm run deploy
   ```

---

## Overview

WorldWise is a responsive web app for travelers to log and visualize the cities they've visited on a world map. It features protected routes, context-based state management, and dynamic routing for city and country information.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

## Features

- Add and manage visited cities
- View details about cities and countries
- Interactive world map using Leaflet
- Authentication with protected routes
- Responsive design for desktop and mobile
- Clean and intuitive UI

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/13reath/WorldWise.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WorldWise
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Sign in using the provided login interface
- Navigate through the app using the sidebar
- Add cities by clicking on the map and filling out the form
- View city and country details
- Log out when done

## Project Structure

```
WorldWise/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components like Map, CityList, etc.
│   ├── contexts/         # Context providers (e.g., Auth, Cities)
│   ├── pages/            # Route pages (Homepage, AppLayout, etc.)
│   ├── styles/           # CSS modules
│   ├── App.jsx           # Main app with routing logic
│   └── main.jsx          # App entry point
├── vite.config.js        # Vite configuration with base path
├── package.json
└── README.md
```

## Development Process

- Initialized project with Vite + React
- Set up routing with React Router
- Implemented Leaflet map integration
- Created context providers for authentication and city data
- Styled components using CSS Modules
- Deployed to GitHub Pages

## Challenges and Solutions

### Routing and GitHub Pages

**Problem**: GitHub Pages requires routing to work under a base path.  
**Solution**: Added `base: "/WorldWise/"` in `vite.config.js`.

### Map Integration

**Problem**: Managing map interactivity and data overlay.  
**Solution**: Used `react-leaflet` for easier integration and state synchronization.

### Protected Routes

**Problem**: Restricting access to parts of the app unless authenticated.  
**Solution**: Created a `ProtectedRoute` wrapper that checks authentication context.

## Future Improvements

- Add real authentication and user profiles
- Store data in a remote database
- Enable image uploads for cities
- Implement search and filters for logged cities
- Add support for dark/light theme toggle

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request
