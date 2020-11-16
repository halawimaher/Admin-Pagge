import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const ProjectsList = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="projectName" />
      <TextField source="link" />
      <TextField source="description" />
      <EditButton basePath="/projects" />
      <DeleteButton basePath="/projects" />
    </Datagrid>
  </List>
}

export default ProjectsList
