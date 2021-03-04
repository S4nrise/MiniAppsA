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
    CardScroll,
    View,
    Search,
    ContentCard,
    Separator,
    PanelHeaderBack,
} from '@vkontakte/vkui';

import './Testview.css';

const osName = platform();

export const Testview = (props) => (
    <Panel id={props.id}>
        <PanelHeader
            left={
                <PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>
            }
            >
            <Search />
            
        </PanelHeader>

        <Group description="Внутри Group">
            <CardScroll size="s">
                <Card>
                    <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                    <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                    <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                    <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                    <div style={{ paddingBottom: '66%' }} />
                </Card>
                <Card>
                    <div style={{ paddingBottom: '66%' }} />
                </Card>
            </CardScroll>
        </Group>
        
    </Panel>
);

Testview.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Testview;
