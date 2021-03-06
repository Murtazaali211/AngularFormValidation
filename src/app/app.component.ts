import { Component, OnInit } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private router: Router){
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;        
      }
      if(routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel
        ){
        this.showLoadingIndicator = false;        
      }
    });
  }
  //title = 'AngularReactive';
}
