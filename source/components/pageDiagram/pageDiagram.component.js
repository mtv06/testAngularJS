angular.module('pageDiagram').component('pageDiagram', {
  bindings: {
    values: '<',
    typeLine: '='
  },
  template: require('./pageDiagram.template.html'),
  controller: function ($scope) {
    var $ctrl = this;
    let filterChartDataTemperatureSensor = []
    let filterChartDataHumiditySensor = []
    let filterChartDataLightSensor = []
    let filterChartDataPressureSensor = []
    $ctrl.sensorBlocks = [{ name: 0 }]

    this.$onInit = () => {
      this.dateStart = new Date('01.01.2019')
      this.dateEnd =  new Date()
      this.chart1Visible = true
      this.chart2Visible = false
      this.chart3Visible = false
      this.chart4Visible = false
      this.drawDiagram()
    }

    this.chart1Click = () => {
      $ctrl.chart1Visible = !$ctrl.chart1Visible
    }

    this.chart2Click = () => {
      $ctrl.chart2Visible = !$ctrl.chart2Visible
    }

    this.chart3Click = () => {
      $ctrl.chart3Visible = !$ctrl.chart3Visible
    }

    this.chart4Click = () => {
      $ctrl.chart4Visible = !$ctrl.chart4Visible
    }

    this.changeSensorChart = (diagram) => {
      if (diagram.series[0].name == 'Temperature') {
        diagram.series[0].setData(filterChartDataTemperatureSensor)
      } else if (diagram.series[0].name == 'Humidity') {
        diagram.series[0].setData(filterChartDataHumiditySensor)
      } else if (diagram.series[0].name == 'Light') { 
        diagram.series[0].setData(filterChartDataLightSensor)
      } else if (diagram.series[0].name == 'Pressure') {
        diagram.series[0].setData(filterChartDataPressureSensor)
      }
      diagram.redraw()
    }

    this.dateClick = () => {
      let date_start = this.dateStart.valueOf()
      let date_end = this.dateEnd.valueOf()
      filterChartDataTemperatureSensor = chartDataTemperatureSensor.filter(number => number[0] > date_start &  number[0] < date_end)
      filterChartDataHumiditySensor = chartDataHumiditySensor.filter(number => number[0] > date_start &  number[0] < date_end)
      filterChartDataLightSensor = chartDataLightSensor.filter(number => number[0] > date_start &  number[0] < date_end)
      filterChartDataPressureSensor = chartDataPressureSensor.filter(number => number[0] > date_start &  number[0] < date_end)
      this.changeSensorChart(diagram1)
      this.changeSensorChart(diagram2)
      this.changeSensorChart(diagram3)
      this.changeSensorChart(diagram4)
    }

    this.drawDiagram = () => {
      chartDataTemperatureSensor = $scope.$ctrl.values['dataTemperatureSensor']
      chartDataHumiditySensor = $scope.$ctrl.values['dataHumiditySensor']
      chartDataLightSensor = $scope.$ctrl.values['dataLightSensor']
      chartDataPressureSensor = $scope.$ctrl.values['dataPressureSensor']
      $ctrl.chartDataTemperature = chartDataTemperatureSensor
      $ctrl.chartDataHumidity = chartDataHumiditySensor
      $ctrl.chartDataLight = chartDataLightSensor
      $ctrl.chartDataPressure = chartDataPressureSensor

      chartOptions1 = {
        chart: {
          renderTo: 'container1',
          number: 1
        },
        title: {
          text: 'Chart1'
        },
        rangeSelector: {
          verticalAlign: 'top',
          x: 0,
          y: 0
        },
        yAxis: {
          opposite: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
              overflow: 'justify'
          }
        },
        legend: {
          enabled: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',			
          x: -10,
          y: 60,
            itemStyle: {padding: '10px'}
        },
        series: [
          {
            name: 'Temperature',
            color: 'black',
            data: chartDataTemperatureSensor,
            type: 'line',
            tooltip: {
              valueDecimals: 2
            },
            visible: true
          }
        ]
      }

      diagram1 = new Highcharts.chart(chartOptions1)
      $ctrl.chartOptions1 = chartOptions1
      $ctrl.chartNumber = 'chart1'
      diagram1.redraw()

      chartOptions2 = {
        chart: {
          renderTo: 'container2',
          number: 2
        },
        title: {
          text: 'Chart2'
        },
        rangeSelector: {
          verticalAlign: 'top',
          x: 0,
          y: 0
        },
        yAxis: {
          opposite: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
              overflow: 'justify'
          }
        },
        legend: {
          enabled: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',			
          x: -10,
          y: 60,
            itemStyle: {padding: '10px'}
        },
        series: [
          {
            name: 'Temperature',
            color: 'black',
            data: chartDataTemperatureSensor,
            type: 'line',
            tooltip: {
              valueDecimals: 2
            },
            visible: true
          }
        ]
      }

      diagram2 = new Highcharts.chart(chartOptions2)
      $ctrl.chartOptions2 = chartOptions2
      $ctrl.chartNumber = 'chart2'
      diagram2.redraw()

      chartOptions3 = {
        chart: {
          renderTo: 'container3',
          number: 3
        },
        title: {
          text: 'Chart3'
        },
        rangeSelector: {
          verticalAlign: 'top',
          x: 0,
          y: 0
        },
        yAxis: {
          opposite: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
              overflow: 'justify'
          }
        },
        legend: {
          enabled: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',			
          x: -10,
          y: 60,
            itemStyle: {padding: '10px'}
        },
        series: [
          {
            name: 'Temperature',
            color: 'black',
            data: chartDataTemperatureSensor,
            type: 'line',
            tooltip: {
              valueDecimals: 2
            },
            visible: true
          }
        ]
      }

      diagram3 = new Highcharts.chart(chartOptions3)
      $ctrl.chartOptions3 = chartOptions3
      $ctrl.chartNumber = 'chart3'
      diagram3.redraw()

      chartOptions4 = {
        chart: {
          renderTo: 'container4',
          number: 4
        },
        title: {
          text: 'Chart4'
        },
        rangeSelector: {
          verticalAlign: 'top',
          x: 0,
          y: 0
        },
        yAxis: {
          opposite: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
              overflow: 'justify'
          }
        },
        legend: {
          enabled: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',			
          x: -10,
          y: 60,
            itemStyle: {padding: '10px'}
        },
        series: [
          {
            name: 'Temperature',
            color: 'black',
            data: chartDataTemperatureSensor,
            type: 'line',
            tooltip: {
              valueDecimals: 2
            },
            visible: true
          }
        ]
      }

      diagram4 = new Highcharts.chart(chartOptions4)
      $ctrl.chartOptions4 = chartOptions4
      $ctrl.chartNumber4 = 'chart4'
      diagram4.redraw()
    }
  }
})
