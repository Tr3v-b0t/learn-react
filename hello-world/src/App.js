import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Counter from './components/Counter';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
    <NameList />
   {/* <UserGreeting />
  {/*<ParentComponent />
    <Eventbind />*/}
    {/*<Greet name="Jsx" />
      <Greet name="chidrenprops">
     <p> this is the children prop being rendered </p>
     </Greet>
     <Message />
     <Counter />
     <Greet name="components" />
     <Greet name="state" />
      <Welcome name="props" />
       <Hello /> */}
    </div>
  );
}

export default App;
