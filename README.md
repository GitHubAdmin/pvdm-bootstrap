# pvdm-bootstrap

*pvdm-bootstrap* is a base build of the [Bootstrap](http://getbootstrap.com) library with a custom theme to provide a cross application color palette and widgets. The intent is to import this library in all apps as a foundation for the UI and then build on it with custom components and styles specific for each app.

DO NOT edit *bootstrap.css*. Instead upload the *config.json* file to the URL below and update the configuration. Then download the new *config.json*/*bootstrap.css* files and overwrite this repo's copies.

Generate a new lib here:
http://getbootstrap.com/customize/?id=5a6369443d2a96a8f610. 

## /src/bootstrap-overrides

*/bootstrap-overrides* provides overrides to the base styles of the bootstrap library that can't be applied through a custom build configuration via http://getbootstrap.com/customize/

Only edit these files if the changes are intended for ALL apps using the library. For app/component specific styles, create them within the app/component itself.

## /src/helpers

*/src/helpers* provides reusable helper files for components.
