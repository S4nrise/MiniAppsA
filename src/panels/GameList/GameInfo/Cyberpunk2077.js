import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, FormLayout } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {
    Panel,
    PanelHeader,
    PanelHeaderButton,
    Header,
    Group,
    Card,
    CardGrid,
    View,
    Search,
    ContentCard,
    Separator,
    Div,
    Text,
    PanelHeaderBack,
} from '@vkontakte/vkui';

import './Cyberpunk2077.css';

const osName = platform();

export const Cyberpunk2077 = (props) => (
    <Panel id={props.id}>
        <PanelHeader
            left={
                <PanelHeaderButton onClick={props.go} data-to="gamelist">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>
            }
            >
                Cyberpunk2077
        </PanelHeader>

        <Group>
        <ContentCard
              image="http://s01.riotpixels.net/data/c8/97/c897801b-8a44-4318-8ab3-7633f0ae75a0.jpg.1080p.jpg/cover.cyberpunk-2077.720x1080.2019-08-20.154.jpg"
              header="Внимание, эта игра очень требовательна к характеристикам вашего копмьютера!"
              maxHeight={350}
            />
            <Div>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        РЕКОМЕНДОВАННЫЕ: 
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        Требуются 64-разрядные процессор и операционная система
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        ОС: Windows 10   
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        Процессор: Intel Core i7-4790 or AMD Ryzen 3 3200G         
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        Оперативная память: 12 GB ОЗУ
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        Видеокарта: GTX 1060 6GB / GTX 1660 Super or Radeon RX 590
              
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        DirectX: Версии 12
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        Место на диске: 70 GB
        </Text>
        <Text weight="regular" style={{ marginBottom: 16 }}>
        Дополнительно: SSD recommended
        </Text>
      </Div>
        </Group>
        
    </Panel>
);

Cyberpunk2077.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Cyberpunk2077;
