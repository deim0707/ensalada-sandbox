import {List} from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const ListEvents = () => (
    <>
        <h2>Мероприятия на которые ты зарегистрирован</h2>
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