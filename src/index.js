import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider, AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

// Init VK  Mini App
bridge.send('VKWebAppInit');

ReactDOM.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <AppRoot>
                <App />
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById('root')
);
/*
if (process.env.NODE_ENV === 'development') {
    import('./eruda').then(({ default: eruda }) => {}); //runtime download
}
*/