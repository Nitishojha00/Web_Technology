const element1 = React.createElement(
    'h1',
    { style: { backgroundColor: 'red', color: 'white' } },
    'Hello from Mini React!'
);

const element2 = React.createElement(
    'h2',
    { style: { backgroundColor: 'blue', color: 'white'} },
    'Jalwa Hai Bhaia'
);

const element = React.createElement(
    'div',
    { style: { backgroundColor: 'green', margin: 0, padding: 0, width:'100%'
  } },
    [element1,element2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
