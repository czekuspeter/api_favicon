let uj = document.getElementById("egy").value;
uj = 'www.github.com';

function search()
{
    fetch('https://favicongrabber.com/api/grab/' +uj + '?pretty=true')
    .then(response => response.json())
    .then(data =>
    {
        console.log("kép: " + data.icons[0].src);
    })
} 