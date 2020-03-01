const userAction = async () => {
    const response = await fetch('http://172.20.0.4:5000/weather/temperature');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    console.log(myJson.map(function(e) {
        return e.humidite
    }))
    var data_eur = myJson.map(function(e) {
        return e.humidite
    })
    var labels = myJson.map(function(e) {
        return e.timestamp
    })
    if (typeof myGraph === 'undefined') {
        displayChart(labels,data_eur)
    } else {
        updateGraph(myGraph)
    }
    
}

function displayChart(labels,data_eur) {
    console.log("Creation chart")
    var ctx = document.getElementById('myChart').getContext('2d');
    var myGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Stations Météos",
                data: data_eur,
                borderColor: 'rgb(250,130,20)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}

//function addData(chart, label, data_eur,data_usd) {
//    console.log("CC")
//    console.log(label)
//    console.log(chart)
//    chart.data.labels.push(label);
//    chart.data.datasets.forEach((dataset) => {
//        console.dir(dataset)
//    });
    // chart.update();
//}

function updateGraph(graph) {
    myGraph.update();
}

userAction();