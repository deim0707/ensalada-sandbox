import {HistoryOutlined, ScheduleOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import {NavLink, useLocation} from "react-router-dom";
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
const NavMenu = () => {
    let {pathname} = useLocation();
    const currentTab = pathname.slice(1);

    return <Menu selectedKeys={[currentTab]} mode="horizontal" items={items}/>;
};
export {NavMenu};