import './App.css';
import { Button, Display, Logo, NavBar } from './components';


function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <Logo />
          <NavBar className='nav' />
        </div>
        <Button appearance='button'>Button</Button>
      </header>
      <Display />
    </div>
  );
}

export default App;
