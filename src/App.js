import React from 'react';

import './App.css';
import json from './pages.json';

const Group = ({name, path, projects}) => (
  <div>
    <h1>{name}</h1>
    {projects.map((project, index) => (
      <Project key={index} currentPath={path} {...project} />
    ))}
  </div>
)

const Project = ({name, currentPath, path, description, picture, pages}) => (
  <div>
    <h2>{name}</h2>
    <img src={picture} width="200px" />
    <p>{description}</p>
    <ul>
    {pages.map((page, index) => (
      <Page key={index} currentPath={currentPath +'/'+ path} {...page} />
    ))}
    </ul>
  </div>
)

const Page = ({name, currentPath, path}) => (
  <li>
    <a href={'pages/' + currentPath +'/'+ path + '/index.html'}>{name}</a>
  </li>
)

class App extends React.Component {
  render() {
    return (
        <div className="App">
          {json.map( (group, index) => (
            <Group key={index} {...group} />
          ))}
        </div>
    );
  }
}

export default App;
