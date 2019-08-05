module.exports = {
    url: '/',
    component: 'pageDiagram',
    resolve: {
      caption: () => 'Diagram',
      values: (Diagram) =>  ({
        dataTemperatureSensor: Diagram.list(),
        dataHumiditySensor: Diagram.list(),
        dataLightSensor: Diagram.list(),
        dataPressureSensor: Diagram.list()
      })
    }
  }
  