import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Header,
  Group,
  Card,
  CardGrid,
  CardScroll,
  Search,
} from "@vkontakte/vkui";

import "./GameList.css";

import Cyberpunk2077 from "../../img/Game_Banners/Cyberpunk2077.jpg";
import AS_Valhalla from "../../img/Game_Banners/Assassins_Creed_Valhalla_cover.png";
import It_Takes_Two from "../../img/Game_Banners/It_Takes_Two.jpg";
import Little_Nightmares_II from "../../img/Game_Banners/Little_Nightmares_II.jpg";
import The_Witcher_3_Wild_Hunt from "../../img/Game_Banners/The_Witcher_3_Wild_Hunt.jpg";

const osName = platform();

export const GameList = (props) => {
  const headerButton = (
    <PanelHeaderButton onClick={props.go} data-to="home">
      {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
    </PanelHeaderButton>
  );

  return (
    <Panel id={props.id}>
      <PanelHeader left={headerButton} separator={false}>
        <Search />
      </PanelHeader>

      <Group header={<Header>Новинки</Header>}>
        <CardScroll size="s">
          <Card>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${Cyberpunk2077})` }}
            />

          </Card>
          <Card>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${AS_Valhalla})` }}
            />
          </Card>
          <Card>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${It_Takes_Two})` }}
            />
          </Card>
          <Card>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${Little_Nightmares_II})` }}
            />
          </Card>
        </CardScroll>
      </Group>

      <Group
        separator="hide"
        header={<Header mode="primary">Каталог</Header>}
      >
        <CardGrid size="m">
          <Card>
          <div
              className="card-image"
              style={{ backgroundImage: `url(${The_Witcher_3_Wild_Hunt})` }}
            />
          </Card>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  );
};

GameList.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default GameList;
