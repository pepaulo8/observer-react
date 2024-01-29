import { Observer } from "./observer";
 
/**
* The INotificationSubject interface declares a set of methods for managing subscribers.
*/
export interface INotificationSubject {
 // subscribe an observer to the INotificationSubject.
 subscribe(observer: Observer): void;
 
 // Detach an observer from the INotificationSubject.
 unSubcribe(observer: Observer): void;
 
 // Notify all observers about an event.
 notify(): void;
}
 
/**
* The Subject owns some important state and notifies observers when the state
* changes.
*/
export class NotificationSubject implements INotificationSubject {
 /**
  * @type {Observer[]} List of subscribers. In real life, the list of
  * subscribers can be stored more comprehensively (categorized by event
  * type, etc.).
  */
 public observers: Observer[] = [];
 public notificationsNumber: number = 0;
 
 /**
  * The subscription management methods.
  */
 public subscribe(observer: Observer): void {
   const isExist = this.observers.includes(observer);
   if (isExist) {
     return console.log("Subject: Observer has been attached already.");
   }
 
   console.log("Subject: Attached an observer.");
   this.observers.push(observer);
 }
 
 public unSubcribe(observer: Observer): void {
   const observerIndex = this.observers.indexOf(observer);
   if (observerIndex === -1) {
     return console.log("Subject: Nonexistent observer.");
   }
 
   this.observers.splice(observerIndex, 1);
   console.log("Subject: Detached an observer.");
 }
 
 /**
  * Trigger an update in each subscriber.
  */
 public notify(): void {
   this.notificationsNumber += 1;
   this.observers.forEach((observer) => {
     observer.update(this);
   });
 }
}