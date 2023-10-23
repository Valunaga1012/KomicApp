import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PRIVATE_KEY, PUBLIC_KEY } from 'secrets'
import * as CryptoJS from 'crypto-js';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const timestamp = new Date().getTime().toString();
    const hash = CryptoJS.MD5(timestamp + PRIVATE_KEY +PUBLIC_KEY).toString();
    const param = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
    const nuevaUrl = request.urlWithParams + (request.urlWithParams.includes('?') ? '&' : '?') + param;

    const apiKeyReq = request.clone({
      url: nuevaUrl
    });
    return next.handle(apiKeyReq);
  }
}
