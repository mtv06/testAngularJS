angular.module('chartBlock').component('chartBlock', {
  bindings: {
    typeLine: '=?',
    blockLine: '<',
    bindType: '=',
    chartOptions: '<',
    sensorBlocks: '<',
    chartDataTemperature: '<',
    chartDataHumidity: '<',
    chartDataLight: '<',
    chartDataPressure: '<'
  },
  template: require('./chartBlock.template.html')
})
