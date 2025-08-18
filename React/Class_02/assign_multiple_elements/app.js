const React = {
    createElement: function(tag, props, children) {
        const element = document.createElement(tag);

        // Apply styles if provided
        if (props && props.style) {
            for (let key in props.style) {
                element.style[key] = props.style[key];
            }
        }

        // Handle children
        if (Array.isArray(children)) {
            children.forEach(child => {
                if (typeof child === "string") {
                    element.appendChild(document.createTextNode(child));
                } else {
                    element.appendChild(child);
                }
            });
        } else if (typeof children === "string") {
            element.textContent = children;
        } else if (children instanceof Node) {
            element.appendChild(children);
        }

        return element;
    }
};

const ReactDOM = {
    render: function(element, root) {
        root.appendChild(element);
    }
};

// Example usage
const element1 = React.createElement(
    'h1',
    { style: { backgroundColor: 'red', color: 'white', padding: '10px' } },
    'Hello from Mini React!'
);

const element2 = React.createElement(
    'h2',
    { style: { backgroundColor: 'blue', color: 'white', padding: '10px' } },
    'Jalwa Hai Bhaia'
);

const div = React.createElement(
    'div',
    { style: { backgroundColor: 'yellow', padding: '5px' } },
    [element1, element2]
);

ReactDOM.render(div, document.getElementById('root'));
