import * as React from 'react';
import {
    Create,
    Edit,
    Datagrid,
    TextField,
    FunctionField,
    BooleanField,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
    List,
    SimpleForm,
    TextInput,
} from 'react-admin';
import DeviceServicesButton from '../ui/DeviceServicesButton';
import DeviceConnectButton from '../ui/DeviceConnectButton';

const DeviceTitle = ({ record }) => {
    return <span>Device {record ? `"${record.name}"` : ''}</span>;
};

const OnlineField = (props) => {
    return (
        <FunctionField {...props} render={(record, source) =>
            <BooleanField source="enabled" record={{ ...record, enabled: (record[source] === 'online') }} />}
        />
    );
};

export const DeviceList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <FunctionField label="UUID" render={record => record['uuid'].substring(0,7)}/>
                <TextField label="Name" source="device name" />
                <OnlineField label="Online" source="api heartbeat state" />
                <TextField label="Status" source="status" />
                <FunctionField label="OS" render={record => `${record['os version']}-${record['os variant']}`}/>
                <ReferenceManyField label="Fleet" source="belongs to-application" reference="application" target="id">
                    <SingleFieldList>
                        <ChipField source="app name" />
                    </SingleFieldList>
                </ReferenceManyField>
                <ReferenceManyField label="Release Rev." source="is running-release" reference="release" target="id">
                    <SingleFieldList>
                        <ChipField source="revision" />
                    </SingleFieldList>
                </ReferenceManyField>
                <ReferenceManyField label="Device Type" source="is of-device type" reference="device type" target="id">
                    <SingleFieldList>
                        <ChipField source="slug" />
                    </SingleFieldList>
                </ReferenceManyField>
                <DeviceServicesButton/>
                <DeviceConnectButton/>
            </Datagrid>
        </List>
    )
};

export const DeviceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="uuid" />
            <TextInput source="device name" />
        </SimpleForm>
    </Create>
);

export const DeviceEdit = props => (
    <Edit title={<DeviceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="uuid" />
            <TextInput source="device name" />
        </SimpleForm>
    </Edit>
);

const device = {
    list: DeviceList,
    create: DeviceCreate,
    edit: DeviceEdit
}

export default device;