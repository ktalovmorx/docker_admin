function renderChart(chart_id, value_label, value_data, value_title, value_type, with_fill) {

    const chartRef = document.getElementById(chart_id);

    // Función para generar un color aleatorio
    function getRandomColor(opacity) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // Crear arrays de colores aleatorios basados en la cantidad de datos
    let backgroundColors;
    if (value_type == 'line'){
        backgroundColors = value_data.map(() => 'rgba(0, 255, 0, 0.8)');
    }else{
        backgroundColors = value_data.map(() => getRandomColor(0.6));
    }

    /*if (this.chart){
        this.chart.destroy();
    }*/

    // Crear un nuevo gráfico
    this.chart = new Chart(chartRef, {
        type: value_type,
        data: {
            labels: value_label,
            datasets: [{
                label: '#',
                data: value_data,
                backgroundColor: backgroundColors,
                pointStyle:!with_fill,
                fill:with_fill,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: value_title,
                    position: 'top',
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false, // Mostrar líneas de grid en el eje X
                    }
                },
                y: {
                    grid: {
                        display: true, // Mostrar líneas de grid en el eje Y
                    },
                    beginAtZero: true
                }
            }
        }
    });
}