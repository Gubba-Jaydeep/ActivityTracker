let CHART_COLORS_main = [

    // '#ffOODB',
    'rgb(255,112,67)',
    'rgb(198,255,0)',
    // 'rgb(149,117,205)',
    'rgb(240,98,146)',
    'rgb(255,238,88)',
    'rgb(0,176,255)',

    'rgb(67,160,71)',
    'rgb(141,110,99)',
    'rgb(96,125,139)',


    'rgb(171,71,188)',
    'rgb(33,150,243)',
    'rgb(255,213,79)',
    'rgb(93,64,55)',
    'rgb(55,71,79)',
    'rgb(255,112,67)',
    'rgb(255,235,59)',


    // 'rgb(255, 99, 132)',
    // 'rgb(255, 159, 64)',
    // 'rgb(255, 205, 86)',
    // 'rgb(75, 192, 192)',
    // 'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
    'rgb(118,255,3)',
    'rgb(213,0,249)',
    'rgb(24,255,255)',
    'rgb(109,76,65)',
    // 'rgb(255,255,255)'
];
let CHART_COLORS = [
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
    '#ffffff',
];
const zip = (a, b) => a.map((k, i) => [k, b[i]]);
const arrSum = arr => arr.reduce((a, b) => a + b, 0)
var gradientChartOptionsConfiguration = {
    // maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'left',

    },
    tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
    },
    responsive: true,

    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
};

var gradientBarChartConfiguration = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },

    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{

            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
            },
            ticks: {
                // suggestedMin: 60,
                // suggestedMax: 10,
                beginAtZero: true,
                padding: 20,
                fontColor: "#9e9e9e"
            }
        }],

        xAxes: [{

            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.1)',
                zeroLineColor: "transparent",
            },
            ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
            }
        }]
    }
};
let gradientChartOptionsConfigurationWithTooltipPurple = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },

    tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    responsive: true,
    scales: {
        yAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'rgba(29,140,248,0.0)',
                zeroLineColor: "transparent",
            },
            ticks: {
                // suggestedMin: 60,
                // suggestedMax: 125,
                beginAtZero: true,
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }],

        xAxes: [{
            barPercentage: 1.6,
            gridLines: {
                drawBorder: false,
                color: 'rgba(225,78,202,0.1)',
                zeroLineColor: "transparent",
            },
            ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
            }
        }]
    }
};


function createTimeSavedChart(ctx, data) {
    console.log(data)
    var timeSavedData = {
        // labels: ['Time Saved', 'Post Automation Time', 'Yet To Be Saved', 'Hold', 'Discarded'],
        labels: zip(['Time Saved', 'Post Automation Time', 'Yet To Be Saved', 'Hold', 'Discarded', 'Not Possible'], data).map(a => a[0] + ": " + Math.round((a[1] * 100) / arrSum(data)) + "%"),
        datasets: [{
            label: 'Time',
            data: data.map(a => Math.round(a)),
            backgroundColor: [
                '#ff6600',
                'rgb(142,36,170)',
                'rgb(0,188,212)',
                'rgb(251,192,45)',
                'rgb(198,255,0)',
                'rgb(96,125,139)',
            ],
            borderColor: [
                '#ffffff',
            ],
            hoverOffset: 5
        }]
    }
    var timeSavedChartConfig = {
        type: 'doughnut',
        responsive: true,
        data: timeSavedData,
        options: {
            // maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'right',
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, curData) {
                        var indx = tooltipItem.index
                        return curData.labels[indx] + ': ' + curData.datasets[tooltipItem.datasetIndex].data[indx] + 'Hrs'
                    }
                },
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    // top: 0,
                    bottom: 0
                }
            },
        }
    };

    timeSavedChartConfig.options.plugins = {
        datalabels: {
            display: function (context) {
                return context.dataset.data[context.dataIndex] != 0;
            },
            formatter: function (value, context) {
                // return value + ' Hr/month'
                return value;
            },
            // color: '#ffffff',
            color: 'rgb(0,0,0)',
            font: {
                size: 12,
                weight: 'bold'

            },
        },
    }
    new Chart(ctx, timeSavedChartConfig);
}

