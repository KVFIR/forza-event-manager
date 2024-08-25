// Извлечение токена из URL
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (token) {
    fetch('https://forza-event-manager-5e2b3b51921f.herokuapp.com/user/data', {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok) {
            // Если сервер вернул статус 401 или другой неудачный статус
            return response.text().then(text => { throw new Error(text); });
        }
        return response.json();
    })
    .then(userData => {
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
    })
    .catch(error => {
        console.error('Ошибка при получении данных пользователя:', error.message);
        // Здесь вы можете перенаправить пользователя на страницу логина или показать сообщение
        alert('Ошибка: ' + error.message);
    });
} else {
    // Если токена нет, перенаправляем на страницу логина
    window.location.href = "https://forza-event-manager-5e2b3b51921f.herokuapp.com/login";
}
