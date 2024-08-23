const apiKey = '3A995C17-13A8-46D6-83EE-64C466830EF0';
const apiUrl = 'https://rest.coinapi.io/v1/exchanges';

async function fetchExchanges() {
    try {
        const response = await fetch(apiUrl, {
            headers: { 'X-CoinAPI-Key': apiKey }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function displayExchanges() {
    const exchanges = await fetchExchanges();
    const list = document.createElement('ul');
    document.body.appendChild(list);

    if (exchanges.length > 0) {
        const items = exchanges.slice(0, 16).map(({ name = 'N/A', volume_1hrs_usd = 0, volume_1day_usd = 0 }) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Nombre: ${name}, Cotización del día: ${volume_1day_usd.toFixed(2)} USD, Cotización por hora: ${volume_1hrs_usd.toFixed(2)} USD`;
            return listItem;
        });
        
        // Añadir todos los elementos de la lista al DOM
        items.forEach(item => list.appendChild(item));
    } else {
        const noDataItem = document.createElement('li');
        noDataItem.textContent = 'No se encontraron datos.';
        list.appendChild(noDataItem);
    }
}

displayExchanges();
