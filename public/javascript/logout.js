async function logout() {
    const response = await fetch('/api/users/logout', {
        meth: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logoout').addEventListener('click', logout)