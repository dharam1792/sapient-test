import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private httpClient: HttpClient) { }

    // _getWithoutFilters(): Observable<any> {
    //     return this.httpClient.get<any[]>('https://api.spacexdata.com/v3/launches?limit=100');
    // }

    _getWithoutFilters(): Observable<any> {
        let url = 'https://api.spacexdata.com/v3/launches?limit=100';
        return this.httpClient.get(url, {})
            .pipe(
                retry(1),
                catchError(this.errorhandl)
            )
    }

    // _getLaunchSuccess(success: boolean): Observable<any> {
    //     let url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=' + success;
    //     return this.httpClient.get(url, {})
    //         .pipe(
    //             retry(1),
    //             catchError(this.errorhandl)
    //         )
    // }

    // _getLaunchSuccessAndLanding(success: boolean, landing: boolean): Observable<any> {
    //     let url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=' + success + '&amp;land_success=' + landing;
    //     return this.httpClient.get(url, {})
    //         .pipe(
    //             retry(1),
    //             catchError(this.errorhandl)
    //         )
    // }

    // _getAll(success: boolean, landing: boolean, year: any): Observable<any> {
    //     let url = 'https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=' + success + '&amp;land_success=' + landing + '&amp;launch_year=' + year;
    //     return this.httpClient.get(url, {})
    //         .pipe(
    //             retry(1),
    //             catchError(this.errorhandl)
    //         )
    // }

    //Error Handel
    errorhandl(error) {
        let errorMsg = "";
        if (error.error instanceof ErrorEvent) {
            errorMsg = error.error.message;
        }
        else {
            errorMsg = `API Error ! Please Contact Admin`;
        }
        return throwError(errorMsg);
    }
}