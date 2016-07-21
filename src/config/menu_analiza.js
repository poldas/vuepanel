export default [
  {
    link: 'NewAnaliza',
    label: 'Dodaj Analizę',
    icon: 'fa-tachometer'
  },
  {
    label: 'Analiza',
    icon: 'fa-bar-chart-o',
    expanded: true,
    subMenu: [
      {
        link: 'ChartJs',
        label: 'ChartJs'
      },
      {
        link: 'Chartist',
        label: 'Chartist'
      },
      {
        link: 'Peity',
        label: 'Peity'
      },
      {
        link: 'Plotly',
        label: 'Plotly'
      }
    ]
  }
]
