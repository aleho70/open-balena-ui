# User Interface for Open Balena Admin

User interface for [open-balena-admin](https://github.com/dcaputo-harmoni/open-balena-admin), an admin interface for open-balena.

## Dependencies

This project is dependent on [open-balena-postgrest](https://github.com/dcaputo-harmoni/open-balena-postgrest) and [open-balena-remote](https://github.com/dcaputo-harmoni/open-balena-remote), so the easiest way to get this up and running would be to install it via the [open-balena-admin](https://github.com/dcaputo-harmoni/open-balena-admin) project.

## Configuration

There are a number of environment variables used to configure the ui:

- `PORT` - The port that the ui will listen on

- `REACT_APP_OPEN_BALENA_POSTGREST_URL` The URL (accessible to API) of the `open-balena-postgrest` instance, i.e. `http://postgrest.openbalena.local:8000`

- `REACT_APP_OPEN_BALENA_REMOTE_URL` The URL (accessible to API) of the `open-balena-remote` instance, i.e. `http://remote.openbalena.local:10000`

- `REACT_APP_OPEN_BALENA_API_URL` The URL (accessible to API) of the `open-balena-api` instance, i.e. `https://api.openbalena.local`

- `REACT_APP_OPEN_BALENA_API_VERSION` The version of `open-balena-api` that the above instance is running, i.e. `v0.139.0`

## Compatibility

This project is compatible with `open-balena-api` v0.139.0 or newer, all the way up to the current builds (v0.190.0).  See [this project](https://github.com/dcaputo-harmoni/open-balena-helm) for a fork of bartversluijs' open-balena-helm project which has helm scripts to build a current version of `open-balena`.

## Installation

Set the required environment variables accordingly, and run `yarn start` from the main project folder - and you should be up and running.

## Credits

- The [ra-data-postgrest](https://github.com/raphiniert-com/ra-data-postgrest) project was instrumental in establishing the link to the open-balena database
