// Exemplo básico de atualização dos dados no dashboard usando JavaScript
document.getElementById('dashboardTotalIncome').innerText = 'R$ 5.000,00';
document.getElementById('dashboardTotalExpense').innerText = 'R$ 2.500,00';
document.getElementById('dashboardMonthlyBalance').innerText = 'R$ 2.500,00';

// Exemplo de uso do Chart.js para criar um gráfico simples
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Receitas',
      data: [1000, 2000, 1500, 3000, 2500, 1800],
      backgroundColor: '#4caf50',
      borderWidth: 1
    }, {
      label: 'Despesas',
      data: [800, 1500, 1200, 2800, 2000, 1600],
      backgroundColor: '#ff5733',
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
