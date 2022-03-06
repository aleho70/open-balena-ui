import * as React from "react";
import * as bcrypt from "bcryptjs";
import {
    Create,
    Edit,
    TextField,
    Datagrid,
    EmailField,
    ReferenceField,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
    List,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.username}"` : ''}</span>;
};

const hashPassword = value => {
    const saltRounds = 10;
    return bcrypt.hashSync(value, saltRounds);
};

const clearPassword = value => {
    return "";
};

export const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="username" />
                <EmailField source="email" />
                <ReferenceManyField label="Orgs" reference="organization membership" target="user">
                    <SingleFieldList>
                        <ReferenceField source="is member of-organization" reference="organization">
                            <ChipField source="name" />
                        </ReferenceField>
                    </SingleFieldList>
                </ReferenceManyField>
                <ReferenceManyField label="Roles" reference="user-has-role" target="user">
                    <SingleFieldList>
                        <ReferenceField source="role" reference="role">
                            <ChipField source="name" />
                        </ReferenceField>
                    </SingleFieldList>
                </ReferenceManyField>
                <ReferenceManyField label="Permissions" reference="user-has-permission" target="user">
                    <SingleFieldList>
                        <ReferenceField source="permission" reference="permission">
                            <ChipField source="name" />
                        </ReferenceField>
                    </SingleFieldList>
                </ReferenceManyField>
            </Datagrid>
        </List>
    )
};

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" parse={hashPassword} />
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" parse={hashPassword} format={clearPassword} />
            <TextInput disabled source="jwt secret" />
        </SimpleForm>
    </Edit>
);

export default {
    list: UserList,
    create: UserCreate,
    edit: UserEdit
}