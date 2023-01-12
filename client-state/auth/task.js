const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const user_id = document.getElementById('user_id');
const exit = document.getElementById('exit');


function auth(id) {
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
    user_id.innerHTML = id;
}

const id = localStorage.getItem('id');
if (id) {
    auth(id);
} else {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        const formData = new FormData(form);
        xhr.send(formData);
    
        xhr.onloadend = function() {
            if (xhr.status == 201) {
                const parseData = JSON.parse(xhr.response);
                if (parseData.success === true) {
                    auth(parseData.user_id);
                    localStorage.setItem('id', parseData.user_id);
                } else {
                    alert('Неверный логин/пароль');
                    form.reset();
                }
            } else {
              alert("Ошибка " + this.status);
              form.reset();
            }
        };
    });
}

exit.addEventListener('click', () => {
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    localStorage.removeItem('user_id');
    form.reset();
});

