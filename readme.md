# Vue Responsive Image Helpers
This is just a simple vue plugin to make working with (responsive) images a bit easier.

Keep in mind that it is meant mostly for personal use, and it is at the moment tailored for Bulma's breakpoints and imgix API.

## Usage
The plugin adds 3 simple utility functions to the Vue global scope which helps you create values for img  src, srcset, and sizes attributes.
### ``$createSrc(src, [options])``
* **src**: Base URL for the image
* **[options]**: ``{width = 1600, fit = 'crop', heightRatio = .5625, suffix = ''}`` 
### ``$createSrcSet(src, [options])``
* **src**: Base URL for the image
* **[options]**: ``{fit = 'crop', heightRatio = .5625, max = 1600, min = 100, increment = 100, suffix = ''}``
### ``$createSizes([options])``
* **[options]**: ``{desktop = '50vw', tablet = '75vw', mobile = '100vw'}``

Sorry for the simple documentation. Then again it's mostly meant for personal use.
