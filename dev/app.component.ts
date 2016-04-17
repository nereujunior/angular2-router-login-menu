import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {LoginComponent} from './login.component';
import {WelcomeComponent} from './welcome.component';
import {MenuNavComponent} from './menuNav.component';

@Component({
    selector: 'my-app',
    template: `
        <fnd-menu></fnd-menu>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, MenuNavComponent]
})
@RouteConfig([
  {path:'/login', name: 'Login', component: LoginComponent, useAsDefault: true},
  {path:'/welcome',     name: 'Welcome',       component: WelcomeComponent}
])
export class AppComponent { }