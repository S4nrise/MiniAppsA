import React, { Fragment } from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PropTypes from "prop-types";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";

import "./Intro.css";
import VGameIcon from "../../img/VGameIcon.png";

const ROUTERS = {
	HOME: 'home',
	INTRO: 'intro',
}

export const Intro = ({ id, go }) => (
  <Panel id={id} centered={true}>
    <PanelHeader>Твой ПК</PanelHeader>
    {
      <Fragment>
        <Group>
          <Div className="Hello">
            <h2>Добро пожаловать!</h2>
            <h3>
              Этот приложение поможет тебе оценить на какиех настройках графики
              ты сможешь играть в игры!
            </h3>
          </Div>
          <Div className="Image">
            <img
              className="VGameIcon"
              width="30%"
              height="30%"
              src={VGameIcon}
            />
          </Div>
        </Group>
        <FixedLayout vertical="bottom">
          
            <Button className="WButton"
              size="l"
              onClick={go}
              data-to="home"
              stretched
              mode="commerce"
            >
              Поехали!
            </Button>
        </FixedLayout>
      </Fragment>
    }
  </Panel>
);

Intro.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Intro;
