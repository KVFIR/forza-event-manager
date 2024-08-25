// Проверка и извлечение данных о пользователе
fetch('https://forza-event-manager-5e2b3b51921f.herokuapp.com/user/data', {
  method: 'GET',
  credentials: 'include'
})
.then(response => {
  if (!response.ok) {
      // Обработка ответа с неудачным статусом
      return response.text().then(text => { throw new Error(text); });
  }
  return response.json();
})
.then(userData => {
  // Проверка наличия данных пользователя
  if (userData.userInfo) {
      // Отображение основной информации о пользователе
      document.getElementById('username').innerText = userData.userInfo.username;
      document.getElementById('avatar').src = `https://cdn.discordapp.com/avatars/${userData.userInfo.id}/${userData.userInfo.avatar}.png`;
      document.getElementById('email').innerText = userData.userInfo.email;

      // Отображение информации о гильдиях пользователя
      const guildsContainer = document.getElementById('guilds');
      userData.userGuilds.forEach(guild => {
          const guildElement = document.createElement('li');
          guildElement.innerText = guild.name;
          guildsContainer.appendChild(guildElement);
      });
  } else {
      throw new Error('Не удалось получить данные пользователя');
  }
})
.catch(error => {
  console.error('Ошибка при получении данных пользователя:', error.message);
  alert('Ошибка: ' + error.message);
  window.location.href = "https://forza-event-manager-5e2b3b51921f.herokuapp.com/login";
});
