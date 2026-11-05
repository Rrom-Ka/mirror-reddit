//Карирование
//идея-вычислять аргументы ф-и по мере того как мы ее вызвыаем
//те откладваем вычисления , затем собираем аргументы
//отложенный вызов функции
//ф-я add() высшего порядка, те возврящают др ф-и или приниает др ф-и аргументом
// function add(leftSide: number) {
//   return (rightSide: number) => leftSide + rightSide;
// }

import React, { Component } from "react";
import { preventDefault } from "../utils/react/preventDefault";
import { stopPropagation } from "../utils/react/stopPropagation";
import { preventAll } from "../utils/react/preventAll";
import { pickFromSyntheticEvent } from "../utils/react/pickFromSyntheticEvent";
import { withKey } from "../utils/react/withKey";
import { withIdKey } from "../utils/react/withIdKey";

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;
add(1)(1); //->2

//создание собственных ф-й но основе ф-и add()

const addOne = add(1);
//const addOne: (rightSide: number) => number
addOne(5); //->6

//Пример ф-и высшего порядка слушатель
// window.addEventListener("resize", () => {});
function addEventListenerWithDisponce(element: any, name: any, handler: any) {
  element.addEventListener(name, handler);
  return () => element.removeEventListener(name, handler);
}

// const disponce = addEventListenerWithDisponce(window, "resize", () => {
//   console.log("resize");
//   disponce();
// });

//если выражение в FeedwithIdKey( )заменить на withIdexKey то будет поиск поиндксу в withKey после component
const withIdexKey = withKey();
function FeedwithIdKey(props: { blocks: IBlockProps[] }) {
  return <div>{props.blocks.map(withIdKey(Block))}</div>;
}
//----------
function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map((block: IBlockProps) => (
        <Block key={block.id} {...block} />
      ))}
    </div>
  );
}
function FeedExempl(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map(withIdKey(Block))}
      {/* две записи ниже равнозначны */}
      <Block title={"ЗАГОЛОВОК"} id={"1"} />
      {React.createElement(Block, { title: "ЗАГОЛОВОК", id: "2" }, [])}
    </div>
  );
}

interface IBlockProps {
  title: string;
  id: string;
}
function Block(props: IBlockProps) {
  return <div>{props.title}</div>;
}

/// 5.1 14:00 Пример 2
//--- обычные
function Input(props: { onChange: (value: string) => void; value: string }) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.currentTarget.value)}
    />
  );
}

//--- с getValue()
function InputSyntic(props: {
  onChange: (value: string) => void;
  value: string;
}) {
  return <input value={props.value} onChange={getValue(props.onChange)} />;
}

//--- с getValue и деструктуризацией
function InputSynticDestruction({
  onChange,
  value,
}: {
  onChange: (value: string) => void;
  value: string;
}) {
  return <input value={value} onChange={getValue(onChange)} />;
}
//-----------------------------------------------------
function Checkbox(props: {
  onChange: (value: boolean) => void;
  value: boolean;
}) {
  return (
    <input
      type={"checkbox"}
      checked={props.value}
      onChange={(e) => props.onChange(e.currentTarget.checked)}
    />
  );
}

function CheckboxSynrDescr(props: {
  onChange: (value: boolean) => void;
  value: boolean;
}) {
  return (
    <input
      type={"checkbox"}
      checked={props.value}
      onChange={getCheck(props.onChange)}
    />
  );
}

//5,1 18:00 применение
//
export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");
export const getCheck = pickFromSyntheticEvent<HTMLInputElement>()("checked");

//5.1 21:00 ф-я ссыылка не переходящая на др стр, делает што едругое

function NotStandartLink(props) {
  //сброс стандартного поведения ссылки
  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();
    props.onClick();
  };
  return <a onClick={handleClick}> HI</a>;
}

function NotStandartLinkFn(props) {
  //сброс стандартного поведения ссылки
  return <a onClick={preventDefault(stopPropagation(props.onClick))}> HI</a>;
}
function NotStandartLinkFnAll(props) {
  //сброс стандартного поведения ссылки
  return <a onClick={preventAll(props.onClick)}> HI</a>;
}
interface IInputProps {
  onChange: (value: string) => void;
  value: string;
}

//5,1 25:00 Комбинирование
// function InputMy(props: { onChange: (value: string) => void; value: string }) {}
function InputMy({ value, onChange }: IInputProps) {
  return (
    <input
      value={value}
      onChange={preventAll(getValue(onChange))}
      // onChange={preventDefault(stopPropagation(getValue(onChange)))}
    />
  );
}
