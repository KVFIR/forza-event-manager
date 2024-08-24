// Извлечение токена из URL
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (token) {
    // Декодирование токена и отображение данных
    const userData = JSON.parse(atob(token.split('.')[1])); // Простейшее декодирование base64

    // Отображение основной информации о пользователе
    document.getElementById('username').innerText = userData.userInfo.username;
    document.getElementById('email').innerText = userData.userInfo.email;
    document.getElementById('avatar').src = `https://cdn.discordapp.com/avatars/${userData.userInfo.id}/${userData.userInfo.avatar}.png`;

    // Отображение информации о гильдиях пользователя
    const guildsContainer = document.getElementById('guild-list');
    userData.userGuilds.forEach(guild => {
        const guildElement = document.createElement('li');
        guildElement.innerText = guild.name;
        guildsContainer.appendChild(guildElement);
    });

    // Отображение информации о подключениях пользователя
    const connectionsContainer = document.getElementById('connections-list');
    userData.userConnections.forEach(connection => {
        const connectionElement = document.createElement('li');
        connectionElement.innerText = `${connection.type}: ${connection.name}`;
        connectionsContainer.appendChild(connectionElement);
    });
} else {
    // Если токена нет, перенаправляем на страницу логина
    window.location.href = "https://forza-event-manager-5e2b3b51921f.herokuapp.com/login";
}