function createDocumentedProcessCountChart(ctx, data) {
    var timeSavedData = {
        labels: ['Documented', 'Yet To Be Documented'],
        datasets: [{
            label: 'Count',
            data: data,
            backgroundColor: [
                CHART_COLORS_main[7],
                CHART_COLORS_main[0],
            ],
            borderColor: [
                CHART_COLORS[7],
                CHART_COLORS[0]
            ],
            hoverOffset: 5
        }]
    }
    const config = {
        type: 'pie',
        responsive: true,
        legend: {
            display: false
        },
        data: timeSavedData,
        options: gradientChartOptionsConfiguration
    };
    return new Chart(ctx, config);
}

function createQuaterlyProgressChart(ctx, data) {
    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');

    quaterlyProgressConfig = {
        type: 'bar',
        data: {
            labels: data.map(a => a[0]),
            datasets: [{
                label: "Time Saved(Hrs/month)",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#d346b1',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#d346b1',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#d346b1',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: data.map(a => parseFloat((a[1]).toFixed(2))),
            },
                {
                    label: "Time Saved(Hrs/month)",
                    type: 'line',
                    data: data.map(a => parseFloat((a[1]).toFixed(2))),
                    backgroundColor: 'rgb(0,0,0,0)',
                    borderColor: 'rgb(255,235,59)'
                }


            ]
        },
        options: {
            plugins: {
                datalabels: {
                    display: function (context) {
                        return context.datasetIndex !== 0;
                    },
                    color: 'rgb(0,0,0)',
                    font: {
                        size: 12,
                        weight: 'bold'

                    },
                },
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                callbacks: {
                    label: function (tooltipItem, curData) {
                        if (curData.datasets[tooltipItem.datasetIndex].label === "Time Saved(Hrs/month)") return tooltipItem.yLabel + ' Hrs'
                        else {
                            if (tooltipItem.yLabel === 1) return tooltipItem.yLabel + ' Process'
                            else return tooltipItem.yLabel + ' Processes'
                        }
                    }
                },
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        // suggestedMin: 60,
                        // suggestedMax: 10,
                        beginAtZero: true,
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }],

                xAxes: [{

                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(29,140,248,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9e9e9e"
                    }
                }]
            }
        }
    };
    return new Chart(ctx, quaterlyProgressConfig);
}


function createHourlyLogChart(ctx, data) {

    const config = {
        type: 'bar',
        data: {
            labels: data.map(a => new Date(a[0])),
            datasets: [{
                label: "Pass",
                fill: 'origin',
                backgroundColor: 'rgb(198,255,0)',
                // backgroundColor: 'rgb(94,53,177,0.8)',
                // borderColor: 'rgb(94,53,177, 0.5)',
                data: data.map(a => a[1]),
                pointRadius: 0,
                hitRadius: 15
            },
                {
                    label: "Fail",
                    fill: 'origin',
                    backgroundColor: '#ff6666',
                    // backgroundColor: 'rgb(236,64,122,0.8)',
                    // borderColor: 'rgb(236,64,122,0.5)',
                    data: data.map(a => -1 * a[2]),
                    pointRadius: 0,
                    hitRadius: 15
                }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, curData) {
                        return curData.datasets[tooltipItem.datasetIndex].label + ': ' + Math.abs(tooltipItem.yLabel)
                    }
                }
            },
            legend: {
                display: false
            },
            radius: 0,
            scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {
                        display: true,
                        callback: function (value) {
                            return new Date(value).toLocaleDateString(window.navigator.language, {
                                weekday: 'long'
                            });
                        },
                    }
                }],
                yAxes: [{
                    stacked: false
                }]
            },
            responsive: true,
            plugins: {
                datalabels: {
                    display: false
                },
                legend: {
                    display: false,
                    // position: 'top',
                },
            }
        }
    };
    // console.log(config)
    new Chart(ctx, config);
}

let COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
];


