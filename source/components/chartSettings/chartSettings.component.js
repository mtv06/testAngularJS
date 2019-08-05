angular.module('chartSettings').component('chartSettings', {
  bindings: {
    typeLine: '=?',
    blockLine: '<',
    bindType: '=',
    chartOptions: '<',
    block: '<',
    chartDataTemperature: '<',
    chartDataHumidity: '<',
    chartDataLight: '<',
    chartDataPressure: '<',
    chartNumber: '<'
  },
  template: require('./chartSettings.template.html'),
  controller: function () {
    this.$onInit = () => {
      this.typeLine = 'spline'
      this.typeSensor = 'Temperature'
    }

    this.blockColorClick = blockLine => {
      if (this.chartOptions != undefined) {
        let newColor = this.colorLine
        let number = this.chartOptions.chart.number
        this.chartOptions.series[blockLine].color = newColor
        if (number == 1) {
          diagram1 = new Highcharts.chart(this.chartOptions)
          diagram1.redraw()
        } else if (number == 2) {
          diagram2 = new Highcharts.chart(this.chartOptions)
          diagram2.redraw()
        } else if (number == 3) {
          diagram3 = new Highcharts.chart(this.chartOptions)
          diagram3.redraw()
        } else if (number == 4) {
          diagram4 = new Highcharts.chart(this.chartOptions)
          diagram4.redraw()
        }
      }
    }

    this.blockTypeClick = blockLine => {
      if (this.chartOptions != undefined) {
        let newType = this.typeLine
        let number = this.chartOptions.chart.number
        this.chartOptions.series[blockLine].type = newType
        if (number == 1) {
          diagram1 = new Highcharts.chart(this.chartOptions)
          diagram1.redraw()
        } else if (number == 2) {
          diagram2 = new Highcharts.chart(this.chartOptions)
          diagram2.redraw()
        } else if (number == 3) {
          diagram3 = new Highcharts.chart(this.chartOptions)
          diagram3.redraw()
        } else if (number == 4) {
          diagram4 = new Highcharts.chart(this.chartOptions)
          diagram4.redraw()
        }
      }
    }

    this.setTypeSensor = (blockLine) => {
      this.chartOptions.series[blockLine].name = this.typeSensor
      if (this.typeSensor == 'Temperature') {
          this.chartOptions.series[blockLine].data = this.chartDataTemperature
      } else if (this.typeSensor == 'Humidity') {
          this.chartOptions.series[blockLine].data = this.chartDataHumidity
      } else if (this.typeSensor == 'Light') {
          this.chartOptions.series[blockLine].data = this.chartDataLight
      } else if (this.typeSensor == 'Pressure') {
          this.chartOptions.series[blockLine].data = this.chartDataPressure
      }
    }

    this.blockSensorClick = blockLine => {
      if (this.chartOptions != undefined) {
        let number = this.chartOptions.chart.number
        if (number == 1) {
          this.setTypeSensor(blockLine)
          diagram1 = new Highcharts.chart(this.chartOptions)
          diagram1.redraw()
        } else if (number == 2) {
          this.setTypeSensor(blockLine)
          diagram2 = new Highcharts.chart(this.chartOptions)
          diagram2.redraw()
        } else if (number == 3) {
          this.setTypeSensor(blockLine)
          diagram3 = new Highcharts.chart(this.chartOptions)
          diagram3.redraw()
        } else if (number == 4) {
          this.setTypeSensor(blockLine)
          diagram4 = new Highcharts.chart(this.chartOptions)
          diagram4.redraw()
        }   
      }
    }
  }
})
