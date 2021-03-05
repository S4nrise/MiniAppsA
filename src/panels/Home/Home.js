import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  FormLayout,
  NativeSelect,
  FixedLayout,
  PromoBanner,
  Card,
  CardScroll,
} from "@vkontakte/vkui";

import store from "../../store/hardware";

import "./Home.css";

console.log(store);

export const Home = ({ id, go, fetchedUser }) => {
  const [score, setScore] = useState(0);
  const [values, setValues] = useState({});

  const onSelectChange = (event, selectIndex) => {
    const { name, options } = store[selectIndex];
    const currentValue = values?.[name]?.value ?? 0;

    if (!event.target.value.length) {
      setScore(score - currentValue);
      setValues({ ...values, [name]: undefined });
      return;
    }

    const selectedOption = options[event.target.value];

    setScore(score - currentValue + selectedOption.value);
    setValues({ ...values, [name]: selectedOption });
  };

  //Параметры банера
  const promoBannerProps = {
    title: "Google",
    domain: "google.com",
    trackingLink: "https://google.com",
    ctaText: "Перейти",
    advertisingLabel: "Реклама",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png",
    /*"https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg",*/
    description: "Описание рекламы",
    ageRestrictions: "14+",
    statistics: [
      { url: "", type: "playbackStarted" },
      { url: "", type: "click" },
    ],
  };

  return (
    <Panel id={id}>
      <PanelHeader>Твой ПК</PanelHeader>
      {fetchedUser && (
        <Group title="User Data Fetched with VK Bridge">
          <Cell
            before={
              fetchedUser.photo_200 ? (
                <Avatar src={fetchedUser.photo_200} />
              ) : null
            }
            description={
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ""
            }
          >
            <p>
              {" "}
              Привет {`${fetchedUser.first_name} ${fetchedUser.last_name}`}!
              Давай соберем твой ПК!
            </p>
          </Cell>
        </Group>
      )}

      <FormLayout>
        <Group title="Оценка">
          <div className="Circle">
            <p className="result">{score}</p>
          </div>
        </Group>
        <Group title="Комплектующие" className="hardwares">
          {store.map(({ name, options }, selectIndex) => (
            <NativeSelect
              key={name}
              placeholder={name}
              value={values?.[name]}
              onChange={(event) => onSelectChange(event, selectIndex)}
            >
              {options.map((item, index) => (
                <option key={item.name} value={index}>
                  {item.name}
                </option>
              ))}
            </NativeSelect>
          ))}
        </Group>
      </FormLayout>
      <Group title="Навигация">
        <Div style={{ display: "flex" }}>
          <Button
            size="l"
            onClick={go}
            data-to="gamelist"
            stretched
            style={{ marginRight: 8 }}
          >
            Постмотреть игры
          </Button>
          <Button
            size="l"
            onClick={go}
            data-to="testview"
            stretched
            mode="secondary"
          >
            Test
          </Button>
        </Div>
      </Group>

      <Group>
        <Button
          size="l"
          onClick={go}
          data-to="intro"
          stretched
          mode="secondary"
        >
          Вступление
        </Button>
      </Group>

      <FixedLayout vertical="bottom">
        <PromoBanner bannerData={promoBannerProps} />
      </FixedLayout>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
