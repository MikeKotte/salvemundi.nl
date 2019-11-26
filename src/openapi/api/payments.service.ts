/**
 * Salve mundi API
 * Salve mundi API documentation
 *
 * The version of the OpenAPI document: 1.0
 * Contact: ict@salvemundi.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import IHttpClient from "../IHttpClient";
import { inject, injectable } from "inversify";
import { IAPIConfiguration } from "../IAPIConfiguration";
import { Headers } from "../Headers";
import HttpResponse from "../HttpResponse";

import { PaymentDto } from "../model/paymentDto";

import { COLLECTION_FORMATS }  from "../variables";



@injectable()
export class PaymentsService {
    private basePath: string = 'http://localhost';

    constructor(@inject("IApiHttpClient") private httpClient: IHttpClient,
        @inject("IAPIConfiguration") private APIConfiguration: IAPIConfiguration ) {
        if(this.APIConfiguration.basePath)
            this.basePath = this.APIConfiguration.basePath;
    }

    /**
     * event
     * This call is creates a payment for an event
     * @param id 
     
     */
    public paymentsEventIdGet(id: number, observe?: 'body', headers?: Headers): Observable<PaymentDto>;
    public paymentsEventIdGet(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentDto>>;
    public paymentsEventIdGet(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling paymentsEventIdGet.');
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<PaymentDto>> = this.httpClient.get(`${this.basePath}/payments/event/${encodeURIComponent(String(id))}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <PaymentDto>(httpResponse.response))
               );
        }
        return response;
    }


    /**
     * membership
     * This call is creates a payment for a new membership
     * @param id 
     
     */
    public paymentsMembershipGet(id: number, observe?: 'body', headers?: Headers): Observable<PaymentDto>;
    public paymentsMembershipGet(id: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<PaymentDto>>;
    public paymentsMembershipGet(id: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (id === null || id === undefined){
            throw new Error('Required parameter id was null or undefined when calling paymentsMembershipGet.');
        }

        let queryParameters: string[] = [];
        if (id !== undefined) {
            queryParameters.push("id="+encodeURIComponent(String(id)));
        }

        headers['Accept'] = 'application/json';

        const response: Observable<HttpResponse<PaymentDto>> = this.httpClient.get(`${this.basePath}/payments/membership?${queryParameters.join('&')}`, headers);
        if (observe == 'body') {
               return response.pipe(
                   map(httpResponse => <PaymentDto>(httpResponse.response))
               );
        }
        return response;
    }

}