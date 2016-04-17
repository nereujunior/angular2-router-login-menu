import {EventEmitter, Injectable} from "angular2/core";

@Injectable()
export class GlobalEventsManager {
    public showNavBar: EventEmitter<boolean> = new EventEmitter();


    constructor() {

    }
}