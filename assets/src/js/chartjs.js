import Chart from "https://esm.sh/chart.js/auto";

let graphique = new Chart(document.querySelector("canvas"), {
  type: "radar",
  data: {
    labels: [
      "التحمل",
      "التخفي",
      "المهارة",
      "السرعة",
      "القوة",
      "الذكاء"
    ],
    datasets: [
      {
        label: "التحمل",
        data: [12, 23, 12, 36, 34, 1],
        backgroundColor: "rgba(103, 239, 85, 0.2)",
        pointBackgroundColor: "rgba(132, 190, 155, 1)",
        borderWidth: 0
      },
      {
        label: "تخفي",
        data: [15, 23, 18, 29, 27, 3],
        backgroundColor: "rgba(53, 109, 133, 0.2)",
        pointBackgroundColor: "rgba(25, 27, 150, 1)",
        borderWidth: 0
      },
      {
        label: "مهارة",
        data: [15, 18, 15, 21, 17, 6],
        backgroundColor: "rgba(67, 123, 92, 0.2)",
        pointBackgroundColor: "rgba(157, 239, 85, 1)",
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false
      },
      title: {
        display: true,
        text: "إحصائيات الشخصية"
      }
    },
    scales: {
      r: {
        angleLines: {
          color: "rgba(222,222,222,0.1)"
        },
        grid: {
          circular: false,
          color: "rgba(222,222,222,0.1)"
        },
        ticks: { stepSize: 10, showLabelBackdrop: false }
      }
    }
  }
});

 setInterval(() => {
   for (let ds of graphique.data.datasets) {
     for (let i = 0; i < ds.data.length; i++) {
       ds.data[i] = Math.round(Math.random() * 40 + 10);
     }
   }
   graphique.update();
 }, 1000);