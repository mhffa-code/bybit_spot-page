// upgrade
const upgradeNote = document.querySelector(".upgrade");
const close = upgradeNote.querySelector(".upgrade > i");

close.addEventListener("click", () => {
    upgradeNote.style.display = "none";
});
// ROI canvas
const ROI = document.querySelector("canvas#ROI").getContext("2d");
Chart.defaults.font.size = 10;

new Chart(ROI, {
    type: 'line',
    data: {
      labels: ['2023-10-14', '2023-10-15', '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19', '2023-10-20'],
      datasets: [
        {
        label: 'Cumulative ROI of the Spot Account',
        data: [-20, -20, -21, -22, -23, -20, -19],
        borderWidth: 2,
        pointStyle:"circle",
        borderColor: "#f7a600",
        tension: 0.5,
        backgroundColor: "#f7a600",
        fill : false
      },
      {
        label: 'Cumulative price change of BTC (%)',
        data: [0, 1, 8, 8, 8.5, 10, 10.2],
        borderWidth: 0.8,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },
    
    options: {
        plugins : {
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 12
                    },
                    color :"black",
                }
            }
        },
      scales: {

        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + "%";
                    },
                    color: "#81858c",
                    stepSize: 10,

                },
          grid : {
              color: "#9e9e9e17"
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 3,
            },
          beginAtZero: true,
          grid : {
              color: "#9e9e9e17"
          }
        }
      }
    },
});

// Profits
const Profits = document.getElementById('profits');

new Chart(Profits, {
  type: 'line',
  data: {
    labels: ['2023-10-14', '2023-10-15', '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19', '2023-10-20'],
    datasets: [{
      label: 'Cumulative Profits ',
      data: [-25, -26, -28, -30, -32, -29, -25],
      borderWidth: 1.5,
      backgroundColor: "#f7a600",
      borderColor: "#f7a600",
      tension: 0.5,
      pointStyle: "circle"

    }]
  },
  options: {
    plugins : {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero : true,
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      },
      x: {
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      }
    }
  }
});

// P&L
const PL = document.getElementById('PL');

new Chart(PL, {
  type: 'bar',
  data: {
    labels: ['2023-10-14', '2023-10-15', '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19', '2023-10-20'],
    datasets: [{
      label: 'P&L ',
      data: [-25, 0, -3, -3, -4, 2, 3],
      borderWidth: 1.5,
      backgroundColor: ["red", "red", "red", "red", "red", "green", "green"],
      borderColor: ["red", "red", "red", "red", "red", "green", "green"],
    }]
  },
  options: {
    plugins : {
      legend : {
        display: false
      }
    },
    scales: {
      y: {
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      },
      x: {
        ticks : {
          color: "#81858c",
      },
      grid : {
        color: "#9e9e9e17"
    }
      }
    }
  }
});
