import React from 'react';
import reactDom from 'react-dom';

function SomeBasicFunction()
{
  return(
    <div>
      <Message/>
    </div>
  );
}

const Message = () => {
  return (<h1>Just done my first component</h1>);
}

reactDom.render(<SomeBasicFunction/>, document.getElementById('root'))