import { NotificationSubject } from "./notification";
 
export class NotificationSingleton extends NotificationSubject {
 private static instance: NotificationSingleton;
 
 /**
  * The NotificationSingleton's constructor should always be private to prevent direct
  * construction calls with the `new` operator.
  */
 private constructor() {
   super();
 }
 
 /**
  * The static method that controls the access to the NotificationSing  leton instance.
  *
  * This implementation let you subclass the NotificationSingleton class while keeping
  * just one instance of each subclass around.
  */
 public static getInstance(): NotificationSingleton {
   if (!NotificationSingleton.instance) {
     NotificationSingleton.instance = new NotificationSingleton();
   }
   return NotificationSingleton.instance;
 }
}