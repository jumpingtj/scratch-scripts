var link = document.createElement('li');
link.innerHTML = '<a href="/discuss">Discuss</a>';
link.className = 'link discuss';
try {
    document.querySelector('div#navigation div.inner ul')
        .insertBefore(link, document.querySelector('div#navigation div.inner ul').getElementsByTagName('li')[3]);
} catch (err) {
    document.querySelector('div#topnav ul.site-nav')
        .insertBefore(link, document.querySelector('div#topnav ul.site-nav').getElementsByTagName('li')[2]);
}