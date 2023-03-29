import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class DateService {
    getCurrentTime() : Date {
        return new Date()
    }
}