const React = {
    createElement: function(tag, props, children) {
        const element = document.createElement(tag);

      // If style exists in props, apply it
        if (props && props.style) {
            for (let key in props.style) {
                element.style[key] = props.style[key];
            }
        }


        // Set inner text
        element.innerText = children;

        return element;
    }
};

const ReactDOM = {
    render: function(element, root) {
        root.appendChild(element);
    }
};

// Example usage:
const element = React.createElement(
    'h1',
    { style: { backgroundColor: 'red', color: 'white', padding: '10px' } },
    'Hello from Mini React!'
);

// Select using class

// Render it -> ye inbuild milega bs abhi samjhlo
//const root = document.getElementById('root');

//ReactDOM.render(element, root);
//or 
ReactDOM.render(element, document.getElementById('root')); 
