import React from "react";

interface ILifecycleProps {
  someProp: number;
}
interface ILifecycleState {
  stateFields: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecycle extends React.Component<
  ILifecycleProps,
  ILifecycleState
> {
  constructor(props: ILifecycleProps) {
    super(props); //метод вызвает конструктор класс Component становятся доступны prop
    //иницилазируем состояние
    //прямая инициализация ч-з присваивание возможноа: на этапе его инициализации(в конструкторе) или ч-з перегрузку
    //
    // this.state = { stateFields: props.someProp }; // ур4,7 5:30 копируем пропы в поля состояния при иницаализации. приведет - к использованию производным состояинем и оно не будет меняться автоматиечки
    this.state = { stateFields: 0, isMounted: false, hasError: false };
    // this.handleClick = this.handleClick.bind(this); //Биндим контекс  решение ошибки для handkeclivk
    //--!! НЕЛЬЯЗЯ --
    // this.setState({}); // тк сетстейт допустен после встроки компонента в ДОМ
    //сайдЭффекты, Подписки
  }
  //----------------------------------------------------------------------------
  //ур4,7 10мин вызвается перед render noun и обнлвение, rerender (те нетолько при изменении props)
  //нужен редко в случе применения производного состояния изменя  stateField
  //редко Производное состояние усложняем код
  //внутринельзя использовать  полями методами this., для переиспользования кода в внутри метода он должен быть вынесен в чистой функции вне класса
  static getDerivedStateFromProps(
    props: Readonly<ILifecycleProps>,
    state: Readonly<ILifecycleState>,
  ) {
    //возвращает объект с описанным состоянием  кот нам необходимо обновить перед рендером приложения
    return { stateField: props.someProp };
    // retur n null; //если ничего не нужно менять
  }
  //-----------------------------------------------------
  //4,7 24:20 обработка оршибок
  //вызвается когда в компоненте потомке происходит  ошибка
  //вызвается во время render -а
  static getDerivedStateFromError(error: Error) {
    //возвращает объект описывает состояние кот необходимо изменить
    return { hasError: true }; //если произойдет ошибка и внутри render
  }
  //----------------------------------------------------------------
  //4.7 17:20 метод обновления
  //не использвать при PureComponent
  //применяется при использовании Reactкомпоненеат в целях повышения производительности
  //не стоит в него вмешиваться
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any,
  ): boolean {
    // return true;
    return false;
    // return this.state !== nextState || this.props !== nextProps;
    //--Не использовать так, постомучто тяжелая операция
    // return (
    //   JSON.stringify(this.state) !== JSON.stringify(nextState) ||
    //   JSON.stringify(this.props) !== JSON.stringify(nextProps)
    // );
  }
  //-----------------------------------------------------------------------
  //виндить контекст методам класса
  //render единственный обязательный метод, можте возвращать JSX, массив, строкиб числа, null, порталы, булевые
  public render() {
    //вывод ошибки- в прод так не делать
    if (this.state.hasError) {
      return <>EROORRR</>;
    }
    return <div onClick={this.handleClick}>1223</div>; //будет ошбика - невозможно приочитать setSrate от undefined тк внутри handleClick нельзя поместиь this
  }
  //-------------------------------------------------------------------
  //4.7 21:50  метод обновления
  //вызвается непеосредственно перед обновление компеонента
  //возвращаеме значение попадает в связанный метод componentDidUpdate
  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
  ): any | null {
    //возвращает любое занчиен, высоту скрола на кот он находится, ширину окна
    return 1234;
    // return null; // если ничего не нужно
  }
  //------------------------------------------------------------------
  //4.7 23:00  метод обновления
  //вызывается непосрдесвенно после обновления компонента, не вызвается если getSnapshotBeforeUpdate()=> false
  //snapshot?: any, это "return 1234" из getSnapshotBeforeUpdate()
  //после обноления компонента мы можем поменяь что-0то в интефейсе в соответствии с тем что вернул snapshot
  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any,
  ): void {
    //работа с ДОМ, вызов setState условно(безусловно-бесконечное обновление)
    if (snapshot > 1000) {
      this.setState({});
    }
  }
  //---------------------------------------------------------------------
  //вызвается после монитрованичя компонента в ДОМ,
  //исп-ся для сайдэффект, подписаок,таймеров, счетчиков
  //в неп сожно произвоадить операции связвнные с ДОМ- изм ширины(высоты) окна, подписки на события
  public componentDidMount(): void {
    document.addEventListener("resize", () => {});
    setTimeout(() => {}, 0);
    this.setState({ isMounted: true });
  }
  //--------------------------------------------------------------
  //4,7 26:40 обработка ошибок
  //ErrorInfo-необходим для запуска сайд эффектов при получении ошибки
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // logError(errorInfo.componentStack)
    this.setState({}); //не верно вызывается в др методе (вроде getDerivedStateFromError)
  }
  //----------------------------------------------------------------
  //4.7 16:20 вызвается непосредсвенно перед удалением компонента
  //отписавться от  подпиоск, обнолвение таймеров
  public componentWillUnmount(): void {
    // document.removeEventListener('resize', ()={})
  }
  //----------------------------------------------------------------------
  //handler
  //создается приватное поле(метод)
  //внутри вызвается setState обновляется stateFields
  //   private handleClick() {
  //     this.setState({ stateFields: 1 });
  //   }
  //без биндирга используем стрелочную ф-ю
  private handleClick = () => {
    this.setState({ stateFields: 1 });
  };
}
