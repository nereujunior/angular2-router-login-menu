import { Component, OnInit } from 'angular2/core';
import {GlobalEventsManager} from './globalEventsManager';
import {Router} from 'angular2/router';

@Component({
    selector: 'fnd-login',
    template: `
    <button type="button" (click)="onLoginSuccessfully()" >Login</button>
    `
})
export class LoginComponent implements OnInit {
    constructor(
        private _router: Router,
        private _globalEventsManager: GlobalEventsManager) { }

    ngOnInit() { }
    
    private onLoginSuccessfully() : void {
        this._globalEventsManager.showNavBar.emit(true);
        this._router.navigate(['Welcome']);
    }

}