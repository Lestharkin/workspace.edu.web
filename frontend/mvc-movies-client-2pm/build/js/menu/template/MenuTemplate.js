export default class MenuTemplate {
    static render = (menu) => {
        const ul = document.createElement('ul');
        menu.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;
            if (item.active) {
                a.classList.add('active');
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        return ul;
    };
}
