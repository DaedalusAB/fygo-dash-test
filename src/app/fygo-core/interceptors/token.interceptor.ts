import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //  TODO maybe there is a better way to do this, but I gotta go fast;
        //  Do not attach token to login request 
        if (request.url.includes('api-token-auth/')) {
            return next.handle(request);
        }

        request = request.clone({
            setHeaders: {
                Authorization: `Token ${this.authService.getToken()}`
            }
        });

        return next.handle(request);
    }
}