ion-ripple
==============

[![Bower version](https://badge.fury.io/bo/ion-ripple.svg)](https://badge.fury.io/bo/ion-ripple)
[![npm version](https://badge.fury.io/js/ion-ripple.svg)](https://badge.fury.io/js/ion-ripple)
[![devDependency Status](https://david-dm.org/vitaliy-bobrov/ion-ripple/dev-status.svg)](https://david-dm.org/vitaliy-bobrov/ion-ripple#info=devDependencies)

A pure javascript (no polymer, no jQuery) Ionic directive that adds a Google Material Design ripple effect when clicked or touched based on [angular-ripple](https://github.com/nelsoncash/angular-ripple).

## Bower

  ```bash
  bower install --save ion-ripple
  ```

## NPM

  ```bash
  npm install --save ion-ripple
  ```

## Usage

Include the script in your HTML

  ```html
  <link href="lib/ion-ripple/ion-ripple.css" rel="stylesheet">
  <script src="lib/ion-ripple/ion-ripple.min.js"></script>
  ```

Also you can import ripple `scss` file into your app styles

  `@import '../lib/ion-ripple/ion-ripple';`

There are some default *SASS* variables available that can be overriden:

  ```
  $ion-ripple-color: #fff !default;
  $ion-ripple-duration: .45s !default;
  ```

Then include `ionMDRipple` in your module dependencies

  ```js
  angular.module('app', ['ionMDRipple']);
  ```

Then add the `ion-ripple` attribute to elements

  ```html
  <button ion-ripple>Ripple!</button>
  ```

Also you can specify ripple effect color with `ion-ripple-color` attribute.

  ```html
  <button ion-ripple ion-ripple-color="#ff0000">Ripple!</button>
  ```
