import React, { useState } from 'react';
import Timeline from 'react-visjs-timeline'

function App() {

   var codigo = 'Okparça';
  const items = [
    {id: 1, content: `${codigo}`, start: '2015-05-11', editable: false,},
    {id: 2, content: 'editable item', start: '2016-05-14'}
]

const customTimes = {
  one: new Date(),
  two: 'Tue May 10 2016 16:17:44 GMT+1000 (AEST)'
}

var options = {
  hiddenDates: [
    { start: "2014-03-21 00:00:00", end: "2014-03-28 00:00:00" },
    {
      start: "2013-10-26 00:00:00",
      end: "2013-10-28 00:00:00",
      repeat: "weekly",
    }, // daily weekly monthly yearly
    {
      start: "2013-03-29 20:00:00",
      end: "2013-03-30 09:00:00",
      repeat: "daily",
    }, // daily weekly monthly yearly
  ],
  editable: true,
  width: '80%',
  height: '200px',
  locale: 'it',
  editable: {
    add: false,         // add new items by double tapping
    updateTime: false,  // drag items horizontally
    updateGroup: false, // drag items from one group to another
    remove: false,       // delete an item by tapping the delete button top right
    overrideItems: false  // allow these options to override item.editable
  }
 
}

  return (
    <>
      <Timeline
        options={options}
        items={items}
      />
    </>
  );
}

export default App;
