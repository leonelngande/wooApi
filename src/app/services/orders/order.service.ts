import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { WoocommerceHelperService } from '../helper.service';
import { Order } from '@services/orders/orders.interface';

@Injectable()
export class WoocommerceOrderService {

  constructor(
    private httpClient: HttpClient,
    private wooHelper: WoocommerceHelperService
  ) { }

  createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`orders`, order)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }

  retriveOrder(id: string): Observable<Order> {
    return this.httpClient.get<Order>(`orders/${id}`)
      .pipe(catchError(err => this.wooHelper.handleError(err)));
  }
}
