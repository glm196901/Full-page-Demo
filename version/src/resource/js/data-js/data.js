/**
 * Created by mac on 2017/6/13.
 */
const myIcon = echarts.init(document.getElementById('icon'));
const option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.28, 0.15],
        radius: '40%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#2c3e50',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    return '数据可视化\nLiquid Fill ';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#D94854'
                }
            }
        }
    }]

};
myIcon.setOption(option);

//-----------------------------------------------------------------
// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('bar'));
const option1 = {
    title: {
        text: '前端技能条形图'
    },
    tooltip: {},
    legend: {
        data:['技能条']
    },
    xAxis: {
        data: ["h5+css3+js","jQuery","node.js","Mysql","Vue.js","linux"]
    },
    yAxis: {},
    series: [{
        name: '技能条',
        type: 'bar',
        data: [30, 20, 10, 10, 10, 20],
        color:['#00cc99','#fffff']
    }]
};
myChart.setOption(option1);
//-------------------------------------------------------------------
const words = echarts.init(document.getElementById('word'));
const option2 = {
    title: {
        text: '前端技术工具使用词云图'
    },
    tooltip: {},
    series: [ {
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [30, 80],
        rotationRange: [-90, 90],
        shape: 'pentagon',
        width: 700,
        height: 550,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: 'Sass',
                value: 2989,
                textStyle: {
                    normal: {
                        color: 'black'
                    },
                    emphasis: {
                        color: 'red'
                    }
                }
            },
            {
                name: 'Less',
                value: 478
            },
            {
                name: 'Stylus',
                value: 137
            },
            {
                name: 'PostCSS',
                value: 392
            },
            {
                name: 'No Preprocessor',
                value: 643
            },
            {   name: 'native JavaScript',
                value: 985
            },
            {
                name: 'jQuery',
                value: 4096
            },
            {
                name: 'Underscore',
                value: 1756
            },
            {
                name: 'Lodash',
                value: 1776
            },
            {
                name: 'Backbone',
                value: 686
            },
            {
                name: 'Angular 1',
                value: 1353
            },
            {
                name: 'Angular 2',
                value: 251
            },
            {
                name: 'Ember',
                value: 289
            },
            {
                name: 'React',
                value: 1363
            },
            {
                name: 'Polymer',
                value: 95
            },
            {
                name: 'Aurelia',
                value: 144
            },
            {
                name: 'MeteorJS',
                value: 133
            },
            {
                name: 'Knockout',
                value: 360
            },
            {
                name: 'Vue.js',
                value: 267
            },
            {
                name: 'RequireJS',
                value: 359
            },
            {
                name: 'I don’t use a module bundler',
                value: 1516
            },
            {
                name: 'Browserify-bundler',
                value: 510
            },
            {
                name: 'Webpack-bundler',
                value: 1962
            },
            {
                name: 'Rollup-bundler',
                value: 79
            },
            {
                name: 'JSPM-bundler',
                value: 108
            },
            {
                name: 'JSLint-linter',
                value: 894
            },
            {
                name: 'use none js linter',
                value: 1076
            },
            {
                name: 'JSHint-linter',
                value: 657
            },
            {
                name: 'ESLint-linter',
                value: 1927
            },
            {
                name: 'no test my JS',
                value: 2241
            },
            {
                name: 'Jasmine-test',
                value: 802
            },
            {
                name: 'Mocha-test',
                value: 1061
            },
            {
                name: 'Tape-test',
                value: 69
            },
            {
                name: 'Ava-test',
                value: 84
            },
            {
                name: 'QUnit-test',
                value: 199
            },
            {
                name: 'Jest-test',
                value: 164
            },
            {
                name: 'NPM',
                value: 3776
            },
            {
                name: 'Bower',
                value: 1989
            },
            {
                name: 'Yarn-tool',
                value: 647
            },
            {
                name: 'Babel',
                value: 1862
            },
            {
                name: 'Yeoman',
                value: 634
            },
            {
                name: 'TypeScript',
                value: 609
            }
        ]
    } ]
};
words.setOption(option2);
window.onresize = words.resize;
//-------------------------------------------------------------------
const mygeoCoorddata = echarts.init(document.getElementById('geoCoorddata'));
let geoCoorddata = {
        '武汉': [114.30539299999998, 30.593099],
        '深圳': [114.05786499999999, 22.543096],
        '北京': [116.40739499999995, 39.904211],
        '阿克苏': [80.26338699999997, 41.167548]
    },
    option3 = {
        bmap: {
            center: [113.65, 34.76],
            zoom: 5,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'land', //调整土地颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#081734'
                    }
                }, {
                    'featureType': 'building', //调整建筑物颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#04406F'
                    }
                }, {
                    'featureType': 'building', //调整建筑物标签是否可视
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway', //调整高速道路颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#015B99'
                    }
                }, {
                    'featureType': 'highway', //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial', //调整一些干道颜色
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#003051'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#044161'
                    }
                }, {
                    'featureType': 'subway', //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#003051'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'all', //调整所有的标签的边缘颜色
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#313131'
                    }
                }, {
                    'featureType': 'all', //调整所有标签的填充颜色
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#FFFFFF'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -65
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'lightness': -40
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#8b8787',
                        'weight': '1',
                        'lightness': -29
                    }
                }]
            }
        },
        series: [{
            type: 'lines',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 1,
            data: [{
                name: '武汉',
                toname: '北京',
                coords: [geoCoorddata['武汉'], geoCoorddata['北京']]
            }, {
                name: '深圳',
                toname: '北京',
                coords: [geoCoorddata['深圳'], geoCoorddata['北京']]
            }, {
                name: '阿克苏',
                toname: '北京',
                coords: [geoCoorddata['阿克苏'], geoCoorddata['北京']]
            }],
            //线上面的动态特效
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 4
            },
            lineStyle: {
                normal: {
                    width: '',
                    color: '#a6c84c',
                    curveness: 0.2
                }
            }
        }, {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 3,
            data: [{
                name: '北京',
                value: geoCoorddata['北京'].concat(200)
            }, ],
            rippleEffect: {
                period: 10,
                scale: 5,
                brushType: 'fill'
            },
        }]
    };
mygeoCoorddata.setOption(option3);