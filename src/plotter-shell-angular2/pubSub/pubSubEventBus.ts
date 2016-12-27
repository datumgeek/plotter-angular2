import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { PubSubCustomSubject } from './pubSubCustomSubject';
import { Subscription } from 'rxjs/Rx';
export { Subscription } from 'rxjs/Rx';

@Injectable()
export class PubSubEventBus {
    public subjects: Array<any> = [];

    public publish = (subjectName: string, value: any) => {
        let subject: any = this.subjects[subjectName];
        if (subject) {
            subject.next(value);
        }
    }

    public subscribe = (
        subjectName: string, 
        f: (value: any) => void, 
        error?: (error: any) => void, 
        complete?: () => void) : Subscription => {

        let subject: any = this.subjects[subjectName];
        if (!subject) {
            this.subjects[subjectName] = subject = new PubSubCustomSubject<any>();
        }
        return subject.subscribe(f, error, complete);
    }
}
