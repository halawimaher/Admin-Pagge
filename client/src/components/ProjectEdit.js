import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ProjectEdit = (props) => {
  return (
    <Edit title="Edit a Project" {...props}>
      <SimpleForm>
        <TextInput source="projectName" />
        <TextInput source="link" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Edit>
  )
}

export default ProjectEdit
