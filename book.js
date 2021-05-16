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

    <h2>${classicMani.type}</h2>
    <p>Time: ${classicMani.time}</p>
    <p>What's Included: ${classicMani.included}</p>
    <p>Price: ${classicMani.price}</p>

    <h2>${gelMani.type}</h2>
    <p>Time: ${gelMani.time}</p>
    <p>What's Included: ${gelMani.included}</p>
    <p>Price: ${gelMani.price}</p>

    <h2>${luxuryMani.type}</h2>
    <p>Time: ${luxuryMani.time}</p>
    <p>What's Included: ${luxuryMani.included}</p>
    <p>Price: ${luxuryMani.price}</p>

    <h2>${expressPedi.type}</h2>
    <p>Time: ${expressPedi.time}</p>
    <p>What's Included: ${expressPedi.included}</p>
    <p>Price: ${expressPedi.price}</p>

    <h2>${classicPedi.type}</h2>
    <p>Time: ${classicPedi.time}</p>
    <p>What's Included: ${classicPedi.included}</p>
    <p>Price: ${classicPedi.price}</p>

    <h2>${gelPedi.type}</h2>
    <p>Time: ${gelPedi.time}</p>
    <p>What's Included: ${gelPedi.included}</p>
    <p>Price: ${gelPedi.price}</p>

    <h2>${luxuryPedi.type}</h2>
    <p>Time: ${expressMani.time}</p>
    <p>What's Included: ${expressMani.included}</p>
    <p>Price: ${expressMani.price}</p>

    <h2>${luxuryGelPedi.type}</h2>
    <p>Time: ${luxuryPedi.time}</p>
    <p>What's Included: ${luxuryPedi.included}</p>
    <p>Price: ${luxuryPedi.price}</p>

    <h2>${expressManiAndPedi.type}</h2>
    <p>Time: ${expressManiAndPedi.time}</p>
    <p>What's Included: ${expressManiAndPedi.included}</p>
    <p>Price: ${expressManiAndPedi.price}</p>

    <h2>${classicManiAndPedi.type}</h2>
    <p>Time: ${classicManiAndPedi.time}</p>
    <p>What's Included: ${classicManiAndPedi.included}</p>
    <p>Price: ${classicManiAndPedi.price}</p>

    <h2>${gelManiAndPedi.type}</h2>
    <p>Time: ${gelManiAndPedi.time}</p>
    <p>What's Included: ${gelMani.included}</p>
    <p>Price: ${gelManiAndPedi.price}</p>
`;

const newDiv = document.createElement("div");
newDiv.classList.add("pricelist");
const newArticle = document.createElement("article");
newArticle.innerHTML = content;
newDiv.append(newArticle);

document.querySelector(".inner-container-main").append(newDiv);





