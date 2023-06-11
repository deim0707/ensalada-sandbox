import { Divider, List, Typography } from 'antd';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const ListEvents = () => (
    <>
        <Divider orientation="left">Мероприятия на которые ты зарегистрирован</Divider>
        <List
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    {item}
                </List.Item>
            )}
        />
    </>
);
export {ListEvents};