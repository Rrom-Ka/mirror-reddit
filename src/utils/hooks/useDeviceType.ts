import { useEffect, useState } from "react";
//возвращает mobile, desctop, tablet в зависимости от ширины экрана

export function useDeviceType() {
    const [isTablaet, setIsTablet] = useState("mobile");
      useEffect(() => {
        // //отслеживание брейк-поинта
  // //проверка экрана useDeviceType
        //медиа запрос
        const mediaQuery = {
          desctop: window.matchMedia("(min-width:1540px)"),
          tablet: window.matchMedia("(min-width:1024px) and (max-width:1539px)"),
          mobile: window.matchMedia("(max-width:1023px)"),
        };
        //нчальное значение
        const updateBreakpoint = () => {
          if (mediaQuery.desctop.matches) setIsTablet("desctop");
          if (mediaQuery.tablet.matches) setIsTablet("tablet");
          if (mediaQuery.mobile.matches) setIsTablet("mobile");
        };
        updateBreakpoint();
    
        //подписка
        Object.values(mediaQuery).forEach((media) => {
          media.addEventListener("change", updateBreakpoint);
        });
        //очистка
        return () => {
          Object.values(mediaQuery).forEach((media) => {
            media.removeEventListener("change", updateBreakpoint);
          });
        };
      }, []);
      return isTablaet;
}