function createVerticalBreakupChart(ctx, data) {
    const config = {
        type: 'pie',
        data: {
            labels: data.map(a => a[0] + ": " + Math.round(a[1] * 100 / arrSum(data.map(t => t[1]))) + "%"),
            // labels: data.map(a => a[0]),
            datasets: [
                {
                    label: 'Verticals',
                    data: data.map(a => Math.round(a[1])),

                    backgroundColor: [
                        '#ff6600',
                        'rgb(198,255,0)',
                        'rgb(3,169,244)',
                        'rgb(67,160,71)',
                        'rgb(141,110,99)',
                        'rgb(96,125,139)'
                    ],


                    borderColor: CHART_COLORS.slice(0, data.length),
                }
            ]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, curData) {
                        var indx = tooltipItem.index
                        // return data[indx][0] + ': ' + data[indx][1] + 'Hrs'
                        return curData.labels[indx] + ': ' + curData.datasets[tooltipItem.datasetIndex].data[indx] + 'Hrs'
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    formatter: function (value, context) {
                        return value
                    },
                    color: 'rgb(0,0,0)',
                    font: {
                        size: 12,
                        weight: 'bold'

                    },

                },

            },
            responsive: true,
            legend: {
                display: true,
                position: 'left',
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }

        },
    };

    new Chart(ctx, config);

}

function createVerticalBreakupChartForAdmin(ctx, data) {
    /**
     * data[0] and data [1] should ideally be same
     * data[0] -> vertical wise time saved
     * data[1] -> vertical wise sum of individual hours saved
     * data[2] -> vertical wise sum of individual hours taken by team
     */
    // const zip = (a, b) => a.map((k, i) => [k, b[i]]);
    hexToRGB()
    console.log(data)
    temp = data
    const config = {
        type: 'pie',
        data: {
            // labels: data[0].map(a => a[0]),
            labels: zip(data[1], data[2]).map(a => a[0][0] + ': ' + Math.round((a[0][1] / a[1][1]) * 100) + '%'),
            datasets: [
                {
                    label: 'Verticals',
                    data: data[1].map(a => Math.round(a[1])),

                    backgroundColor: [
                        '#ff6600',
                        'rgb(198,255,0)',
                        'rgb(3,169,244)',
                        'rgb(67,160,71)',
                        'rgb(141,110,99)',
                        'rgb(96,125,139)'
                    ],


                    borderColor: CHART_COLORS.slice(0, data.length),
                }
            ]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, curData) {
                        var indx = tooltipItem.index
                        // return data[indx][0] + ': ' + data[indx][1] + 'Hrs'
                        return curData.labels[indx] + ': ' + curData.datasets[tooltipItem.datasetIndex].data[indx] + 'Hrs'
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    formatter: function (value, context) {
                        return value
                    },
                    color: 'rgb(0,0,0)',
                    font: {
                        size: 12,
                        weight: 'bold'

                    },

                },

            },
            responsive: true,
            legend: {
                display: true,
                position: 'left',
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }

        },
    };

    new Chart(ctx, config);

}

function createVerticalBreakupBarChartForAdmin(ctx, data) {
    /**
     * data[0] and data [1] should ideally be same
     * data[0] -> vertical wise time saved
     * data[1] -> vertical wise sum of individual hours saved
     * data[2] -> vertical wise sum of individual hours taken by team
     */
        // const zip = (a, b) => a.map((k, i) => [k, b[i]]);
    var percentage_saved = {}
    zip(data[1], data[2]).forEach(a => percentage_saved[a[0][0]] = Math.round((a[0][1] / a[1][1]) * 100) + '%')
    const config = {
        type: 'bar',
        data: {
            labels: data[1].map(a => a[0]),
            // labels: zip(data[1],data[2]).map(a=>a[0][0]+': '+Math.round((a[0][1]/a[1][1])*100)+'%'),
            datasets: [
                {
                    label: 'Verticals',
                    data: data[1].map(a => Math.round(a[1])),

                    backgroundColor: [
                        '#ff6600',
                        'rgb(198,255,0)',
                        'rgb(3,169,244)',
                        'rgb(67,160,71)',
                        'rgb(141,110,99)',
                        'rgb(96,125,139)'
                    ],


                    borderColor: CHART_COLORS.slice(0, data.length),
                },
                {
                    label: 'Verticals',
                    type: 'line',
                    data: data[1].map(a => Math.round(a[1])),
                    backgroundColor: 'rgb(0,0,0,0)',
                    borderColor: 'rgb(0,0,0,0)',
                }
            ]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, curData) {
                        var indx = tooltipItem.index
                        // return data[indx][0] + ': ' + data[indx][1] + 'Hrs'
                        return curData.datasets[tooltipItem.datasetIndex].data[indx] + 'Hrs Saved, ' + percentage_saved[curData.labels[indx]] + ' Automated'
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    formatter: function (value, context) {
                        if (context.datasetIndex === 0) return value
                        else return percentage_saved[context.chart.data.labels[context.dataIndex]]
                    },
                    color: 'rgb(0,0,0)',
                    font: {
                        size: 12,
                        weight: 'bold'

                    },

                },

            },
            responsive: true,
            legend: {
                display: false,
                position: 'left',
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }

        },
    };

    new Chart(ctx, config);

}

