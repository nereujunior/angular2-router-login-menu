import {AppComponent}     from './app.component';
import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {GlobalEventsManager} from './globalEventsManager';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  GlobalEventsManager
]);