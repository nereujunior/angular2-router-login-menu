import { Component, ViewEncapsulation, OnInit } from 'angular2/core';
import {GlobalEventsManager} from './globalEventsManager';

@Component({
    selector: '<fnd-menu>',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [],
    template: `
        <div *ngIf="showMenu">
            Hello Menu!
        </div>
        <div *ngIf="!showMenu">
            Menu Hidden...
        </div>
    `
})
export class MenuNavComponent implements OnInit {
    public showMenu : boolean;
    constructor(private globalEventsManager: GlobalEventsManager) {
        this.globalEventsManager.showNavBar.subscribe((mode : boolean) =>{
            this.showMenu = mode;
        });

    }

    ngOnInit() { }

}
