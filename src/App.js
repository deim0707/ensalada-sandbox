import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EventsList from "./components/EventsList";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
                    <Tab label="Твои события" {...a11yProps(0)} />
                    <Tab label="Регистрация" {...a11yProps(1)} />
                    <Tab label="Лист ожидания" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <TabPanel value={value} index={0}>
                    <EventsList/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Тут список и кнопки напротив. Наверное
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Чот про вайт лист
                </TabPanel>
            </Box>
        </Box>
    );
}