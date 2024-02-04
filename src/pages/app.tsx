import React from 'react';

import TypeScriptBasics from '../Quiz1/Exercise1';
import Person from '../Quiz1/Exercise2';
import Counter from '../Quiz1/Exercise3';
import EventHandling from '../Quiz1/Exercise4';
import OptionalMessage from '../Quiz1/Exercise5';
import APITheme from '../Quiz1/Exercise6';
import List from '../Quiz1/Exercise7';
import ReadOnlyCompt from '../Quiz1/Exercise8';
import UbicationInfo from '../Quiz1/Exercise9';
import Tuple from '../Quiz1/Exercise10';
import AppBar from '../Quiz2/theme/appBar';
import Components from '../Quiz2/theme/components';

function App() {
  const typeScriptBasic = [
    'Functions',
    'Classes',
    'Types',
    'Interfaces',
    'Modules'
  ];

  const stringArray = ['Name', 'Age', 'Adress'];


  return (
    <div className='App'>
      <AppBar/>
      <Components name='Paula' age='23'/>
      <TypeScriptBasics basics={typeScriptBasic}/>
      <Person name='Paula ' lastname='Gutierrez ' age={23} hobbies={[' Play volleyball, ', ' listen to music, ', 'travel']}/>
      <Counter/>
      <EventHandling/>
      <OptionalMessage message='This is an optional message'/>
      <APITheme/>
      <List items={stringArray} renderItem={(item) => <span>{item}</span>} />
      <ReadOnlyCompt name={['Paula ','Gutierrez']}/>
      <UbicationInfo ubication={234}/>
      <Tuple/>
    </div>
  );
};

export default App;
