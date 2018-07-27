import {Injectable} from'@angular/core';
import {LocalStorageService} from 'ng2-local-storage';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
    providedIn: 'root'
  })
export class LocalStorageHelper{
    constructor(private _cookieService:CookieService) {

     }
     private setObjectValue( key:any,value:any) {
        this._cookieService.set(key,value);
    }

    private getObjectValue(key:any) {
        let item=this._cookieService.get(key);
        if (item)
            return item;
        return null;
    }
    getUserAuthentication(key:any) {
        return this._cookieService.get(key);
    }

    setUserAuthentication(key:any,value:any) {
        console.log('in localstorage')
        this._cookieService.set(key,value);
        console.log(this._cookieService.get(key))
    }

}