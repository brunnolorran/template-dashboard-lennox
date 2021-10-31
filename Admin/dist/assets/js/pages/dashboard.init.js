setTimeout(function () {
  $("#subscribeModal").modal("show");
}, 2e3);
var options = {
  chart: {
    height: 360,
    type: "bar",
    stacked: !0,
    toolbar: { show: !1 },
    zoom: { enabled: !0 },
  },
  plotOptions: {
    bar: { horizontal: !1, columnWidth: "15%", endingShape: "rounded" },
  },
  dataLabels: { enabled: !1 },
  series: [
    {
      name: "Consultor",
      data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
    },
    {
      name: "Cliente Final",
      data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
    },
    {
      name: "Franquia",
      data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  colors: ["#556ee6", "#f1b44c", "#34c38f"],
  legend: { position: "bottom" },
  fill: { opacity: 1 },
},
  chart = new ApexCharts(
    document.querySelector("#stacked-column-chart"),
    options
  );
chart.render();
options = {
  chart: { height: 200, type: "radialBar", offsetY: -10 },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: { fontSize: "13px", color: void 0, offsetY: 60 },
        value: {
          offsetY: 22,
          fontSize: "16px",
          color: void 0,
          formatter: function (e) {
            return e + "%";
          },
        },
      },
    },
  },
  colors: ["#f2ba5b"],
  fill: {
    type: "solid",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: !1,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  stroke: { dashArray: 4 },
  series: [33],
  labels: ["Series A"],
};
(chart = new ApexCharts(
  document.querySelector("#radialBar-chart"),
  options
)).render();




var options = { series: [{ name: "series1", data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76] }], chart: { height: 320, type: "line", toolbar: "false", dropShadow: { enabled: !0, color: "#000", top: 18, left: 7, blur: 8, opacity: .2 } }, dataLabels: { enabled: !1 }, colors: ["#556ee6"], stroke: { curve: "smooth", width: 3 } }, chart = new ApexCharts(document.querySelector("#line-chart"), options); chart.render(); options = { series: [56, 38, 26], chart: { type: "donut", height: 262 }, labels: ["Bônus A", "Bônus B", "Bônus C"], colors: ["#556ee6", "#34c38f", "#f46a6a"], legend: { show: !1 }, plotOptions: { pie: { donut: { size: "70%" } } } }; (chart = new ApexCharts(document.querySelector("#donut-chart"), options)).render(); var radialoptions1 = { series: [37], chart: { type: "radialBar", width: 60, height: 60, sparkline: { enabled: !0 } }, dataLabels: { enabled: !1 }, colors: ["#556ee6"], plotOptions: { radialBar: { hollow: { margin: 0, size: "60%" }, track: { margin: 0 }, dataLabels: { show: !1 } } } }, radialchart1 = new ApexCharts(document.querySelector("#radialchart-1"), radialoptions1); radialchart1.render(); var radialoptions2 = { series: [72], chart: { type: "radialBar", width: 60, height: 60, sparkline: { enabled: !0 } }, dataLabels: { enabled: !1 }, colors: ["#34c38f"], plotOptions: { radialBar: { hollow: { margin: 0, size: "60%" }, track: { margin: 0 }, dataLabels: { show: !1 } } } }, radialchart2 = new ApexCharts(document.querySelector("#radialchart-2"), radialoptions2); radialchart2.render(); var radialoptions3 = { series: [54], chart: { type: "radialBar", width: 60, height: 60, sparkline: { enabled: !0 } }, dataLabels: { enabled: !1 }, colors: ["#f2ba5b"], plotOptions: { radialBar: { hollow: { margin: 0, size: "60%" }, track: { margin: 0 }, dataLabels: { show: !1 } } } }, radialchart3 = new ApexCharts(document.querySelector("#radialchart-3"), radialoptions3); radialchart3.render();