import { INotificationSubject } from "./notification";
 
/**
* The Observer interface declares the update method, used by subjects.
*/
export interface Observer {
 // Receive update from subject.
 update(subject: INotificationSubject): void;
}
 
/**
* Concrete Observers react to the updates issued by the Subject they had been
* attached to.
*/
export class NotificationObserver implements Observer {
 private action: () => void;
 constructor(action: () => void) {
   this.action = action;
 }
 public update(subject: INotificationSubject): void {
   this.action();
 }
}