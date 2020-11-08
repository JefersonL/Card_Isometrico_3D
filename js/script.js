const cards = [
    {
        "img": "./img/sketch01.png",
        "title": "Design",
        "alt": "design"
    },
    {
        "img": "./img/data01.png",
        "title": "Code",
        "alt": "code"
    },
    {
        "img": "./img/startup01.png",
        "title": "Launch",
        "alt": "launch"
    }
]

function loadCards() {
    cards.forEach((value) => {
        document.getElementById("cardsOn").innerHTML +=
            `<div class="card">
            <div class="imgBox">
                <img src= ${value.img} alt= ${value.alt}>
                <h3> ${value.title} </h3>
            </div>
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus tempore iusto
                    quas omnis quisquam non debitis, exercitationem, excepturi, soluta voluptate.</p>
            </div>
        </div>`
    })
}