'use strict'

require('bootstrap/dist/css/bootstrap.css')
require('angular')
require('@uirouter/angularjs/release/angular-ui-router.min')
require('angular-moment/angular-moment.min')

require('pageDiagram/pageDiagram.module')
require('chartSettings/chartSettings.module')
require('chartBlock/chartBlock.module')
require('diagram/diagram.module')

var app = angular.module('app', ['ui.router', 'angularMoment', 'pageDiagram', 'chartSettings', 'chartBlock', 'Diagram'])

app
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('diagram', require('diagram/diagram.state'))
  })
  .run()
