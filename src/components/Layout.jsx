import {NavMenu} from "./NavMenu";
import {Outlet} from "react-router-dom";
import {Layout as LayoutAntd, theme} from "antd";

const {Content, Header} = LayoutAntd;

const Layout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return (
        <LayoutAntd style={{background: colorBgContainer}}>
            <Header style={{background: colorBgContainer, padding: 0}}>
                <NavMenu/>
            </Header>
            <Content style={{padding: '10px 50px'}}>
                <Outlet/>
            </Content>
        </LayoutAntd>
    )
}

export {Layout}