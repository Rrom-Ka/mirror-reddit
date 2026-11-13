import React from "react";
import { preventDefault } from "../utils/react/5_1_21m_preventDefault";
import { stopPropagation } from "../utils/react/5_1_24_stopPropagation";
import { getValue } from "./5_1_FunctionalExample";

export function InputExample({ value, onChange }: any) {
  return (
    <input
      value={value}
      onChange={preventDefault(stopPropagation(getValue(onChange)))}
    />
  );
}

export function InputExampleСompose({ value, onChange }: any) {
  return (
    <input
      value={value}
      onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
    />
  );
}

//принимает др ф-и исполняет их спарвва на лево
function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    //currentValue->fn
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

//слева направо
function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

//pick забирает из объект асвойства
function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}
//Пример
const some = pick("value")({ value: 1 }); //->1

//isEqual проверяет на равенство
function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

//5.5 9:00 принимает булевое занчение и инвертирует  его
function cond(b: boolean) {
  return !b;
}

//5,5 7:00 типовая задача
//фильтровать допустим для удаления
//из статичный массив комментариев,
const comments = [
  { id: 22, text: "text One" },
  { id: 44, text: "text Two" },
];
const filtredComments = comments.filter(({ id }) => id !== 22); //удалим объект с id=22
const filtredCommentsFnPr = comments.filter(pipe(pick("id"), isEqual(22))); //останется объект с id=22
const filtredCommentsUnFnPr = comments.filter(
  pipe(pick("id"), isEqual(22), cond),
); //останется объект с id!=22
const filtrWithId = (id: number) => pipe(pick("id"), isEqual(22), cond);
const filtredWithId = comments.filter(filtrWithId(22)); //останется объект с id!=22

const createFilterBy = (prop: string) => (id: number) =>
  pipe(pick(prop), isEqual(id), cond);
const createFilterBystring = (prop: string) => (value: string) =>
  pipe(pick(prop), isEqual(value), cond);
const filterWithId__ = createFilterBy("id");
const filterWithId__22 = createFilterBy("id")(22);
const filterWithValue__textONE = createFilterBystring("value")("text One");

//pickFromSyntheticEvent - лучше типизирован
//getValueNumber-удобней читать
const getValueNumber = pipe<number>(
  pick("currentTarget"),
  pick("value"),
  parseInt,
);
