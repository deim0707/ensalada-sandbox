import {HistoryOutlined, ScheduleOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import {useLocation, NavLink} from "react-router-dom";
import {ROUTES} from "../constants/routes";

const items = [
    {
        label: <NavLink to={ROUTES.eventList}>Твои мероприятия</NavLink>,
        key: ROUTES.eventList,
        icon: <ScheduleOutlined/>,
    },
    {
        label: <NavLink to={ROUTES.registration}>Регистрация</NavLink>,
        key: ROUTES.registration,
        icon: <UnorderedListOutlined/>,
    },
    {
        label: <NavLink to={ROUTES.waitList}>Лист ожидания</NavLink>,
        key: ROUTES.waitList,
        icon: <HistoryOutlined/>,
    },
];
const Header = () => {
    let {pathname} = useLocation();
    const currentTab = pathname.slice(1);

    return <Menu selectedKeys={[currentTab]} mode="horizontal" items={items}/>;
};
export {Header};