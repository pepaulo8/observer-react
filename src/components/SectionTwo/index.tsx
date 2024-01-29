import { useEffect } from "react";
import { useCount } from "../../hooks/useCount";
import {
 NotificationObserver,
 NotificationSingleton,
} from "../../utils/notification";
 
export const SectionTwo = () => {
 const { randomCount, count } = useCount();
 const notification = NotificationSingleton.getInstance();
 const observer = new NotificationObserver(randomCount);
 
 useEffect(() => {
   notification.subscribe(observer);
   return () => notification.unSubcribe(observer);
 }, []);
 
 return <div> Componente 2 numero random: {count}</div>;
};