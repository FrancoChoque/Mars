import styled from 'styled-components';
import logo from './logo.svg';

import './App.css';

const Paragraph = styled.p`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
