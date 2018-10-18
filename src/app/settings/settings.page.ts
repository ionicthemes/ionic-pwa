import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {

  notifications:boolean = false;

  constructor(private afMessaging: AngularFireMessaging) {}

  ngOnInit(){
    this.afMessaging.getToken
    .subscribe(
      (token) => {
        if(token){
          // token present
          this.notifications=true;
        }
      },
      (error) => { console.error(error); },
    )
  }

  requestPushNotificationsPermission(e) {
    if(e.detail.checked){
      this.afMessaging.requestToken
       .subscribe(
         (token) => { console.log('Permission granted! Save it to your server!', token); },
         (error) => { console.error(error); },
       );
    } else {
      //delete token
      this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Token Deleted!'); },
      );
    }

  }
}
