'use strict';
 /* Custom class to get the client or visitor's browser data */
export class client_data {
    constructor(nav_handler=window.navigator) {
        if (nav_handler === undefined || nav_handler === null) {
            nav_handler = undefined;
            this._nav_handler = nav_handler;
        }

        else {
            if(!nav_handler === undefined || !nav_handler === null ) {
                this._nav_handler = nav_handler;
                this.appName = this._nav_handler.appName;
                this.appCodeName = this._nav_handler.appCodeName;
                this.appVersion = this._nav_handler.appVersion;
                this.buildID = this._nav_handler.buildID;
                this.isCookieEnabled = this._nav_handler.cookieEnabled;
                this.language = this._nav_handler.language;
                this.platform = this._nav_handler.platform;
                this.oscpu = this._nav_handler.oscpu;
                this.agent = this._nav_handler.userAgent;
                this.geolocation = this._nav_handler.geolocation;
        }
    }
}
    toArray() {
        this.client_array_info = [  this.appName,
                                    this.appCodeName,
                                    this.appVersion,
                                    this.buildID,
                                    this.isCookieEnabled,
                                    this.language,
                                    this.platform,
                                    this.oscpu,
                                    this.agent,
                                    this.geolocation
                                 ];
        return this.client_array_info;
    }
    /* get the parent id of the element in able to insert the element */
    set parentID(id) {
        this._parentID = id;
    }
    get parentID() {
        if( this._parentID === undefined || this._parentID === null)
            return null;
        else
            return this._parentID;
    }
    /*
     * @return: custome object containing client available browser data
     */ 

    get clientInfo() {
        return { 
            "clientAppName": this.appName,
            "codeName": this.appCodeName,
            "version": this.appVersion,
            "id": this.buildID,
            "cookie": this.isCookieEnabled,
            "lang": this.language,
            "platform": this.platform,
            "arch": this.oscpu,
            "agent": this.agent,
            "location": this.geolocation
        };
    }

    createContainer() {
        this.clientContainer = document.createElement("div");
        this.table = document.createElement("table");
        this.table_row = document.createElement("tr");
        this.table_heading = document.createElement("th");
        this.table_data = document.createElement("td");
        this.clientContainer.id = "client_data";
        this.table.id = "client_table_data";
    }

    popUpContainer(id) {
        $(`${id}`).
    }
    
    /* Catch any unhandledrejections using events.
     * window.addEventListener( 'unhandledrejection', event => { } );
     */
}