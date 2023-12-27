function toggleTheme() {
const body = document.body;
const currentClass = body.className;
if (currentClass === 'light-theme') {

    body.className = 'dark-theme';
    } else {
        body.className = 'light-theme';
    }
}
