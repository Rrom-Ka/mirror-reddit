import React from "react";
import { pipe } from "./pipe";
import { pick } from "./pick";

//Оптимихируем   --    поскольку два вышуказанных примера очень похожи
//ф-я  забирает занчение из SyntheticEvent и вызовет колбэк
export function pickFromSyntheticEvent<T extends HTMLElement>() {
  //// (key) - возвращаем ключ из SyntheticEvent,
  //// (fn)-- возврат ф-и принимающюю каллбэк
  //// (e) -- возврат ф-и кот принимает наш event
  //// fn(e.currentTarget[key])-  в  рез-те далет каллбэк кот напишет за нас currentTarget и берет ключ [key]
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(fn: E) =>
    (e: React.SyntheticEvent<T>) =>
      fn(e.currentTarget[key]); //возвращаем ключ из SyntheticEvent
}

//pickFromSyntheticEvent - лучше типизирован
//getValueNumber-удобней читать
export const getValueNumber = pipe<number>(
  pick("currentTarget"),
  pick("value"),
  parseInt,
);
