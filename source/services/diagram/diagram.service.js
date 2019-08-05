'use strict'

module.exports = angular.module('Diagram').service('Diagram', [
    'moment',
    function (moment) {

        this.list = () => {
            return this.generateRandomData()
        }

        this.randomData = day => {
            let arr = []
            const randomArray = (length, max) => Math.round(Math.random() * max)
            let date = moment([2019, 1, 1]).add(day, 'day').valueOf()
            let value = randomArray(20, 100)
            arr.push(date, value)
            return arr
        }

        this.generateRandomData = () => {
            let arr_data = []
            for (let i = 0; i < 200; i++) {
                arr_data.push(this.randomData(i))
            }
            return arr_data
        }
    },
])