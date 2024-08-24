// Извлечение токена из URL
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (token) {
  // Сохранение токена в Local Storage
  localStorage.setItem('userToken', token);

  // Декодирование токена и отображение данных
  const userData = JSON.parse(atob(token.split('.')[1])); // Простое декодирование base64
  document.getElementById('username').textContent = userData.username;
  document.getElementById('avatar').src = userData.avatar;
} else {
  // Если токена нет, перенаправляем на страницу логина
  window.location.href = 'https://forza-event-manager-5e2b3b51921f.herokuapp.com/login';
}
