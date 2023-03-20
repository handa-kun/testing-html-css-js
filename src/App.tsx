import './App.css';
import { Button, Logo, NavBar } from './components';


function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <Logo />
          <NavBar />
        </div>
        <Button appearance='button'>Button</Button>
      </header>
      <body>
        <div></div>
      </body>
    </div>
  );
}

export default App;
