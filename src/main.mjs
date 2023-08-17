// External dependencies and imports.
import EventEmitter from 'events';
import _debugModule from 'debug';
import _is from 'is-it-check';

// Internal dependency and imports
import {AstroDataRSTOneDay, ASTRONOMICAL_DATA_EVENTS} from './astroRiseSetTransitOneDay.mjs';

/**
 * @description Exposes Astronomical Data to external clients.
 * @copyright 2023-2023
 * @author Mike Price <dev.grumptech@gmail.com>
 * @module AstronomicalDataAPIModule
 * @requires debug
 * @see {@link https://github.com/debug-js/debug#readme}
 * @requires events
 * @see {@link https://nodejs.org/dist/latest-v16.x/docs/api/events.html#events}
 * @requires crypto
 * @see {@link https://nodejs.org/dist/latest-v16.x/docs/api/crypto.html#crypto}
 * @requires is-it-check
 * @see {@link https://github.com/evdama/is-it-check}
 */

/**
 * @description Debugging function pointer for runtime related diagnostics.
 * @private
 */
// eslint-disable-next-line no-unused-vars
const _debug = _debugModule('api');

/**
 * @description Package Information
 * @private
 */
const _PackageInfo = {PLUGIN_VER: 'PLACEHOLDER_VERSION'};

/**
 * @description Enumeration of published events.
 * @readonly
 * @enum {string}
 * @property {string} API_EVENT_DATA_PROCESSING - Identification for the event published when initiatng astronomical data processing.
 * @property {string} API_EVENT_DATA_PROCESS_COMPLETE - Identification for the event published when initiatng astronomical data processing completes.
 */
export const API_ASTRONOMICAL_DATA_EVENTS = {
    /* eslint-disable key-spacing */
    API_EVENT_DATA_BUSY             : 'busy',
    API_EVENT_DATA_REQUEST_COMPLETE : 'request_complete',
    /* eslint-enable key-spacing */
};

/**
 * @description Module busy servicing a request
 * @event module:AstronomicalDataAPIModule#event:busy
 * @type {object}
 * @param {boolean} e.busy -Flag indicating the astronomical data is being updated.
 */
/**
 * @description Astronomical Data Request Complete
 * @event module:AstronomicalDataAPIModule#event:request_complete
 * @type {object}
 * @param {boolean} e.status - Flag indicating the is the processing resulted in an error.
 * @param {object} e.data - Object containing data of interest (request specific).
 */
/**
 * @description API for Astronomical Data
 * @augments EventEmitter
 */
export class AstronomicalDataAPI extends EventEmitter {
    /**
     * @description Constructor
     */
    constructor() {
        // Initialize the base class.
        super();

        /* Bind Handlers */
        this._bindDestructorNormal   = this._destructor.bind(this, {cleanup: true});
        this._bindDestructorAbnormal = this._destructor.bind(this, {exit: true});

        // Create the RST object
        this._astroRSTOneDay = new AstroDataRSTOneDay();
        this._astroRSTOneDay.on(ASTRONOMICAL_DATA_EVENTS.EVENT_DATA_PROCESSING, this._handleRSTDataProcessing.bind(this));
        this._astroRSTOneDay.on(ASTRONOMICAL_DATA_EVENTS.EVENT_DATA_PROCESS_COMPLETE, this._handleRSTDataProcessComplete.bind(this));

        // Busy flag.
        this._busy = false;
        // Pending flag
        this._pending = false;

        // Register for shutdown events.
        // do something when app is closing
        process.on('exit', this._bindDestructorNormal.bind(this));
        // catches uncaught exceptions
        process.on('uncaughtException', this._bindDestructorAbnormal.bind(this));
    }

    /**
     * @description Destructor
     * @param {object} options - Typically containing a "cleanup" or "exit" member.
     * @param {object} err - The source of the event trigger.
     * @returns {void}
     * @async
     * @private
     */
    async _destructor(options, err) {
        // Is there an indication that the system is either exiting or needs to
        // be cleaned up?
        if ((options.exit) || (options.cleanup)) {
            this._log.debug('Terminating the astronomical data api.');
            this._log.debug(err);
        }
        // Lastly eliminate myself.
        delete this;
    }