function populateLogsProgressBar(data) {
    if ((data[0] + data[1]) === 0) {
        denominator = 1
    } else denominator = data[0] + data[1]
    var fail_percentage = Math.round((data[1] / denominator) * 100)
    var pass_percentage = 100 - fail_percentage
    document.getElementById('progress_rate_percentage').textContent = pass_percentage + '% PASS'
    document.getElementById('progress_rate_percentage').style.width = pass_percentage + '%'
    document.getElementById('progress_rate_percentage_fail').textContent = fail_percentage + '% FAIL'
    document.getElementById('progress_rate_percentage_fail').style.width = fail_percentage + '%'
    //
    // const config = {
    //     type: 'bubble',
    //     data: {
    //         labels: ['Pass Rate', 'Fail Rate'],
    //         datasets: [
    //             {
    //                 label: 'Verticals',
    //                 data: [(data[0] / (data[0] + data[1])) * 100, (data[1] / (data[0] + data[1])) * 100],
    //                 backgroundColor: ['rgb(255, 159, 64)', 'rgb(255, 205, 86)'],
    //                 borderColor: [CHART_COLORS[3], CHART_COLORS[0]]
    //             }
    //         ]
    //     },
    //     options: {
    //         responsive: true,
    //         legend: {
    //             display: true,
    //             position: 'left',
    //         },
    //         layout: {
    //             padding: {
    //                 left: 0,
    //                 right: 0,
    //                 top: 5,
    //                 bottom: 20
    //             }
    //         }
    //
    //     },
    // };
    //
    // new Chart(ctx, config);

}

function createIndividualEffortsChart(ctx, data) {
    // console.log(data)
    var percentage_saved = {}
    zip(data[0], data[1]).forEach(a => percentage_saved[a[0][0]] = Math.round((a[0][1] / a[1][1]) * 100))
    var config = {};
    var isPolarChart = false;
    if (isPolarChart) {
        config = {
            type: 'polarArea',
            data: {
                labels: data[0].map(a => a[0] + ' : ' + a[1] + ' Hrs'),
                datasets: [
                    {
                        label: 'Efforts',
                        data: data[0].map(a => a[1]),
                        backgroundColor: CHART_COLORS_main.slice(0, data[0].length),
                        borderColor: CHART_COLORS[0],
                    }
                ]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, curData) {
                            var indx = tooltipItem.index
                            return data[0][indx][0] + ' : ' + data[0][indx][1] + 'Hrs'
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        display: true,
                        formatter: function (value, context) {
                            var indx = context.dataIndex
                            var percentage = Math.round((data[0][indx][1] * 100) / data[1][indx][1])
                            if (percentage === 0) return '';
                            else return Math.round((data[0][indx][1] * 100) / data[1][indx][1]) + '%';
                        },
                        color: 'rgb(0,0,0)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },

                    },
                },
                scale: {
                    display: true,
                    ticks: {
                        display: false
                    },
                },
                responsive: true,
                legend: {
                    display: true,
                    position: 'left',
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 0,
                    }
                }

            },
        };
    } else {

        config = {
            type: 'horizontalBar',
            data: {
                labels: data[1].map(a => a[0]),
                // labels: zip(data[0],data[1]).map(a=>a[0][0]+': '+Math.round((a[0][1]/a[1][1])*100)+'%'),
                datasets: [
                    {
                        label: 'Verticals',
                        data: data[0].map(a => Math.round(a[1])),
                        backgroundColor: CHART_COLORS_main.slice(0, data[0].length),
                        borderColor: CHART_COLORS[0],
                    },
                    {
                        label: 'Verticals',
                        data: data[1].map(a => Math.round(a[1])),
                        backgroundColor: 'rgb(0,0,0,0.08)',
                        borderColor: 'rgb(0,0,0)',
                    },
                ]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, curData) {
                            var indx = tooltipItem.index
                            // return data[indx][0] + ': ' + data[indx][1] + 'Hrs'
                            if (tooltipItem.datasetIndex === 1) return '';
                            return curData.datasets[tooltipItem.datasetIndex].data[indx] + 'Hrs Saved, ' + percentage_saved[curData.labels[indx]] + '% Automated'
                        }
                    }
                },
                plugins: {
                    datalabels: {
                        display: true,
                        anchor: function (context) {
                            if (context.datasetIndex === 0) return 'center';
                            else return 'end';
                        },
                        clamp: true,
                        formatter: function (value, context) {
                            if (context.datasetIndex === 0) return percentage_saved[context.chart.data.labels[context.dataIndex]] + '%';
                            else return (100 - percentage_saved[context.chart.data.labels[context.dataIndex]]) + '% Remaining';
                            // if (context.datasetIndex === 0) return value
                            // else return percentage_saved[context.chart.data.labels[context.dataIndex]]
                        },
                        // color: 'rgb(0,0,0)',
                        color: function (context) {
                            if (context.datasetIndex === 0) return 'rgb(0,0,0)';
                            else return 'rgb(0,0,0,0.5)';
                        },
                        font: {
                            size: 12,
                            weight: 'bold'

                        },

                    },

                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: false,

                    }],
                    yAxes: [{
                        stacked: true
                    }]
                },
                legend: {
                    display: false,
                    position: 'left',
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }

            },
        };
    }

    new Chart(ctx, config);

}

