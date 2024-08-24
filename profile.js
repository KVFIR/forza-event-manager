function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const token = getCookie('auth_token');

if (token) {
  // Декодирование токена и отображение данных
  const userData = JSON.parse(atob(token.split('.')[1])); // Простейшее декодирование base64

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
  // Если токена нет, перенаправляем на страницу логина
  window.location.href = "https://forza-event-manager-5e2b3b51921f.herokuapp.com/login";
}
