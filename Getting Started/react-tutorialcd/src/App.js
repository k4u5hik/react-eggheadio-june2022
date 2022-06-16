import './App.css';
import logo from './logo.svg';

const heading = <h1 className='site-heading'>Hello, React</h1>

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        {heading}
      </header>
    </div>
  );
}

export default App;
