import React from "react";
import { useState } from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

export function StarWarsNameFunction() {
  const randomName = () =>
    uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  interface IStarWarsNameFunctionState {
    name: string;
    count: number;
  }

  //   //обявляем состояние
  //   //   const [stateWarsReact, useStateWarsReact] = React.useState("11");
  //   const [stateWars, setStateWars] = useState(randomName);
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     setStateWars(randomName);
  //     // setCount(count + 1); //не стабильно
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //комлексный способ
  const [state, setState] = useState<IStarWarsNameFunctionState>({
    name: randomName(),
    count: 0,
  });
  const handleClick = () => {
    setState((prevState) => ({
      name: randomName(),
      count: prevState.count + 1,
    }));

    //если нужно изменить одно из дух состояний
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    setState((prevState) => ({
      ...prevState,
      name: randomName(),
    }));
  };
  return (
    <section>
      <span>{state.name} </span>
      <div>{state.count}</div>
      <button onClick={handleClick}>Мне нужно имя</button>
    </section>
  );
}
