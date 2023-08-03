class Main {
    async ajax(url, method = "get") {
        return await fetch(url, { method: method }).then((r) => r.text());
    }

    getIdFromHash() {
        let id = location.hash.slice(1);
        if (id[0] === "/") {
            id = id.slice(1);
        }
        return id || "inicio";
    }

    getViewUrlFromId(id) {
        return `views/${id}.html`;
    }

    getModuleUrlFromId(id) {
        return `./modules/${id}.js`;
    }

    setActiveLink(id) {
        const links = document.querySelectorAll(".main-nav__link");
        links.forEach((link) => {
            if (link.getAttribute("href") === `#/${id}`) {
                link.classList.add("main-nav__link--active");
                link.ariaCurrent = "page";
            } else {
                link.classList.remove("main-nav__link--active");
                link.removeAttribute("aria-current");
            }
        });
    }

    async initJS(id) {
        const moduleUrl = this.getModuleUrlFromId(id);
        try {
            const { default: module } = await import(moduleUrl);
            if (typeof module.init !== "function") {
                console.error(`El módulo ${id} no posee un método init().`);
                return;
            }
            module.init();
        } catch (error) {
            console.error(`No se pudo importar el módulo ${moduleUrl}.`);
        }
    }

    async loadTemplate() {
        const id = this.getIdFromHash();

        const viewUrl = this.getViewUrlFromId(id);
        const viewContent = await this.ajax(viewUrl);
        document.querySelector("main").innerHTML = viewContent;

        this.setActiveLink(id);

        this.initJS(id);
    }

    async loadTemplates() {
        this.loadTemplate();
        window.addEventListener("hashchange", () => this.loadTemplate());
    }

    async start() {
        await this.loadTemplates();
    }
}
//---------------- funcion remover  ----------------

function scriptsPageRemove(id) {
    const scripts = document.querySelectorAll(`script[data-page="${id}"]`);
    scripts.forEach((script) => script.remove());
}

function scriptsPageLoad(id) {
    const scripts = document.querySelectorAll(`script[data-page="${id}"]`);
    scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.setAttribute("src", script.src);
        newScript.setAttribute("data-page", script.getAttribute("data-page"));
        document.body.appendChild(newScript);
    });
}

//------------------------- Title -------------------------

//✅ title change
const title = document.getElementsByTagName("title")[0];
title.textContent =
    title.textContent +
    " - " +
    "Pedro Vilamitjana" +
    " - " +
    "Proyecto Integrador: Juguetería Cósmica";

// ------------------------Image Slider------------------------
//✅ image slider
let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

// ###################  panel responsive ###################
// ✅ panel responsive
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
// console.log(menu);
// console.log(menuLinks);

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

// ********************* Modal kart ************************
// ✅ modal kart
const carrito = document.querySelector(".btn-cart-toggle");
const cart = document.querySelector(".cart-modal-container");
let mostrarUOcultar = true;

carrito.addEventListener("click", function () {
    if (mostrarUOcultar) {
        console.log("mostrar carrito");
        this.classList.add("active");
        cart.classList.remove("cart-modal-container");
        cart.classList.add("display");
        mostrarUOcultar = !mostrarUOcultar;

        window.addEventListener("keydown", function () {
            let scape = e.keyCode;
            if (scape == 27) {
                console.warn("cerral modal");
                carrito.classList.remove("active");
                cart.classList.remove("display");
                cart.classList.add("cart-modal-container");
            }
        });
    } else {
        console.log("ocultar carrito");
        this.classList.remove("active");
        cart.classList.remove("display");
        cart.classList.add("cart-modal-container");
        mostrarUOcultar = !mostrarUOcultar;
    }
});

const x = document.querySelector(".x");

x.addEventListener("click", function () {
    carrito.classList.remove("active");
    cart.classList.remove("display");
    cart.classList.add("cart-modal-container");
});

const main = new Main();
main.start();
