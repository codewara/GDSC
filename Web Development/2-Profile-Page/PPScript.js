const profile = document.querySelector('.profile');
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.info');
const objects = document.querySelectorAll('.section');
const options = {
    abt: {
        title: 'About',
        desc: 'Lorem About ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti? Lorem About ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti?'
    },
    exp: {
        title: 'Experience',
        desc: 'Lorem Experience ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti? Lorem Experience ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti?'
    },
    cnt: {
        title: 'Contact',
        desc: 'Lorem Contact ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti? Lorem Contact ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti?'
    },
    doc: {
        title: 'Documentation',
        desc: 'Lorem Documentation ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti? Lorem Documentation ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat maxime a accusamus molestiae qui ipsum, perferendis dolorum ipsa cumque voluptatum cupiditate incidunt error ab nobis excepturi magnam. Eligendi, deleniti?'
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > profile.offsetTop + profile.offsetHeight) {
        navbar.classList.add('scrolled');
        content.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        content.classList.remove('scrolled');
    }
});

objects.forEach(obj => {
    obj.addEventListener('click', () => {
        let title, desc;
        switch (obj.id) {
            case 'abt' : 
            title = options.abt.title;
            desc = options.abt.desc;
            break;
            case 'exp' : 
            title = options.exp.title;
            desc = options.exp.desc;
            break;
            case 'cnt' : 
            title = options.cnt.title;
            desc = options.cnt.desc;
            break;
            case 'doc' : 
            title = options.doc.title;
            desc = options.doc.desc;
            break;
        }
        
        objects.forEach(obj => {
            obj.classList.remove('active');
        });
        obj.classList.add('active');
        navbar.classList.add('active');

        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.textContent = title;
        p.textContent = desc;

        content.innerHTML = '';
        content.appendChild(h2);
        content.appendChild(p);

    })
});
