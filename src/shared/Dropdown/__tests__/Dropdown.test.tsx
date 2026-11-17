/**
 * @jest-environment jsdom
 */
//для работы с jsDom

import React from "react";
import { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";

//Dropdaun редерится
describe("Dropdown", () => {
  test("should render-дожен отрендериться", () => {
    //создаем обертку, рендер без браузера
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />,
    );
    expect(wrapper).toBeDefined();
    console.log(window);
    // console.log(wrapper.find("div.container").debug());
    expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy();
  });

  test("should render-дожен отрендериться (snapshot)", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
