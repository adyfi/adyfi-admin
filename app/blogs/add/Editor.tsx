import React from 'react';
import { useState } from 'react';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <h1>My Editor</h1>
      {/* <EditorJS content={content} onChange={(newContent) => setContent(newContent)} /> */}
    </div>
  );
};

export default App;