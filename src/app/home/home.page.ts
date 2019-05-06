import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import * as moment from 'moment';
export declare enum ELocalNotificationTriggerUnit {
  SECOND = "second",
  MINUTE = "minute",
  HOUR = "hour",
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  QUARTER = "quarter",
  YEAR = "year",
  WEEKDAY = "weekday",
  WEEKDAY_ORDINAL = "weekdayOrdinal",
  WEEK_OF_MONTH = "weekOfMonth"
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [LocalNotifications]
})
export class HomePage {

  constructor(private plt: Platform, private localNotifications: LocalNotifications) { 
    this.localNotifications.on('click').subscribe(res => {
      alert(JSON.parse(res));
      let msg = res.data ? res.data.mydata: '';
      
    });

    this.localNotifications.on('trigger').subscribe(res => {
      alert(JSON.parse(res));
    });
  }

  setAlarm(){
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: "file://assets/sounds/alarm_clock_classic.mp3",
    });
  }

  scheduleNotification(){
    alert('5 sec clicked');
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'notification works ',
      data: { mydata: 'my hidden data'},
      trigger: { at: new Date(new Date().getTime() + 10 * 1000) },
      foreground: true
      // trigger: { in : 5, unit: ELocalNotificationTriggerUnit.SECOND }

    });
  }

  recurringNotificaion(){
    alert('recurring clicked');
    this.localNotifications.schedule({
      id: 2,
      title: 'recurringNotificaion',
      text: 'recurringNotificaion works ',
      data: { mydata: 'my hidden data'},
      trigger: { every: ELocalNotificationTriggerUnit.MINUTE},
      foreground: true
      // trigger: { in : 5, unit: ELocalNotificationTriggerUnit.SECOND }

    });
  }

  repeatingDaily(){
    // this.localNotifications.schedule({
    //   id: 42,
    //   title: 'recurringNotificaion',
    //   text: 'recurringNotificaion works ',
    //   data: { mydata: 'my hidden data'},
    //   trigger: { every: ELocalNotificationTriggerUnit.MINUTE},
    //   foreground: true
    //   // trigger: { in : 5, unit: ELocalNotificationTriggerUnit.SECOND }

    // });
  }

  getAll(){

  }
}
