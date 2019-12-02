'use strict';

const utils = require('@iobroker/adapter-core');


class rtspStream extends utils.Adapter {

    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
    constructor(options){
        super({
            ...options,
            name: 'tesla-motors',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('message', this.onMessage.bind(this));
        // todo INIT variablen
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady(){ //
        this.log.debug('Starting Tesla Motors');
        const Adapter = this;
        await Adapter.setStateAsync('info.connection', false, true);

        this.subscribeStates('*'); // TODO: Subscribe right things...

        // TODO Setup Tasks
    }

    onUnload(callback){
        const Adapter = this;
        try{
            // TODO Cleanup
            this.log.info('cleaned everything up...');

            callback();
        }catch(e){
            callback();
        }
    }
        /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    async onStateChange(id, state){
        const Adapter = this;
        if(!state) return;
        Adapter.log.debug("State Change: " + id + " to " + state.val + " ack " + state.ack);

        // TODO State Changed
    }

    async onMessage(msg){
        const Adapter = this;
        Adapter.log.debug('Got a Message: ' + msg.command);
        if(msg.command === 'XXX'){
            // TODO Got message, responde
            Adapter.sendTo(msg.from, msg.command, {xxx: "yyy", zzz: "xx"}, msg.callback);
        }
    }
}

// @ts-ignore parent is a valid property on module
if(module.parent){
    // Export the constructor in compact mode
    module.exports = (options) => new rtspStream(options);
}
else{
    // otherwise start the instance directly
    new rtspStream();
}
