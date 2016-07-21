<template>
    <canvas class="chartjs" :width="width" :height="height"></canvas>
</template>

<script>
    // import Chart from 'chart.js' // With moment.js
    import Chart from 'chart.js/dist/Chart' // Without moment.js
    const types = ['line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut']

    export default {

        props: {
            width: Number,
            height: Number,
            type: {
                type: String,
                required: true,
                validator (value) {
                    return types.indexOf(value) > -1
                }
            },
            data: {
                type: Object,
                required: true,
                default () {
                    return {}
                }
            },
            options: {
                type: Object,
                default () {
                    return {}
                }
            }
        },

        ready () {
            console.log(this.type, 'type')
            console.log(this.data, 'data')
            console.log(this.options, 'options')
            this.showChart();
        },
        ceated() {
            console.log('ceated')
//            this.chart.update()
        },
        data () {
            return {
                chart: null
            }
        },
        methods: {
            showChart() {
                const $el = this.$el
                this.chart = new Chart($el, {
                    type: this.type,
                    data: this.data,
                    options: this.options
                })
            },
        },
        watch: {
            data (val) {
                this.$nextTick((val) => {
                    // this.chart.data.datasets = val.datasets
                     this.chart.type = this.type
                    this.chart.update();
            })
            }
        }
    }
</script>

<style lang="scss">
    canvas.chartjs {
        max-width: 100%;
    }
</style>