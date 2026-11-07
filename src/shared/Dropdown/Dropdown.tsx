import React, { useEffect, useState } from "react";
import styles from "./Dropdown.css";

//заключает логику: выпадение чего угодно из чего угодно
//несколоко элементов
//1эл - на который наживмаем который передаем в элемент
//для контроллироумого списка новые сво-ва isOpen, onOpen, onClose
interface IDropdownProps {
  button: React.ReactNode; //кнопка для инициализации выпадения
  children: React.ReactNode; //то что выпдает из списка
  isOpen?: boolean; //список открыт/закрыт-деистве нажатие на кнопу не имеет значения
  onOpen?: () => void; //колбэк
  onClose?: () => void;
}

const NOOP = () => {};
export function Dropdown({
  button,
  children,
  isOpen,
  onClose = NOOP,
  onOpen = NOOP,
  // onClose,
  // onOpen,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);
  const handleOpen = () => {
    console.log("Dropdonw ", isOpen, isDropdownOpen);
    // проверка если не перердана isopen то состояние переключается автомаитчески
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };
  return (
    <div className={styles.container}>
      {/* кнопка для инициализации */}
      <div onClick={handleOpen}>
        {button}
        {/* открваем списко */}
        {isDropdownOpen && (
          // контерйнер для списка
          <div className={styles.listContainer}>
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function DropdownNotConroll({ button, children }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className={styles.container}>
      {/* кнопка для инициализации */}
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {button}
        {/* открваем списко */}
        {isDropdownOpen && (
          // контерйнер для списка
          <div className={styles.listContainer}>
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
