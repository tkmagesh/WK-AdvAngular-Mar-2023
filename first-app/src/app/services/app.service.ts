import { InjectionToken } from "@angular/core";

export const APP_NAME_TOKEN = new InjectionToken('Manually created Service', {
    providedIn : 'root',
    factory : () => 'Bug Tracker App'
} )
