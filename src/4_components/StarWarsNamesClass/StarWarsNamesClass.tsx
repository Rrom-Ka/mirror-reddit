import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";
interface IStarWarsNameClassState {
  name: string;
  count: number; //кол-во кликов
}
export class StarWarsNameClass extends React.PureComponent<
  {},
  IStarWarsNameClassState
> {
  // вариант 1 состояние через конструкотор (только readonly)
  // constructor(props: {}) {
  //   super(props);
  //   this.state = { name: "123" };
  // }

  //вариант 2 - через перегрузку
  // обявление поля обязательно использовать дженерик readonly
  state: Readonly<IStarWarsNameClassState> = {
    name: this.randomName(),
    count: 0,
  }; //вар 2
  public render(): React.ReactNode {
    return (
      <section>
        {/* вар2 */}
        <span>{this.state.name}</span>
        <div></div>
        <button onClick={this.handleClick}>Мне нужно имя</button>
      </section>
    );
  }
  //кнопка
  private handleClick = () => {
    this.setState({ name: this.randomName() });
    this.setState(
      (state, props) => ({ count: state.count + 1 }),
      () => {
        console.log(">>", this.state.count);
      },
    );
    console.log(">!!>", this.state.count); //выведет не обновленный count
    // this.setState({ count: this.state.count + 1 }); //Wrong!!
  };
  private randomName(): string {
    // this.state.name = "123"; // вариант 1 & 2 состояние name-только чтение
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }
}
