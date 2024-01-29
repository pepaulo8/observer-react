import { useCallback, useEffect, useState } from "react";
import { Box } from "../components/Box";
import { SectionFour } from "../components/SectionFour";
import { SectionOne } from "../components/SectionOne";
import { SectionThree } from "../components/SectionThree";
import { SectionTwo } from "../components/SectionTwo";
import {
 NotificationObserver,
 NotificationSingleton,
} from "../utils/notification";
 
export const NotificationPage = () => {
 const [notifications, setNotifications] = useState(0);
 const notification = NotificationSingleton.getInstance();
 
 const principalObserver = new NotificationObserver(() =>
   setNotifications(notification.notificationsNumber)
 );
 
 const AsyncInterval = useCallback(() => {
   setInterval(() => {
     notification.notify();
   }, 1000);
 }, []);
 
 useEffect(() => {
   notification.subscribe(principalObserver);
   AsyncInterval();
   return () => notification.unSubcribe(principalObserver);
 }, []);
 
 return (
   <>
     <h1>
       <strong>Numero de notificationes: {notifications}</strong>
     </h1>
     <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
       <Box color="#F28177">
         <SectionOne />
       </Box>
       <Box color="#F2EA79">
         <SectionTwo />
       </Box>
     </div>
     <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
       <Box color="#F2EA79">
         <SectionThree />
       </Box>
       <Box color="#F25CD9">
         <SectionFour />
       </Box>
     </div>
   </>
 );
};