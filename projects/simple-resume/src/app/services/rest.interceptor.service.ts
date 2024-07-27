import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { EventEmitter, Injectable,  signal } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs'; 

const reLoginEvent = new EventEmitter<void>(); // Define event type (optional)
const getAuthenticationToken = signal("");

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => { 
    const authToken = getAuthenticationToken(); // Replace with your actual token retrieval logic 

    const headers: any = {}
    if (authToken.length > 0) {
        headers.Authorization = authToken;
    }
    const authReq = req.clone({
        setHeaders: headers
    });

    headers["Access-control-Allow-Origin"] = "*";
    // taskService.showLoader();
    // return// Chain the interceptor to handle successful responses as well as errors
    return next(authReq).pipe(
        catchError(error => {
            try {
                if (error.statusText === "Unauthorized" || error.status === 401) {
                    // reLoginEvent.emit();
                    window.location.reload();
                }
                // taskService.toastContainer.error(error?.error?.message || "No Server Found") // Log the error details to the console
                // Optionally handle specific error types here (e.g., authentication failures, network issues)


            } catch (error) {
                console.log(error);
            }
            // Return an appropriate error response to the caller
            return throwError(() => error);
        }),
        finalize(() => {
            // taskService.hideLoader();
        })
    );;
};

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    event: EventEmitter<void> = reLoginEvent;
    token = getAuthenticationToken;
} 