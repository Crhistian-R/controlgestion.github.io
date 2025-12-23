// Gráfico NPK
const ctxNPK = document.getElementById('graficoNPK').getContext('2d');
new Chart(ctxNPK, {
  type: 'bar',
  data: {
    labels: ['Nitrógeno (N)', 'Fósforo (P)', 'Potasio (K)'],
    datasets: [{
      label: '% Cumplimiento del plan',
      data: [85, 70, 95],
      backgroundColor: ['#4CAF50', '#FFC107', '#2196F3']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});

// Gráfico Temperatura desde CSV
Papa.parse('temperaturas.csv', {
  download: true,
  header: true,
  complete: function(results) {
    const etiquetas = results.data.map(fila => fila.Semana);
    const temperaturas = results.data.map(fila => parseFloat(fila.Temperatura));

    const ctxTemp = document.getElementById('graficoTemperatura').getContext('2d');
    new Chart(ctxTemp, {
      type: 'line',
      data: {
        labels: etiquetas,
        datasets: [{
          label: 'Temperatura Promedio (°C)',
          data: temperaturas,
          borderColor: '#FF5722',
          backgroundColor: 'rgba(255, 87, 34, 0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: false } }
      }
    });
  }
});

