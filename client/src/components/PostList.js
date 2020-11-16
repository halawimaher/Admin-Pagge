import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const PostList = (props) => {
  return <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="companyName" />
      <DateField source="from" />
      <DateField source="to" />
      <TextField source="description" />
      <EditButton basePath="/experience" />
      <DeleteButton basePath="/experience" />
    </Datagrid>
  </List>
}

export default PostList
