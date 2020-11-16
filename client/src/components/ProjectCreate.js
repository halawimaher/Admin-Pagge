import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ProjectCreate = (props) => {
  return (
    <Create title="Create a new Project" {...props}>
      <SimpleForm>
        <TextInput source="projectName" />
        <TextInput source="link" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Create>
  )
}

export default ProjectCreate
