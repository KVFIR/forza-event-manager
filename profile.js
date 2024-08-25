fetch('https://forza-event-manager-5e2b3b51921f.herokuapp.com/user/data', {
  method: 'GET',
  credentials: 'include' // Для включения cookie в запросе
})
.then(response => response.json())
.then(data => {
  // Отображение основной информации о пользователе
  document.getElementById('username').innerText = data.userInfo.username;
  document.getElementById('avatar').src = `https://cdn.discordapp.com/avatars/${data.userInfo.id}/${data.userInfo.avatar}.png`;
  document.getElementById('email').innerText = data.userInfo.email;

  // Отображение информации о гильдиях пользователя
  const guildsContainer = document.getElementById('guilds');
  data.userGuilds.forEach(guild => {
      const guildElement = document.createElement('li');
      guildElement.innerText = guild.name;
      guildsContainer.appendChild(guildElement);
  });
})
.catch(error => {
  console.error('Ошибка при получении данных пользователя:', error);
});
