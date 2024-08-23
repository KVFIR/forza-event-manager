// Отправка запроса к бэкенду для проверки состояния сервера
fetch('https://forza-event-manager-5e2b3b51921f.herokuapp.com/health')
  .then(response => response.json())
  .then(data => {
    console.log('Состояние сервера:', data);
    // Здесь можно обновить UI на основе полученных данных
    document.getElementById('server-status').innerText = `Состояние сервера: ${data.status}`;
  })
  .catch(error => {
    console.error('Ошибка при запросе:', error);
    document.getElementById('server-status').innerText = 'Ошибка при подключении к серверу';
  });
