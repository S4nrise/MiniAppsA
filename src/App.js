import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

//Панели
import Home from './panels/Home/';
import GameList from './panels/GameList';
import Testview from './panels/TestView';
import Intro from './panels/Intro';
import Cyberpunk2077 from './panels/GameList/GameInfo'; 

const ROUTERS = {
	HOME: 'home',
	INTRO: 'intro',
}

const App = () => {
    const [activePanel, setActivePanel] = useState('intro');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(null);

    useEffect(() => {
        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }
        fetchData();
    }, []);

    const go = (e) => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    return (
        <View activePanel={activePanel} popout={popout}>
            <Home id="home" fetchedUser={fetchedUser} go={go} />
            <GameList id="gamelist" go={go} />
            <Testview id="testview" go={go} />
            <Intro id="intro" go={go} />
            <Cyberpunk2077 id="cyberpunk2077" go={go} />
        </View>
    );
};

export default App;
