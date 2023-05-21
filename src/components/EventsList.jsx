import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function EventsList() {
    const [dense, setDense] = React.useState(false);

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Demo>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemText
                                    primary="⭐️ 📖 книжный клуб"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="🎨 МК по мозаике (21.05 15:00)"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="🏄‍♀️ катание на сапах (14.05 11:00)"
                                />
                            </ListItem>
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}