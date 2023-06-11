import * as React from 'react';
import {Header} from "./components/Header";
import {ListEvents} from "./pages/ListOfEvents";
import {Outlet, Route, Routes} from "react-router-dom";
import {ROUTES} from "./constants/routes";
import {Registration} from "./pages/Registration";
import {WaitList} from "./pages/WaitList";

const Layout = () => {
    return (
        <>
         <Header/>
            <Outlet/>
        </>
    )
}

const App = () => (
    <Routes>
        <Route path={ROUTES.root} element={<Layout />}>
            <Route path={ROUTES.eventList} element={<ListEvents />} />
            <Route path={ROUTES.registration} element={<Registration />} />
            <Route path={ROUTES.waitList} element={<WaitList />} />
        </Route>
    </Routes>
)


export {App}