function initializeProcessCountKPI(data) {
    document.getElementById('process_count_kpi').textContent = data.length
}

function initializeFilteredProcessCountKPI(data) {
    document.getElementById('filtered_process_count_kpi').textContent = data.length
}

function initializeDevInProgressCountKPI(data) {
    document.getElementById('dev_in_progress_count_kpi').textContent = data.filter(a => a['Status'] === 'DEV').length
}

function initializeAutomatedProcessCountKPI(data) {
    document.getElementById('dev_in_progress_count_kpi').textContent = data.filter(a => a['Status'] === 'LIVE').length
}

function initializeHoldDiscardedProcessesCountKPI(data) {
    document.getElementById('hold_process_count_kpi').textContent = data.filter(a => a['Status'] === 'HOLD').length
    document.getElementById('discarded_count_kpi').textContent = data.filter(a => a['Status'] === 'DISCARDED').length
    document.getElementById('hold_or_discarded_count_kpi').textContent = data.filter(a => a['Status'] === 'DISCARDED').length + data.filter(a => a['Status'] === 'HOLD').length
}

function getDocumentedProcessCountDetails(data) {
    documented_count = data.filter(a => (a['Status'] === 'LIVE') || (a['Status'] === 'DEV') || (a['Status'] === 'Documented') || (a['Status'] === 'DISCARDED') || (a['Status'] === 'HOLD')).length
    yet_to_be_documented_count = data.length - documented_count
    return [documented_count, yet_to_be_documented_count]
}

function initializeQualifiedProcessListSideBar(data) {
    var hold_discard = document.getElementById('hold_discarded_filter').value
    if (hold_discard !== 'All') {
        data = data.filter(a => a['Status'] === hold_discard)
    }
    document.getElementById('qualified_process_list').innerHTML = [...new Set(data.map(a => a['Process Name']))].map(a => `<li class="active"><a href="#${a.replaceAll(' ', '_')}" style="font-size: 14px; font-weight: 600; padding-left: 20px; text-transform: capitalize; ">${a}</a></li>`).join('\n')
}

function updateDocumentedProcessChart(newData) {
    // const documentedCount = getDocumentedProcessCountDetails(newData)
    // document.getElementById('documentation_complete_kpi_id').textContent = documentedCount[0]
    // document.getElementById('documentation_complete_kpi_id').style.width = (documentedCount[0] * 100) / (documentedCount[0] + documentedCount[1]) + '%';
    // document.getElementById('documentation_not_complete_kpi_id').textContent = documentedCount[1]
    // document.getElementById('documentation_not_complete_kpi_id').style.width = (documentedCount[1] * 100) / (documentedCount[0] + documentedCount[1]) + '%';
    // var data = documentedProcessChartData.config.data;
    // data.datasets[0].data = getDocumentedProcessCountDetails(newData);
    // documentedProcessChartData.update();
}

