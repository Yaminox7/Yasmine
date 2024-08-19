function graph(data) {    
    const labels = data.map(item => item.category);
    const values = data.map(item => item.value);


    const ctx = document.getElementById('data-chart').getContext('2d');
    return new Chart(ctx, {
        type: 'pie', // Use 'bar', 'line', 'pie', etc.
        data: {
            labels: labels,
            datasets: [{
                label: 'Values',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
