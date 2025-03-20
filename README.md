# GlobeView App

An interactive 3D globe visualization using react-globe.gl.

## Features

- Interactive 3D globe with country data
- Toggle atmosphere visibility
- Toggle grid lines (graticules)
- Control auto-rotation speed
- Change Earth texture (Blue Marble, Dark, Night)
- Add random data points

## Quick Start

### Online Demo

You can view this project without installation by using CodeSandbox:

1. Go to [https://codesandbox.io/](https://codesandbox.io/) 
2. Create a new sandbox
3. Set it up as a GitHub repository import
4. Enter this repository URL: `https://github.com/docnaught/GlobeviewApp`

### Local Development

If you want to run this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/docnaught/GlobeviewApp.git
   ```

2. Change to the project directory:
   ```
   cd GlobeviewApp
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

You can customize the globe by:

- Modifying the default configuration in `src/App.js`
- Extending the control panel in `src/components/ControlPanel.js`
- Adding additional visualization layers in `src/components/GlobeComponent.js`

## Learn More

To learn more about react-globe.gl, check out their [GitHub repository](https://github.com/vasturiano/react-globe.gl).