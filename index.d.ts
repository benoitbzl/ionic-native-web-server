import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface Response {
    status: number;
    body: string;
    headers: {
        [key: string]: string;
    };
}
export interface Request {
    requestId: string;
    body: string;
    headers: string;
    method: 'POST' | 'GET' | 'PUT' | 'PATCH';
    path: string;
    query: string;
}
/**
 * @name Web Server
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { WebServer } from '@ionic-native/web-server';
 *
 *
 * constructor(private webServer: WebServer) { }
 *
 * ...
 *
 *
 * this.webServer.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class WebServer extends IonicNativePlugin {
    /**
     * This method will start your webserver.
     * @param port {number} Port number (default to 8080)
     */
    start(port?: number): Promise<any>;
    /**
     * This method will stop your webserver.
     */
    stop(): Promise<any>;
    /**
     * This function does something
     * @return {Observable<Request>} Returns an observable to resolve as a Request object
     */
    onRequest(): Observable<Request>;
    /**
     * This function does something
     * @param requestId {string} Request ID to respond to
     * @param responseObject {Response} Response object
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    sendResponse(requestId: string, responseObject: Response): Promise<any>;
}