    /**
     * @description Read only accessor for the module version.
     * @returns {string} - Version
     */
    get Version() {
        return _PackageInfo.PLUGIN_VER;
    }

    /**
     * @description Read only property for the RST One Day Data
     * @returns {object} = RST OneDay Data
     */
    get RSTOneDayData() {
        let data = undefined;

        if (_is.truthy(this._astroRSTOneDay)) {
            // eslint-disable-next-line new-cap
            data = this._astroRSTOneDay.ObjectData;
        }

        return data;
    }

    /**
     * @description Helper for requesting and collecting astronomical point data.
     * @param {object} config - Configuration data
     * @param {string=} config.id - Identifier for the request to the US Naval Observatory
     * @param {Date=} config.date - Observation Date. If not specified use current time.
     * @param {object} config.location - Location for the astronomical data.
     * @param {number} config.location.latitude - Latitude
     * @param {object} config.location.longitude - longitude
     * @throws {TypeError} - Thrown if 'config' is invalid.
     * @throws {RangeError} - Thrown if 'config' is invalid.
     * @returns {void}
     * @fires module:AstronomicalDataAPIModule#event:busy
     * @fires module:AstronomicalDataAPIModule#event:request_complete
     */
    RequestAstronomicalOneDayData(config) {
        // Validate arguments
        if (_is.not.undefined(config)) {
            if (_is.not.object(config)) {
                throw new TypeError(`Invalid configuration.`);
            }
            if (_is.not.undefined(config.id) && _is.not.string(config.id)) {
                throw new RangeError(`Invalid configuration. ID=${config.id}`);
            }
            if (_is.not.undefined(config.date) && _is.not.date(config.date)) {
                throw new RangeError(`Invalid configuration. Date=${config.date}`);
            }
            // Validate the location
            // eslint-disable-next-line new-cap
            AstroDataRSTOneDay.CheckLocation(config);
        }
        else {
            throw new TypeError(`config is unspecified.`);
        }

        // Append the id field to the configuration.
        if (_is.undefined(config.id)) {
            config.id = `GTAstro`;
        }

        // Initiate the request
        // eslint-disable-next-line new-cap
        this._astroRSTOneDay.RequestAstronomicalOneDayData(config);
    }

    /**
     * @description Validates the location specified.
     * @param {object} location - Location for the astronomical data.
     * @param {number} location.latitude - Latitude
     * @param {object} location.longitude - longitude
     * @returns {boolean} - true if the specified location is valid.
     */
    IsLocationValid(location) {
        let valid = false;

        try {
            // eslint-disable-next-line new-cap
            AstroDataRSTOneDay.CheckLocation({location: location});
            valid = true;
        }
        finally {
            // Nothing to do.
        }

        return valid;
    }

    /**
     * @description - Event handler indicating a change in the 'processing' state.
     * @param {object} e - Event notification data
     * @param {boolean} e.processing - Flag indicating the astronomical data is being updated.
     * @returns {void}
     * @private
     */
    _handleRSTDataProcessing(e) {
        // Clear the pending flag
        this._pending = false;
        // Cache the busy flag.
        this._busy = e.processing;

        // Pass along the event
        setImmediate(() => {
            this.emit(API_ASTRONOMICAL_DATA_EVENTS.API_EVENT_DATA_BUSY, {busy: this._busy});
        });
    }

    /**
     * @description - Event handler to process the astronomical request results.
     * @param {object} e - Event notification data
     * @param {boolean} e.status - Error indicator (false==no error)
     * @returns {void}
     * @private
     */
    _handleRSTDataProcessComplete(e) {
        const result = {status: e.status, data: this._astroRSTOneDay.ObjectData};

        // Pass along the response
        setImmediate(() => {
            this.emit(API_ASTRONOMICAL_DATA_EVENTS.API_EVENT_DATA_REQUEST_COMPLETE, result);
        });
    }
}
