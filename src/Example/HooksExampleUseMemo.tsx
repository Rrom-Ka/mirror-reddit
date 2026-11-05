//Какие бывают хуки:

import React, { useMemo } from "react";

interface IMyHooksUseEffect {
  title: string;
  id?: string;
}

// 5.  useMemo

//используется для сложных вычислений
//может сбрасывать [items, miltipl] зависимости

export function MyHooksUseMemo({ title, id }: IMyHooksUseEffect) {
  const items = 100;
  const miltipl = 5;

  const result = useMemo(() => {
    (console.log("useMemo"), calculate(items, miltipl));
  }, [items, miltipl]);
  return (
    <div>
      {title} {id} {result}
    </div>
  );
}

//возврат тру когда компоненет оказался примонтирован

function calculate(items: number, miltipl: number) {
  return new Array(items).fill(1).reduce((a, v) => a * miltipl);
}
