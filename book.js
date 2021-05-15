//Create a class to use as a template for the treatments
class Treatment {
    constructor(type, time, included, price) {
        this.type = type;
        this.time = time;
        this.included = included;
        this.price = price;
    }
};

//Create objects for each Manicure treatment using the class
const expressMani = new Treatment (
    "Express Manicure",
    "20 minutes",
    "File, Shape and Polish",
    20
);

const classicMani = new Treatment (
    "Classic Manicure",
    "40 minutes",
    "File, Shape, Cuticles and Polish",
    30
);

const gelMani = new Treatment (
    "Gel Manicure",
    "50 minutes",
    "File, Shape, Cuticles, Gel Polish",
    40
);

const luxuryMani = new Treatment (
    "Luxury Manicure",
    "60 minutes",
    "File, Shape, Cuticles, Gel Polish, Scrub, Mask and Massage",
    48
);

//Create objects for each Pedicure treatment using the class
const expressPani = new Treatment (
    "Express Pedicure",
    "20 minutes",
    "File, Shape and Polish",
    20
);

const classicPedi = new Treatment (
    "Classic Pedicure",
    "50 minutes",
    "File, Shape, Cuticles, Hard Skin, Scrub, Polish and Cream",
    40
);

const gelPedi = new Treatment (
    "Gel Pedicure",
    "60 minutes",
    "File, Shape, Cuticles, Scrub, Hard Skin, Scrub, Gel Polish and Cream",
    45
);

const luxuryPedi = new Treatment (
    "Luxury Pedicure",
    "65 minutes",
    "File, Shape, Cuticles, Scrub, Hard Skin, Massage, Polish and Cream",
    48
);

const luxuryGelPedi = new Treatment (
    "Luxury Gel Pedicure",
    "75 minutes",
    "File, Shape, Cuticles, Scrub, Hard Skin, Massage, Gel Polish and Cream",
    53
);

/*
    Create objects for combined
    manicures and pedicures using the class.
    This objects will not use "included" argument in them
*/
const expressManiAndPedi = new Treatment (
    "Express Manicure and pedicure",
    "40 minutes",
    "",
    35
);

const classicManiAndPedi = new Treatment (
    "Classic Manicure and Pedicure",
    "90 minutes",
    "",
    65
);

const gelManiAndPedi = new Treatment (
    "Gel Manicure And Pedicure",
    "110 minutes",
    "",
    80
);

const content = `
    <h2>${expressMani.type}</h2>
    <p>Time: ${expressMani.time}</p>
    <p>What's Included: ${expressMani.included}</p>
    <p>Price: ${expressMani.price}</p>
`;

const newDiv = document.createElement("div");
newDiv.classList.add("pricelist");
const newArticle = document.createElement("article");
newArticle.innerHTML = content;
newDiv.append(newArticle);

document.querySelector(".inner-container-main").append(newDiv);





