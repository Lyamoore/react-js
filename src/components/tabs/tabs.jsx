import { AppBar, Tabs as MaterialTabs, Tab } from '@material-ui/core';

import './tabs.css';

export const Tabs = () => {

    return (
        <AppBar 
        position="static"
        className="Tabs"
        >
            <Tabs>
                <Tab 
                label="Main" 
                />
                <Tab 
                label="Chats" 
                />
                <Tab 
                label="Profile" 
                />
            </Tabs>
        </AppBar>
    )
}