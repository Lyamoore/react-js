import { AppBar, Tabs, Tab }from '@material-ui/core';

export const Tabss = () => {
    return (
        <AppBar position="static">
            <Tabs>
                <Tab label="Main" />
                <Tab label="Chats" />
                <Tab label="Profile" />
            </Tabs>
        </AppBar>
    )
}