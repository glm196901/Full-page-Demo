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
/*
================================ pie ==================================
*/
const pies = echarts.init(document.getElementById('pie'));

let labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
let labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
};
let labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
let radius = [40, 55];
option3 = {
    legend: {
        x : 'center',
        y : 'center',
        data:[
            '机器学习','数据挖掘','人工智能','自然语言处理+','Web技术',
            '服务端技术', '产品', '设计', '开发', '人才优势'
        ]
    },
    title : {
        text: '优势饼图一览',
        subtext: '我们的实力',
        x: 'center'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (params){
                                        return 'other\n' + params.value + '%\n'
                                    },
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        }
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:46, itemStyle : labelBottom},
                {name:'机器学习', value:54,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:44, itemStyle : labelBottom},
                {name:'数据挖掘', value:56,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '30%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:35, itemStyle : labelBottom},
                {name:'人工智能', value:65,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:30, itemStyle : labelBottom},
                {name:'自然语言处理', value:70,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '30%'],
            radius : radius,
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:27, itemStyle : labelBottom},
                {name:'Web技术', value:73,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['10%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x: '0%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:22, itemStyle : labelBottom},
                {name:'服务端技术', value:78,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'20%',    // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:22, itemStyle : labelBottom},
                {name:'产品', value:78,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:22, itemStyle : labelBottom},
                {name:'设计', value:78,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:17, itemStyle : labelBottom},
                {name:'开发', value:83,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['90%', '70%'],
            radius : radius,
            y: '55%',   // for funnel
            x:'80%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:11, itemStyle : labelBottom},
                {name:'人才优势', value:89,itemStyle : labelTop}
            ]
        }
    ]
};
pies.setOption(option3);


/*
 ================================ map ==================================
 */

const geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};
$(function(){
    var migration =  echarts.init(document.getElementById('migration'));


    var BJData = [
        [{name:'北京'}, {name:'大连',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'包头',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'常州',value:10}],
        [{name:'广州'},{name:'福州',value:95}],
        [{name:'广州'},{name:'太原',value:90}],
        [{name:'广州'},{name:'长春',value:80}],
        [{name:'广州'},{name:'重庆',value:70}],
        [{name:'广州'},{name:'西安',value:60}],
        [{name:'广州'},{name:'成都',value:50}],
        [{name:'广州'},{name:'常州',value:40}],
        [{name:'广州'},{name:'北京',value:30}],
        [{name:'广州'},{name:'北海',value:20}],
        [{name:'广州'},{name:'海口',value:10}],
        [{name:'上海'},{name:'包头',value:95}],
        [{name:'上海'},{name:'昆明',value:90}],
        [{name:'上海'},{name:'广州',value:80}],
        [{name:'上海'},{name:'郑州',value:70}],
        [{name:'上海'},{name:'长春',value:60}],
        [{name:'上海'},{name:'重庆',value:50}],
        [{name:'上海'},{name:'长沙',value:40}],
        [{name:'上海'},{name:'北京',value:30}],
        [{name:'上海'},{name:'丹东',value:20}],
        [{name:'上海'},{name:'大连',value:10}]
    ];
    /*var BJData = [
     [{name:'成都'},{name:'潍坊',value:5}],
     [{name:'潍坊'},{name:'西宁',value:5}],
     [{name:'西宁'},{name:'温州',value:5}],
     [{name:'温州'},{name:'东莞',value:5}],
     [{name:'东莞'},{name:'汕头',value:5}],
     [{name:'汕头'},{name:'福州',value:5}],
     [{name:'福州'},{name:'连云港',value:5}],
     [{name:'连云港'},{name:'长春',value:5}],
     [{name:'长春'},{name:'南昌',value:5}],
     [{name:'南昌'},{name:'咸阳',value:5}],
     [{name:'咸阳'},{name:'廊坊',value:5}],
     [{name:'廊坊'},{name:'沈阳',value:5}],
     [{name:'沈阳'},{name:'西安',value:5}],
     [{name:'西安'},{name:'南京',value:5}],
     [{name:'南京'},{name:'连云港',value:5}],
     [{name:'连云港'},{name:'深圳',value:5}],
     [{name:'深圳'},{name:'泰安',value:5}],
     [{name:'泰安'},{name:'武汉',value:5}],
     [{name:'武汉'},{name:'昆明',value:5}],
     [{name:'昆明'},{name:'南京',value:5}],
     [{name:'南京'},{name:'武汉',value:5}],
     [{name:'武汉'},{name:'烟台',value:5}],
     [{name:'烟台'},{name:'长春',value:5}],
     [{name:'长春'},{name:'贵阳',value:5}],
     [{name:'贵阳'},{name:'宿迁',value:5}],
     [{name:'宿迁'},{name:'徐州',value:5}],
     [{name:'徐州'},{name:'丽水',value:5}],
     [{name:'丽水'},{name:'长沙',value:5}],
     [{name:'长沙'},{name:'沧州',value:5}],
     [{name:'沧州'},{name:'盐城',value:5}],
     [{name:'盐城'},{name:'宁波',value:5}],
     [{name:'宁波'},{name:'宁波',value:5}],
     [{name:'宁波'},{name:'泰安',value:5}],
     [{name:'泰安'},{name:'厦门',value:5}],
     [{name:'厦门'},{name:'保定',value:5}],
     [{name:'保定'},{name:'宿迁',value:5}],
     [{name:'宿迁'},{name:'深圳',value:5}],
     [{name:'深圳'},{name:'贵阳',value:5}],
     [{name:'贵阳'},{name:'金华',value:5}],
     [{name:'金华'},{name:'肇庆',value:5}],
     [{name:'肇庆'},{name:'金华',value:5}],
     [{name:'金华'},{name:'苏州',value:5}],
     [{name:'苏州'},{name:'东莞',value:5}],
     [{name:'东莞'},{name:'惠州',value:5}],
     [{name:'惠州'},{name:'邯郸',value:5}],
     [{name:'邯郸'},{name:'玉溪',value:5}],
     [{name:'玉溪'},{name:'中山',value:5}],
     [{name:'中山'},{name:'乌鲁木齐',value:5}],
     [{name:'乌鲁木齐'},{name:'廊坊',value:5}],
     [{name:'廊坊'},{name:'廊坊',value:5}]
     ];*/
    var SHData = [
        [{name:'上海'},{name:'包头',value:95}],
        [{name:'上海'},{name:'昆明',value:90}],
        [{name:'上海'},{name:'广州',value:80}],
        [{name:'上海'},{name:'郑州',value:70}],
        [{name:'上海'},{name:'长春',value:60}],
        [{name:'上海'},{name:'重庆',value:50}],
        [{name:'上海'},{name:'长沙',value:40}],
        [{name:'上海'},{name:'北京',value:30}],
        [{name:'上海'},{name:'丹东',value:20}],
        [{name:'上海'},{name:'大连',value:10}]
    ];

    var GZData = [
        [{name:'广州'},{name:'福州',value:95}],
        [{name:'广州'},{name:'太原',value:90}],
        [{name:'广州'},{name:'长春',value:80}],
        [{name:'广州'},{name:'重庆',value:70}],
        [{name:'广州'},{name:'西安',value:60}],
        [{name:'广州'},{name:'成都',value:50}],
        [{name:'广州'},{name:'常州',value:40}],
        [{name:'广州'},{name:'北京',value:30}],
        [{name:'广州'},{name:'北海',value:20}],
        [{name:'广州'},{name:'海口',value:10}]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
        series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.3,//小尾巴长度
                    color: '#fff',//颜色
                    symbolSize: 3//线条粗细
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });

 const  option4 = {
        backgroundColor: '#404a59',
        title : {
            text: '模拟迁徙',
            subtext: '数据纯属虚构',
            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false//鼠标悬停是否显示地名
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    migration.setOption(option4);
});

