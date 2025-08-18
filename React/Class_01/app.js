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


// Example usage:
const element = React.createElement(
    'h1',
    { style: { backgroundColor: 'red', color: 'white' } },
    'inner html'
);

const root = document.getElementById('root');
root.append(element);


