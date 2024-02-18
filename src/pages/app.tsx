import React from 'react';

import TypeScriptBasics from '../Quiz1/typescript-basics';
import Person from '../Quiz1/person';
import Counter from '../Quiz1/counter';
import EventHandling from '../Quiz1/event-handling';
import OptionalMessage from '../Quiz1/optional-message';
import APITheme from '../Quiz1/API-theme';
import List from '../Quiz1/list';
import ReadOnlyCompt from '../Quiz1/readonly-props';
import UbicationInfo from '../Quiz1/ubication-info';
import Tuple from '../Quiz1/tuple';
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
