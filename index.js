var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
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
var WebServer = (function (_super) {
    __extends(WebServer, _super);
    function WebServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method will start your webserver.
     * @param port {number} Port number (default to 8080)
     */
    /**
       * This method will start your webserver.
       * @param port {number} Port number (default to 8080)
       */
    WebServer.prototype.start = /**
       * This method will start your webserver.
       * @param port {number} Port number (default to 8080)
       */
    function (port) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This method will stop your webserver.
     */
    /**
       * This method will stop your webserver.
       */
    WebServer.prototype.stop = /**
       * This method will stop your webserver.
       */
    function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @return {Observable<Request>} Returns an observable to resolve as a Request object
     */
    /**
       * This function does something
       * @return {Observable<Request>} Returns an observable to resolve as a Request object
       */
    WebServer.prototype.onRequest = /**
       * This function does something
       * @return {Observable<Request>} Returns an observable to resolve as a Request object
       */
    function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * This function does something
     * @param requestId {string} Request ID to respond to
     * @param responseObject {Response} Response object
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @param requestId {string} Request ID to respond to
       * @param responseObject {Response} Response object
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    WebServer.prototype.sendResponse = /**
       * This function does something
       * @param requestId {string} Request ID to respond to
       * @param responseObject {Response} Response object
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function (requestId, responseObject) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    WebServer.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], WebServer.prototype, "start", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WebServer.prototype, "stop", null);
    __decorate([
        Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'stop'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], WebServer.prototype, "onRequest", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], WebServer.prototype, "sendResponse", null);
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
    WebServer = __decorate([
        Plugin({
            pluginName: 'WebServer',
            plugin: 'cordova-plugin-webserver',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'window.webserver',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/bykof/cordova-plugin-webserver.git',
            // the github repository URL for the plugin
            install: '',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], WebServer);
    return WebServer;
}(IonicNativePlugin));
export { WebServer };
//# sourceMappingURL=index.js.map