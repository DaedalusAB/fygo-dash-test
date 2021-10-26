import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable()
export class UnauthorizedRequestInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
                    this.router.navigate(['login']);
                    //  TODO much nicer solution is: remember current route, go to login, after successful login, go to remember route
                }

                throw error;
            })
        );
    }
}