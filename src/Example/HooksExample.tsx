//Какие бывают хуки:

import React, { useState } from "react";
import { useEffect } from "react";

interface IMyHooksUseEffect {
  title: string;
  id?: string;
}

// 1.  useState
// 2.  useEffect
// 3.  useRef - отдельный урок
// 4.  useReducer
// 5.  useMemo
// 6.  useContext - отдельный урок
// 7.  useCallback
// 8.  useImperativeHandle - не рассматрвается в курсе
// 9.  useLayoutEffect - не рассматрвается в курсе
// 10. useDebugValue - не рассматрвается в курсе

/////////////////////////////////////////////////////////////////
// ЧТО НЕЛЬЗЯ ЗУКИ
// 1.  нельзя вызывать в класскомпоненте, Хук вызвается только в функциональном комп-те
// 2.  нельзя менять порядок испорльнеия хуков,
// 3.  оборачиват в if

//  -- при первом рендере рект запимнает в каком порядке запускаются хуки
//жизненный цикл компонента в одной ф-и
// useEffect;

//Хуки Соблюдаю свой порядок

export function MyHooksUseEffect({ title, id }: IMyHooksUseEffect) {
  //аргументы колбэе()=>{}, зависимости[]

  //useEffect запускается при каждом рендере
  //если без зависимостпей то хук превратится в компонент_дид_маунт и компонент_вилл_апдейт
  //когда срабатывает приложение вызывается useEffect первый рендер аналог componentDidMount
  //все последущие аналог componentWillUpdate

  // //-
  // useEffect(() => {
  //   // console.log("componentDidMount");
  //   console.log("componentWillUpdate");
  // });
  // //-

  //useEffect запускаетя
  //если зависимости указаны какпустой массив[]
  //те мы следим ни зачем, возмет нулейвой член массива увидит undefined в [],
  //  будет слеидтиь за каждым рендером будет видет undefined и
  //  отработает один раз
  //  компонет првератися в componentDidMount

  // //-
  // useEffect(() => {
  //   console.log("componentDidMount[]");
  // }, []);
  // //-

  //можем вернуть фукцию()которая и есть componentWillUnmount

  // //-
  // useEffect(() => {
  //   console.log("componentDidMount");
  //   return () => {
  //     console.log("componentWillUnmount");
  //   };
  // }, []);
  // //-

  //useEffect [title] при заполненном массиве зависмостей
  //срабатывает при изменении св-ва ttile
  //те наблюдаем за title
  //useEffect всегда вызвается при первом рендере

  // //-
  // useEffect(() => {
  //   console.log("componentWillReceiveProps: ", title);
  // }, [title]);
  // //-

  const [isMounted] = useIsMounted();

  //обход if() - вывод в консоль когда isMountedизменится
  useEffect(() => {
    console.log("isMounde ", isMounted);
  }, [isMounted]);

  return (
    <div>
      {title} {id}
    </div>
  );
}

//возврат тру когда компоненет оказался примонтирован

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);
  //хотим чтобы занчение isMounted изменилось на тру
  //если зависимости [] useEfeect =>componentDidMount
  useEffect(() => {
    setIsMounted(true);
  });
  return [isMounted];
}
