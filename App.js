import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('h1', {
    id: 'heading',
    style: {
        color: "red"
    }
}, "Namaste Ayush");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);