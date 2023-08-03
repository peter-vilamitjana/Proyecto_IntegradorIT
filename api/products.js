import config from "../config.js";
// import Model from '../models/products-mem.js';
// import Model from '../models/products-fs.js';
// import Model from '../models/products-mongodb.js';
import Model from "../models/products.js";

// const model = new Model();
// const model = Model.get('MEMORY');
// const model = Model.get('FILE SYSTEM');
// const model = Model.get('MONGODB');
const model = Model.get(config.PERSISTENCE_TYPE);
// creates PARA TESTING:
await model.createProduct({
    image: "images/products/rubik.webp",
    nombre: "Cubo Rubik",
    price: "$18.000",
    description:
        "Cubo Rubik original. Desafío mental y entretenimiento clásico para todas las edades.",
});
await model.createProduct({
    image: "images/products/monopoly.webp",
    nombre: "Monopoly",
    price: "$45.000",
    description:
        "El clásico juego de mesa que te sumerge en el mundo inmobiliario, negocios y estrategia.",
});
await model.createProduct({
    image: "images/products/laser_blade.jpeg",
    nombre: "Laser Blade Star Wars",
    price: "$60.000",
    description: "Sable de luz de Star Wars con luz y sonido",
});
await model.createProduct({
    image: "images/products/exploding_kittens.jpg",
    nombre: "Exploding Kittens",
    price: "$11.800",
    description: "Versión gatuna de la ruleta rusa",
});
await model.createProduct({
    image: "images/products/starwars_legion.jpg",
    nombre: "Star Wars Legion",
    price: "$55.120",
    description: "Batallas terrestres de la Guerra Civil Galáctica",
});
await model.createProduct({
    image: "images/products/darth_vader.webp",
    nombre: "Darth Vader",
    price: "$33.000",
    description: "Black series Darth vader Hasbro ®",
});
await model.createProduct({
    image: "images/products/pistola_x-shot.webp",
    nombre: "X-Shot ™",
    price: "$10.832",
    description: "Dispara con esta increíble pistola X-shot HURACAN",
});
await model.createProduct({
    image: "images/products/bop_it.webp",
    nombre: "Bop It ® ",
    price: "$14.890",
    description: "Clasico Juego De Memoria Hasbro!",
});
await model.createProduct({
    image: "images/products/life.jpg",
    nombre: "Life",
    price: "$10.995",
    description:
        "Vas a crear divertidos recuerdos y pasar momentos inolvidables!",
});
await model.createProduct({
    image: "images/products/queves.webp",
    nombre: "Que Ves?",
    price: "$8.195",
    description: "Con este pasatiempo entretenido las risas están aseguradas!",
});
await model.createProduct({
    image: "images/products/scrabble-dash-juego-de-cartas.webp",
    nombre: "Scrable Dash",
    price: "$2.300",
    description: "¡El primero en obtener 5 cartas Dash gana!",
});
await model.createProduct({
    image: "images/products/teg.webp",
    nombre: "T.E.G",
    price: "$11.000",
    description: "¡Domina territorios, forma alianzas!",
});
await model.createProduct({
    image: "images/products/clue.webp",
    price: "$7.000",
    nombre: "Clue ®",
    description:
        "¡Diviértete descubriendo al culpable, el arma y el lugar del crimen!",
});
await model.createProduct({
    image: "images/products/pictionary_junior.webp",
    price: "$2.400",
    nombre: "Pictionary Junior",
    description: "¡Ideal para pasar momentos inolvidables juntos!",
});
await model.createProduct({
    image: "images/products/pictionary_cartas.webp",
    nombre: "Pictonary Cartas",
    price: "$2.699",
    description: "¡Llegó el momento de revelar quién es un verdadero artista!",
});
await model.createProduct({
    image: "images/products/uno_flip.jpg",
    nombre: "UNO Flip",
    price: "$1.500",
    description: "!Ahora las tardes lluviosas serán mucho más divertidas!",
});
await model.createProduct({
    image: "images/products/twister.webp",
    nombre: "Twister",
    price: "$7.469",
    description:
        "Sumérgete en horas de diversión y desafíos con el Twister Refresh de Hasbro",
});
await model.createProduct({
    image: "images/products/bleff.jpg",
    nombre: "Bleff",
    price: "$6.999",
    description: "El famoso juego del diccionario en una versión de tablero.",
});
await model.createProduct({
    image: "images/products/anton_pig.webp",
    nombre: "nombre 19",
    price: "$40.000",
    description: " Interactúa, aprende y te divierte como nunca antes. ",
});
await model.createProduct({
    image: "images/products/01_trencity-kit-avanzado.jpg",
    nombre: "Trencity Kit Avanzado",
    price: "$32.000",
    description: " ¡Descubre un mundo de posibilidades ferroviarias!",
});
await model.createProduct({
    image: "images/products/04_Monster-jam-vehiculo.jpg",
    nombre: "Monster Jam Vehículo",
    price: "$55.000",
    description: "¡Domina el terreno y se el rey de la pista!",
});
await model.createProduct({
    image: "images/products/darth_vader_puzzle.webp",
    nombre: "Darth Vader puzzle",
    price: "$25.000",
    description:
        "¡Arma a Darth Vader pieza por pieza y vive la emoción de resolverlo!",
});
await model.createProduct({
    image: "images/products/espada_giratorio.webp",
    nombre: "Espada laser giratoria",
    price: "$60.000",
    description: "¡Lleva la Fuerza contigo en cada giro!",
});
await model.createProduct({
    image: "images/products/nerf_fortnite.webp",
    nombre: "Nerf Fortnite ®",
    price: "$55.000",
    description:
        "Lleva la emoción del popular videojuego a la vida real con este blaster inspirado en Fortnite. ",
});

////////////////////////////////////////////////////////////////////////////////
//                                 API Get All                                //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.getProducts();
    return products;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Get One                                //
////////////////////////////////////////////////////////////////////////////////

const getProduct = async (id) => {
    const product = await model.getProduct(id);
    return product;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async (product) => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Update                                //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Delete                                //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async (id) => {
    const deletedProduct = await model.deleteProduct(id);
    return deletedProduct;
};

export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
