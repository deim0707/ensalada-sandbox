import {ConfigProvider} from 'antd';
import {Route, Routes} from "react-router-dom";
import {ListEvents} from "./pages/ListOfEvents";
import {ROUTES} from "./constants/routes";
import {Registration} from "./pages/Registration";
import {WaitList} from "./pages/WaitList";
import {Layout} from "./components/Layout";
import {theme} from "./constants/themeConfig";


const App = () => (
    <ConfigProvider theme={theme}>
        <Routes>
            <Route path={ROUTES.root} element={<Layout/>}>
                <Route path={ROUTES.eventList} element={<ListEvents/>}/>
                <Route path={ROUTES.registration} element={<Registration/>}/>
                <Route path={ROUTES.waitList} element={<WaitList/>}/>
            </Route>
        </Routes>
    </ConfigProvider>
)


export {App}