# Astro Data

[Astro Data](https://github.com/pricemi115/grumptech-astrodata), by [GrumpTech](https://github.com/pricemi115/), is a module that provides astronomical event data, like sunrise and sunset.</br>
This module makes use of the application programming interface (API) provided by the [United States Naval Observatory](https://aa.usno.navy.mil/data/api).

## Change Log
The change history can be viewed [here](./CHANGELOG.md)

## Security Policy
Please refer to our [security policy](./SECURITY.md) for information on which versions are receiving security updates and how to report security vulnerabilities.

## Installation

To install the plugin:
<br>_`npm install grumptech-astrodata`_

## Usage
The module allows the user to query for astronomical evend data for the specified day.</br>
Please refer to the [documentation](./docs/index.html) for details.
### API
The module provides the following application programming interface.
* **Version**: Read only property for the module version.
* **RSTOneDayData**: Read only property for the result of the most recent request for One Day Data.
* **RequestAstronomicalOneDayData**: Initiates a request for astronomical data according to the API provided by the [United States Naval Observatory](https://aa.usno.navy.mil/data/api).
* **IsLocationValid**: Validates the location latitude and longitude provided.
### Events
The module publishes the following events:
* **API_ASTRONOMICAL_DATA_EVENTS.API_EVENT_DATA_BUSY** ('busy'): Event fired when the busy state changes.
* **API_ASTRONOMICAL_DATA_EVENTS.API_EVENT_DATA_REQUEST_COMPLETE** ('request_complete'): Event fired when the request has been processed.

## Known Issues and Planned Enhancements
Refer to the bugs and enhancements listed [here](https://github.com/pricemi115/grumptech-astrodata/issues)

## Contributing
1. Fork it!
2. Create your feature/fix branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits
Many thanks to the [Astronomical Applications Department of the United States Naval Observatory](https://aa.usno.navy.mil) for making this API available to the general public.

## License
Refer to [LICENSE.md](./LICENSE.md) for information regarding licensincg of this source code.
