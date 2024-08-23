// Отправка запроса к бэкенду для проверки состояния сервера
fetch('https://forza-event-manager-5e2b3b51921f.herokuapp.com/health')
  .then(response => response.json())
  .then(data => {
    console.log('Состояние сервера:', data);
    // Обновите UI на основе полученных данных
    const statusElement = document.createElement('p');
    statusElement.classList.add('text-center');
    statusElement.textContent = `Состояние сервера: ${data.status}`;
    document.querySelector('.container').appendChild(statusElement);
  })
  .catch(error => {
    console.error('Ошибка при запросе:', error);
    const errorElement = document.createElement('p');
    errorElement.classList.add('text-center', 'text-danger');
    errorElement.textContent = 'Ошибка при подключении к серверу';
    document.querySelector('.container').appendChild(errorElement);
  });
