//генерируем рандомную строку

import { func, object } from "prop-types"
import { assoc } from "../js/assoc"

//nanoid
export const generateRandomString=()=>Math.random().toString(36).substring(2, 15)
//один раз сегнерируется generateRandomString для этого нудна доп ф-я ниже
//эта ф-я вызвается один раз при вызове модуля
export const assignId=assoc('id', generateRandomString())
//вызывается каждый раз когда вызваем ф-ю
export const generateId=<O extends object>(obj:O)=>assoc('id',generateRandomString())(obj)
//или
export const generateAssignId=<O extends object>(obj:O)=>assignId(obj)