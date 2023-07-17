/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable brace-style */
/* eslint-disable semi */
/* eslint-disable new-cap */
import {AstronomicalDataAPI, API_ASTRONOMICAL_DATA_EVENTS} from '../main.mjs';
import _is from 'is-it-check';

describe('Module-level tests', ()=>{
    test('Module API export expected value', ()=>{
        const astroDataAPI = new AstronomicalDataAPI();
        expect(astroDataAPI).toBeInstanceOf(AstronomicalDataAPI);
    });
});

describe('AstronomicalDataAPI class tests', ()=>{
    describe('Instance function/property valid tests', ()=>{
        let astroDataAPI;
        beforeAll(()=>{
            astroDataAPI = new AstronomicalDataAPI();
        });
        // API Tests
        test('Version', ()=>{
            expect(astroDataAPI).toHaveProperty('Version');
        });
        test('RSTOneDayData', ()=>{
            expect(astroDataAPI).toHaveProperty('RSTOneDayData');
        });
    });

    describe('Astronomical Instance functionality tests', ()=>{
        describe.each([
            ['US_NorthEast-Today', {location: {latitude: 42, longitude: -71.25}}, true, new Date(), 'Point'],
            ['US_NorthEast-TodayAlt', {date: new Date(), location: {latitude: 42, longitude: -71.25}}, true, new Date(), 'Point'],
            ['US_SouthWest-Tomorrow', {date: new Date(Date.now() + (1.0*24.0*3600.0*1000.0)), location: {latitude: 33.5, longitude: -112.08}}, true, new Date(Date.now() + (1.0*24.0*3600.0*1000.0)), 'Point'],
            ['Germany-Yesterday', {date: new Date(Date.now() + (-1.0*24.0*3600.0*1000.0)), location: {latitude: 52.0, longitude: 12.0}}, true, new Date(Date.now() + (-1.0*24.0*3600.0*1000.0)), 'Point'],
            ['Austrailia-NextWeek', {date: new Date(Date.now() + (7.0*24.0*3600.0*1000.0)), location: {latitude: -30.0, longitude: 135.0}}, true, new Date(Date.now() + (7.0*24.0*3600.0*1000.0)), 'Point'],
        ])('Astro Tests.', (desc, config, expectedValid, expectedDate, expectedType) =>{
            test(desc, done =>{
                function handleDataProcessing(e) {
                    // processing
                    expect(e).toHaveProperty('busy');

                    processingNotifications.push(e.busy);

                    if (e.busy) {
                        // Valid
                        expect(astroData._astroRSTOneDay.Valid).toBe(false);
                    }
                }

                function handleDataComplete(e) {
                    // status
                    expect(e).toHaveProperty('status');
                    // data
                    expect(e).toHaveProperty('data');
                    expect(e.data).toHaveProperty('valid');
                    expect(e.data).toHaveProperty('version');
                    expect(e.data).toHaveProperty('type');
                    expect(e.data).toHaveProperty('date');
                    expect(e.data).toHaveProperty('latitude');
                    expect(e.data).toHaveProperty('longitude');
                    expect(e.data).toHaveProperty('lunar_phase');
                    expect(e.data).toHaveProperty('twilight_start');
                    expect(e.data).toHaveProperty('twilight_end');
                    expect(e.data).toHaveProperty('solar_rise');
                    expect(e.data).toHaveProperty('solar_set');
                    expect(e.data).toHaveProperty('solar_transit');
                    expect(e.data).toHaveProperty('lunar_rise');
                    expect(e.data).toHaveProperty('lunar_set');
                    expect(e.data).toHaveProperty('lunar_transit');

                    // Validate Processing Notifications
                    expect(processingNotifications).toHaveLength(2);
                    expect(processingNotifications).toEqual([true, false]);

                    // Valid
                    expect(e.data.valid).toBe(expectedValid);

                    if (e.data.valid) {
                        // Type
                        expect(e.data.type).toBe(expectedType);

                        // Date
                        const date = e.data.date;
                        const expDate = new Date(expectedDate.toDateString());
                        expect(date).toEqual(expDate);

                        // Latitude
                        expect(Math.abs(e.data.latitude-config.location.latitude)).toBeLessThanOrEqual(0.001);

                        // Longitude
                        expect(Math.abs(e.data.longitude-config.location.longitude)).toBeLessThanOrEqual(0.001);
                    }
                    else {
                        expect(e.data.type).toBe(undefined);
                        expect(e.data.date).toBe(undefined);
                        expect(e.data.latitude).toBe(undefined);
                        expect(e.data.longitude).toBe(undefined);
                    }

                    done();
                };

                // Initiate the test.
                const processingNotifications = [];
                const astroData = new AstronomicalDataAPI();
                astroData.on(API_ASTRONOMICAL_DATA_EVENTS.API_EVENT_DATA_BUSY, handleDataProcessing);
                astroData.on(API_ASTRONOMICAL_DATA_EVENTS.API_EVENT_DATA_REQUEST_COMPLETE, handleDataComplete);
                // Decouple the start.
                setImmediate(() => {
                    astroData.RequestAstronomicalOneDayData(config);
                });
            });
        });
    });
});
