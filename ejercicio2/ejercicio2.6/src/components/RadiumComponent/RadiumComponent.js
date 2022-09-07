import React from 'react';
import Radium from 'radium';


function RadiumComponent() {
  const radiumStyle = {
    base: {
      width: 'calc(100vw - 300px)',
      height: '70px',
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    primary: {
      background: 'blue'
    },
    secondary: {
      background: 'orange'
    },
    tertiary: {
      background: 'green'
    },
    h1: {
      margin: 0,
      color: 'white'
    },
    footer: {
      position: 'fixed',
      bottom: 0
    },
    bodyContent: {
      width: '100%',
      height: 'calc(100vh - 70px - 70px)'
    },
    bodyContentP: {
      width: '300px',
      height: '300px',
      margin: '0 .5rem',
      fontSize: '2rem',
      fontWeight: '700'
    }
  }

  return (
    <div>
      <header style={[radiumStyle.base, radiumStyle.primary, radiumStyle.header]}>
        <h1 style={radiumStyle.h1}>Radium</h1>
      </header>

      <div style={[radiumStyle.center, radiumStyle.bodyContent]}>
        <p style={[radiumStyle.bodyContentP, radiumStyle.tertiary, radiumStyle.center]}>Body Content 1</p>
        <p style={[radiumStyle.bodyContentP, radiumStyle.tertiary, radiumStyle.center]}>Body Content 2</p>
        <p style={[radiumStyle.bodyContentP, radiumStyle.tertiary, radiumStyle.center]}>Body Content 3</p>
      </div>

      <footer style={[radiumStyle.base, radiumStyle.footer, radiumStyle.secondary, radiumStyle.center]}>
        <h2>Footer</h2>
      </footer>
    </div>
  )
}

export default Radium(RadiumComponent);