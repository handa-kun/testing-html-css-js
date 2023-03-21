import './App.css';
import { Advantages, Button, Display, Footer, Logo, NavBar, Review } from './components';



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
      <Footer>
        <Review />
        <Advantages />
      </Footer>
    </div>
  );
}

export default App;
