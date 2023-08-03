class ProductModelMem {
    products = [
        {
            image: "images/products/rubik.webp",
            nombre: "Cubo Rubik",
            price: "$18.000",
            description:
                "Cubo Rubik original. Desafío mental y entretenimiento clásico para todas las edades.",
        },
        {
            image: "images/products/monopoly.webp",
            nombre: "Monopoly",
            price: "$45.000",
            description:
                "El clásico juego de mesa que te sumerge en el mundo inmobiliario, negocios y estrategia.",
        },
        {
            image: "images/products/laser_blade.jpeg",
            nombre: "Laser Blade Star Wars",
            price: "$60.000",
            description: "Sable de luz de Star Wars con luz y sonido",
        },
        {
            image: "images/products/exploding_kittens.jpg",
            nombre: "Exploding Kittens",
            price: "$11.800",
            description: "Versión gatuna de la ruleta rusa",
        },
        {
            image: "images/products/starwars_legion.jpg",
            nombre: "Star Wars Legion",
            price: "$55.120",
            description: "Batallas terrestres de la Guerra Civil Galáctica",
        },
        {
            image: "images/products/darth_vader.webp",
            nombre: "Darth Vader",
            price: "$33.000",
            description: "Black series Darth vader Hasbro ®",
        },
        {
            image: "images/products/pistola_x-shot.webp",
            nombre: "X-Shot ™",
            price: "$10.832",
            description: "Dispara con esta increíble pistola X-shot HURACAN",
        },
        {
            image: "images/products/bop_it.webp",
            nombre: "Bop It ® ",
            price: "$14.890",
            description: "Clasico Juego De Memoria Hasbro!",
        },
        {
            image: "images/products/life.jpg",
            nombre: "Life",
            price: "$10.995",
            description:
                "Vas a crear divertidos recuerdos y pasar momentos inolvidables!",
        },
        {
            image: "images/products/queves.webp",
            nombre: "Que Ves?",
            price: "$8.195",
            description:
                "Con este pasatiempo entretenido las risas están aseguradas!",
        },
        {
            image: "images/products/scrabble-dash-juego-de-cartas.webp",
            nombre: "Scrable Dash",
            price: "$2.300",
            description: "¡El primero en obtener 5 cartas Dash gana!",
        },
        {
            image: "images/products/teg.webp",
            nombre: "T.E.G",
            price: "$11.000",
            description: "¡Domina territorios, forma alianzas!",
        },
        {
            image: "images/products/clue.webp",
            price: "$7.000",
            nombre: "Clue ®",
            description:
                "¡Diviértete descubriendo al culpable, el arma y el lugar del crimen!",
        },
        {
            image: "images/products/pictionary_junior.webp",
            price: "$2.400",
            nombre: "Pictionary Junior",
            description: "¡Ideal para pasar momentos inolvidables juntos!",
        },
        {
            image: "images/products/pictionary_cartas.webp",
            nombre: "Pictonary Cartas",
            price: "$2.699",
            description:
                "¡Llegó el momento de revelar quién es un verdadero artista!",
        },
        {
            image: "images/products/uno_flip.jpg",
            nombre: "UNO Flip",
            price: "$1.500",
            description:
                "!Ahora las tardes lluviosas serán mucho más divertidas!",
        },
        {
            image: "images/products/twister.webp",
            nombre: "Twister",
            price: "$7.469",
            description:
                "Sumérgete en horas de diversión y desafíos con el Twister Refresh de Hasbro",
        },
        {
            image: "images/products/bleff.jpg",
            nombre: "Bleff",
            price: "$6.999",
            description:
                "El famoso juego del diccionario en una versión de tablero.",
        },
        {
            image: "images/products/anton_pig.webp",
            nombre: "nombre 19",
            price: "$40.000",
            description:
                " Interactúa, aprende y te divierte como nunca antes. ",
        },
        {
            image: "images/products/01_trencity-kit-avanzado.jpg",
            nombre: "Trencity Kit Avanzado",
            price: "$32.000",
            description: " ¡Descubre un mundo de posibilidades ferroviarias!",
        },
        {
            image: "images/products/04_Monster-jam-vehiculo.jpg",
            nombre: "Monster Jam Vehículo",
            price: "$55.000",
            description: "¡Domina el terreno y se el rey de la pista!",
        },
        {
            image: "images/products/darth_vader_puzzle.webp",
            nombre: "Darth Vader puzzle",
            price: "$25.000",
            description:
                "¡Arma a Darth Vader pieza por pieza y vive la emoción de resolverlo!",
        },
        {
            image: "images/products/espada_giratorio.webp",
            nombre: "Espada laser giratoria",
            price: "$60.000",
            description: "¡Lleva la Fuerza contigo en cada giro!",
        },
        {
            image: "images/products/nerf_fortnite.webp",
            nombre: "Nerf Fortnite ®",
            price: "$55.000",
            description:
                "Lleva la emoción del popular videojuego a la vida real con este blaster inspirado en Fortnite. ",
        },
    ];
    lastId = 0;

    getNextId() {
        return (++this.lastId).toString();
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - C: Create                           //
    ////////////////////////////////////////////////////////////////////////////////

    async createProduct(product) {
        product.id = this.getNextId();
        this.products.push(product);
        return product;
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - R: Read                             //
    ////////////////////////////////////////////////////////////////////////////////

    async getProducts() {
        return this.products;
    }

    async getProduct(id) {
        return this.products.find((product) => product.id === id) || {};
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - U: Update                           //
    ////////////////////////////////////////////////////////////////////////////////

    async updateProduct(id, product) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            return {};
        }
        product.id = id;
        this.products[index] = product;
        return product;
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - D: Delete                           //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            return {};
        }
        const removedProduct = this.products.splice(index, 1)[0];
        return removedProduct;
    }
}

export default ProductModelMem;
