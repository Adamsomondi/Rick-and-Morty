import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Material user inteface 
// Import Roboto fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// MUI Imports
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#199999', // Customizable primary color
    },
    // Additional theme customizations
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
      {/* CssBaseline normalizes styles across browsers */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