function updateDynamicKPIs(data) {
    initializeDevInProgressCountKPI(data)
    // initializeAutomatedProcessCountKPI(data)
    initializeHoldDiscardedProcessesCountKPI(data)
    initializeFilteredProcessCountKPI(data)
    if (is_sub_process === false) {
        initializeQualifiedProcessListSideBar(data)
    }
    reduceDynamicKPINames()
    // updateDocumentedProcessChart(data)
}

function reduceDynamicKPINames() {
    kpi_ids = ['total_process_count_kpi_name', 'filtered_process_name', 'secondary_filter_kpi_name', 'dev_in_progress_kpi_name']
    var width = $(window).width();
    if (width < 1440) {
        kpi_ids.forEach(kpi_id => {
            $('#' + kpi_id).addClass('h5')
        });
    } else {
        kpi_ids.forEach(kpi_id => {
            $('#' + kpi_id).removeClass('h5')
        });
    }

    kpi_ids.forEach(kpi_id => {
        var margin_bottom = document.getElementById(kpi_id).parentElement.parentElement.offsetHeight / 6;
        $('#' + kpi_id).parent().siblings().find('h4').css({
            'margin-bottom': margin_bottom,
            'margin-top': 'auto'
        })
    });
}

function updateDynamicKPINames() {
    in_use = document.getElementById('in_use_filter').value
    is_live = document.getElementById('live_status_filter').value
    hold_discard = document.getElementById('hold_discarded_filter').value

    filtered_kpi_name = ''
    if (is_live === 'Yes') {
        filtered_kpi_name = filtered_kpi_name + 'Live '
    } else if (is_live === 'No') {
        filtered_kpi_name = filtered_kpi_name + 'Not Live '
    }
    if (in_use === 'Yes') {
        filtered_kpi_name = filtered_kpi_name + 'In Use '
    } else if (in_use === 'No') {
        filtered_kpi_name = filtered_kpi_name + 'Not In Use '
    }
    if (is_live === 'All' && in_use === 'All') {
        filtered_kpi_name = filtered_kpi_name + 'All '
    }
    document.getElementById('filtered_process_name').textContent = filtered_kpi_name.trim()

    secondary_filter_kpi_name = ''
    if (is_live === 'No') {
        if (hold_discard === 'HOLD') {
            secondary_filter_kpi_name = secondary_filter_kpi_name + 'Hold '
        } else if (hold_discard === 'DISCARDED') {
            secondary_filter_kpi_name = secondary_filter_kpi_name + 'Discarded'
        } else {
            secondary_filter_kpi_name = secondary_filter_kpi_name + 'Others'
        }
        document.getElementById('secondary_filter_kpi_name').textContent = secondary_filter_kpi_name
    } else {
        document.getElementById('secondary_filter_kpi_name').textContent = 'Other Process'
    }
}

