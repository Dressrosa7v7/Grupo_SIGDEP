document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de rendimiento por grado
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(performanceCtx, {
        type: 'bar',
        data: {
            labels: ['Masaya', 'Diria', 'Niquinohomo', 'Diriomo','Masatepe','Catarina'],
            datasets: [{
                label: 'Cercanos',
                data: [7.8, 8.2, 8.5, 8.1, 8.7, 9.0],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(230, 126, 34, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(230, 126, 34, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Cercanos',
                    font: {
                        family: 'Fredoka One',
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        font: {
                            family: 'Comic Neue'
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Fredoka One'
                        }
                    }
                }
            }
        }
    });

    // Gráfico de distribución de la campaña
    const ageCtx = document.getElementById('ageChart').getContext('2d');
    const ageChart = new Chart(ageCtx, {
        type: 'doughnut',
        data: {
            labels: ['Masaya', 'Diria', 'Niquinohomo', 'Diriomo'],
            datasets: [{
                data: [45, 80, 70, 50],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'Comic Neue'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Promedio de los prestamos',
                    font: {
                        family: 'Fredoka One',
                        size: 16
                    }
                }
            },
            cutout: '70%'
        }
    });
});