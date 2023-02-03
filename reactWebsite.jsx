import React from 'react';
import ReactDOM from 'react-dom';

function MyWebsite() {
  return (
    <div>
      <h1>Welcome to My Cool Website!</h1>
      <p>This website is built with React and has a modern, minimalist design.</p>
    </div>
  );
}

ReactDOM.render(<MyWebsite />, document.getElementById('root'));