function submitFilterForm(key, value) {
    var btn_mapping = {'Yes': 'btn-success', 'No': 'btn-danger', 'All': 'btn-simple', 'Clear': 'btn-simple'}
    var hold_discarded_map = {
        'HOLD': 'hold_process_count_kpi',
        'DISCARDED': 'discarded_count_kpi',
        'All': 'hold_or_discarded_count_kpi'
    }
    if (key === 'in_use_filter') {
        $('#processes_in_use_' + value).addClass("active").siblings().removeClass("active");
        document.getElementById('process_in_use_dropdown').textContent = 'In Use : ' + value
        $('#process_in_use_dropdown').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-warning').removeClass('btn-simple').addClass(btn_mapping[value])
    }
    if (key === 'live_status_filter') {
        if (value === 'Clear') {
            document.getElementById('live_status_dropdown').textContent = 'Live';
            document.getElementById('process_in_use_dropdown').textContent = 'In Use : All';
            $('#processes_in_use_All').addClass("active").siblings().removeClass("active");
            $('#live_status_Yes').removeClass("active");
            $('#live_status_No').removeClass("active");
            $('#process_in_use_dropdown').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-warning').removeClass('btn-simple').addClass(btn_mapping['All'])
            $('#hold_process_count_kpi').addClass('d-none')
            $('#discarded_count_kpi').addClass('d-none')
            $('#hold_or_discarded_count_kpi').removeClass('d-none')
        } else {
            $('#live_status_' + value).addClass("active").siblings().removeClass("active");
            document.getElementById('live_status_dropdown').textContent = 'Live : ' + value;
        }
        $('#live_status_dropdown').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-warning').removeClass('btn-simple').addClass(btn_mapping[value])

        if (value === 'No') {
            $('#hold_discarded_dropdown_header').removeClass('d-none')
            document.getElementById('hold_discarded_filter').value = 'All';
            document.getElementById('hold_discarded_dropdown').textContent = 'All'
        } else {
            $('#hold_discarded_dropdown_header').addClass('d-none')
            document.getElementById('hold_discarded_filter').value = 'All'
        }
    }

    if (key === 'hold_discarded_filter') {
        $('#processes_status_' + value).addClass("active").siblings().removeClass("active");
        $('#hold_process_count_kpi').addClass('d-none')
        $('#discarded_count_kpi').addClass('d-none')
        $('#hold_or_discarded_count_kpi').addClass('d-none')
        $('#' + hold_discarded_map[value]).removeClass('d-none')
        document.getElementById('hold_discarded_dropdown').textContent = value
    }

    document.getElementById(key).value = value;
    var filtered_processed_data = applyFilterToProcessData()
    updateDynamicKPIs(filtered_processed_data)
}

function getIndividualEffortsDataForAllVerticals(data) {
    var individualData = {};
    for (let a of data) {
        if (!(a['Vertical'] in individualData)) individualData[a['Vertical']] = {};
        let process_owners = a['Process Owner'].split(';');
        let saved = a['Individual Efforts Saved'].toString().split(';').map(num => parseFloat(num));
        let taken = a['Individual Efforts Taken'].toString().split(';').map(num => parseFloat(num));

        for (let pi in process_owners) {
            if (!(process_owners[pi] in individualData[a['Vertical']])) {
                individualData[a['Vertical']][process_owners[pi]] = [0.0, 0.0];
            }
            individualData[a['Vertical']][process_owners[pi]][0] += process_owners.length === taken.length ? taken[pi] : arrSum(taken) / process_owners.length;
            individualData[a['Vertical']][process_owners[pi]][1] += process_owners.length === saved.length ? saved[pi] : arrSum(saved) / process_owners.length;
        }
    }
    return individualData;
}

function getIndividualEfforstFormatted(vertical, process_owner, individualData) {
    var percentage = process_owner.split(';').map(po => (individualData[vertical][po][1] / individualData[vertical][po][0] * 100).toFixed(2) + "%").join(';')
    var saved = process_owner.split(';').map(po => individualData[vertical][po][1] + "Hrs").join(';')
    return "Time saved By " + process_owner + " is " + percentage + " as " + saved + ' respectively'
}

function downloadCSVFile(data, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function password_form_sibmitter() {
    console.log('ok')
    var old_identifier = $('#password_edit_submit').parent().siblings()[0].getElementsByTagName('input')[0].placeholder
    var old_data = $('#password_edit_submit').parent().siblings()[1].getElementsByTagName('input')[0].placeholder
    var new_identifier = $('#password_edit_submit').parent().siblings()[0].getElementsByTagName('input')[0].value
    var new_data = $('#password_edit_submit').parent().siblings()[1].getElementsByTagName('input')[0].value
    $('#id_new_password_updater_identifier').val(new_identifier)
    $('#id_new_password_updater_data').val(new_data)
    $('#id_old_password_updater_identifier').val(old_identifier)
    $('#id_old_password_updater_data').val(old_data)
    $('#password_updater_form').submit()
}

$(window).resize(function () {
    try {
        reduceDynamicKPINames()
    } catch (e) {
        console.log(e)
    }
});

$('#process_logs_search').keyup(function () {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("process_logs_search");
    filter = input.value.toUpperCase();
    table = document.querySelector("#process_logs_table > tbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});

$('#process_executor_search').keyup(function () {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("process_executor_search");
    filter = input.value.toUpperCase();
    table = document.querySelector("#process_executor_table > tbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});


