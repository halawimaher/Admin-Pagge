import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import ProjectsList from './components/Projectist'
import ProjectCreate from './components/ProjectCreate'
import ProjectEdit from './components/ProjectEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='experience' list={PostList} create={PostCreate} edit={PostEdit} />
      <Resource name='projects' list={ProjectsList} create={ProjectCreate} edit={ProjectEdit} />
    </Admin>
  );
}

export default App;
