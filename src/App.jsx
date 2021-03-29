import styled from 'styled-components';
import Home from 'pages/Home';
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
        <Home />
      </header>
    </div>
  );
}

export default App;
