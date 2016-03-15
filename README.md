ion-ripple
==============

A pure javascript (no polymer, no jQuery) Ionic directive that adds a Google Material Design ripple effect when clicked or touched based on [angular-ripple](https://github.com/nelsoncash/angular-ripple).

## Bower

  ```bash
  bower install --save ion-ripple
  ```


## Usage

Include the script in your HTML

  ```html
  <link href="lib/ion-ripple/ion-ripple.css" rel="stylesheet">
  <script src="lib/ion-ripple/ion-ripple.min.js"></script>
  ```

Then include `ionMDRipple` in your module dependencies

  ```js
  angular.module('app', ['ionMDRipple']);
  ```

Then add the `ion-ripple` attribute to elements

  ```html
  <button ion-ripple>Ripple!</button>
  ```

## License
The MIT License

Copyright (c) 2016 Vitaliy Bobrov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
