const response = await fetch('127.0.0.1:6569/list.json');
const list = await response.json();

list.forEach(s => {
    if (s.type === "css") {
        var n = document.createElement("link");
        n.rel = "stylesheet";
        n.href = s.src;
        document.head.appendChild(n);
    }
});