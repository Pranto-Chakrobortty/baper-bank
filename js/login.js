document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    const passFiled = document.getElementById('user-pass');
    const pass = passFiled.value;
    console.log(email, pass);

    if (email === 'pranto@gmail.com' && pass === 'pranto') {
        window.location.href = 'home.html';
    }
    else {
        alert('tumi vule gaso??');
    }
})

