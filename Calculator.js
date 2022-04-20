let cycleCount  = document.getElementById("cycle-count");
let growthRate = document.getElementById("growth-rate");
let startingValue = document.getElementById("starting-value");
let outcome = document.getElementById("outcome");
let myChart;

function calculate() {

    let cycles = parseFloat(cycleCount.value);
    let growth = parseFloat(growthRate.value);
    let currentValue= parseFloat(startingValue.value);
    let cycleData = [];
    cycleData.min = currentValue;

    let i = 0;
    while(i<cycles){

        let data = {};
        data.count = i;

        console.log("**************************************************************")
        console.log("Performing Cycle "+i);
        console.log("starting value  = "+currentValue);

        let increase = currentValue * growth;
        data.increase = increase;
        console.log("increase = "+increase);
        currentValue = currentValue + increase;
        data.current = currentValue;
        console.log("final value for cycle "+i+" = "+currentValue);
        cycleData.push(data);

    i++;
    }

    //set our final outcome value
    outcome.innerText = "Outcome: "+currentValue;

    //create our chart labels array of values
    let chartLabels = [];
    cycleData.forEach(data => chartLabels.push("cycle "+data.count));

    //create our chart data array
    let chartData = [];
    cycleData.forEach(data => chartData.push(data.current));

    //create our min and max values
    let chartMin = cycleData.min;

    //create our max values
    let chartMax = currentValue;


    if(myChart != null){
        myChart.destroy();
    }

    const ctx = document.getElementById('outcome-chart').getContext('2d');


    ctx.clearRect(0,0,ctx.width,ctx.height);

     myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Count Value',
                data: chartData,
                backgroundColor: [
                    'rgba(79, 70, 229, 1)',

                ],
                borderColor: [
                    'rgba(79, 70, 229, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



}