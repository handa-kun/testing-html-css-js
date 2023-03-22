import './App.css';
import { Button, Display, Footer, Logo, NavBar } from './components';



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
      <Footer />
    </div>
  );
}

export default App;
