// ===loader===
const loader = document.querySelector(".loader");
if(loader){
    let ld = gsap.timeline();
    ld.to(".loader__text",1,{scale:0.7,},0.5)
    ld.to(".loader__img-one",0.5,{opacity:1,},"+=0.5")
    ld.to(".loader__text",0.5,{scale:1,},"+=0.5")
    ld.to(".loader__img",0.7,{y:100,opacity:1,},"+=0.5")
    ld.to(".loader__img-one",0.2,{opacity:0,},"+=0.5")
    ld.to(".loader__img-two",0.2,{opacity:1,},"+=0.1")
    ld.to(".loader",0.7,{x:"-110%",},"+=0.7")
}

// === toggle ===

const toggleBtn = document.querySelector(".header__toggle")
const headerNav = document.querySelector(".header__nav")
const body = document.querySelector("body")
const header = document.querySelector(".header")
const scrollBtn = document.querySelector(".scroll__top")
const headerLink = document.querySelectorAll(".header__link")
// modal global
const popupLinks = document.querySelectorAll(".popup__link");
const lockPadding = document.querySelectorAll(".lock__padding");
let unlock = true;
const timeout = 800;
//

//toggle
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    headerNav.classList.toggle("active");
    body.classList.toggle("lock");
})
headerLink.forEach(link => link.addEventListener("click",()=>{
    if(headerNav.classList.contains("active")){
        headerNav.classList.remove("active")
    }
}))
// ===change bg header===
window.addEventListener("scroll", () => {
    if (pageYOffset > 10) header.style.backgroundColor = "#ecebeb";
    if (pageYOffset < 10) header.style.backgroundColor = "transparent";
    if (scrollBtn) {
        if (pageYOffset > 100) scrollBtn.classList.add("active");
        if (pageYOffset < 100) scrollBtn.classList.remove("active");
    }
})

// ===products===
const products = [
    {
        id: 1,
        name: "Air Jordan 1 Mid",
        price: 180,
        img: "./img/mens/air_jordan/1.webp",
        img2: "./img/mens/air_jordan/2.webp",
        img3: "./img/mens/air_jordan/3.webp",
        brand: "Nike",
        category: "mens",
        mark: "all",
    },
    {
        id: 2,
        name: "Adidas Stan Smith",
        price: 93,
        img: "img/mens/adidas_stan_smith/1.webp",
        img2: "img/mens/adidas_stan_smith/2.webp",
        img3: "img/mens/adidas_stan_smith/3.webp",
        brand: "Adidas",
        category: "mens",
        mark: "all",
    },
    {
        id: 3,
        name: "Nike Overbreak SP",
        price: 130,
        img: "img/mens/nike_overbreak/1.webp",
        img2: "img/mens/nike_overbreak/2.webp",
        img3: "img/mens/nike_overbreak/3.webp",
        brand: "Nike",
        category: "mens",
        mark: "all",
    },
    {
        id: 4,
        name: "Off-white low",
        price: 175,
        img: "img/mens/off_white_low/1.webp",
        img2: "img/mens/off_white_low/2.webp",
        img3: "img/mens/off_white_low/3.webp",
        brand: "Off-white",
        category: "mens",
        mark: "all",
    },
    {
        id: 5,
        name: "Adidas Yeezy Boost 350 V2 ",
        price: 290,
        img: "img/mens/adidas_yeezy350v/1.webp",
        img2: "img/mens/adidas_yeezy350v/2.webp",
        img3: "img/mens/adidas_yeezy350v/3.webp",
        brand: "Adidas",
        category: "mens",
        mark: "all",
    },
    {
        id: 6,
        name: "Off-white Off-Court",
        price: 525,
        img: "img/mens/off_white_court/1.webp",
        img2: "img/mens/off_white_court/2.webp",
        img3: "img/mens/off_white_court/3.webp",
        brand: "Off-white",
        category: "mens",
        mark: "all",
    },
    {
        id: 7,
        name: "Vans",
        price: 75,
        img: "img/mens/vans/1.webp",
        img2: "img/mens/vans/2.webp",
        img3: "img/mens/vans/3.webp",
        brand: "Vans",
        category: "mens",
        mark: "all",
    },
    {
        id: 8,
        name: "Nike Air Max 720",
        price: 171,
        img: "img/mens/nike_air_720/1.webp",
        img2: "img/mens/nike_air_720/2.webp",
        img3: "img/mens/nike_air_720/3.webp",
        brand: "Nike",
        category: "mens",
        mark: "new",
    },

    //womens
    {
        id: 9,
        name: "Alexander McQueen Rose",
        price: 404,
        img: "img/womens/alexandr_mcqueen_rose/1.webp",
        img2: "img/womens/alexandr_mcqueen_rose/2.webp",
        img3: "img/womens/alexandr_mcqueen_rose/3.webp",
        brand: "Alexander McQueen",
        category: "womens",
        mark: "new",
    },
    {
        id: 10,
        name: "Reebok x Victoria Beckham",
        price: 113,
        img: "img/womens/reebok/1.webp",
        img2: "img/womens/reebok/2.webp",
        img3: "img/womens/reebok/3.webp",
        brand: "Reebok",
        category: "womens",
    },
    {
        id: 11,
        name: "Comme Des Garçons Play x Converse",
        price: 150,
        img: "img/womens/comme/1.webp",
        img2: "img/womens/comme/2.webp",
        img3: "img/womens/comme/3.webp",
        brand: "Comme Des Garçons",
        category: "womens",
    },
    {
        id: 12,
        name: "Alexander McQueen Curt",
        price: 350,
        img: "img/womens/am_curt/1.webp",
        img2: "img/womens/am_curt/2.webp",
        img3: "img/womens/am_curt/3.webp",
        brand: "Alexander McQueen",
        category: "womens",
    },
    {
        id: 13,
        name: "Off-White Arows",
        price: 270,
        img: "img/womens/off_white/1.webp",
        img2: "img/womens/off_white/2.webp",
        img3: "img/womens/off_white/3.webp",
        brand: "Off-white",
        category: "womens",
    },
    {
        id: 14,
        name: "Li-Ning",
        price: 140,
        img: "img/womens/li_ning/1.webp",
        img2: "img/womens/li_ning/2.webp",
        img3: "img/womens/li_ning/3.webp",
        brand: "Li-Ning",
        category: "womens",
    },




]
const mensProducts = document.querySelector(".mens__products")
const womensProducts = document.querySelector(".womens__products")
const mainProducts = document.querySelector(".mens__products-main")
const mainWomensProducts = document.querySelector(".womens__products-main")
const newProducts = document.querySelector(".new__items")
const filterLink = document.querySelectorAll(".filter__link")
const filterList = document.querySelector(".filter__list")
const filterBtn = document.querySelector(".filter__drop")


window.addEventListener("DOMContentLoaded", () => {
    // check what a page
    if (mainProducts) { displayMain(products) }
    else{ displayItems(products) }
    //check storage and updage cartArray
    let storageCart = JSON.parse(localStorage.getItem("cart"));
    if(storageCart){
        arrCart = [...storageCart]
    }
    localStorage.setItem("products", JSON.stringify(products))

    //    filter
    if (filterBtn) {
        filterBtn.addEventListener("click", () => {
            filterList.classList.toggle("active");
            filterLink.forEach(link => {
                
                link.addEventListener("click", (e) => {
                    const category = e.currentTarget.dataset.filter;
                    
                    // add active style current link and remove
                    filterLink.forEach(link=> link.classList.remove("active-link"))
                    e.currentTarget.classList.add("active-link")

                    const menuCategory = products.filter(menuItem => {
                        if (menuItem.brand === category) return menuItem;
                    })
                    if (category === "all") {
                        displayItems(products);
                    }
                    else {
                        displayItems(menuCategory);
                    }
                })
            })
        })
    }
})
// display all items
function displayItems(items) {

    // display all mens items
    if (mensProducts) {

        let displayItem = items.map(item => {
            if (item.category === "mens") {
                return `<div class="collection__item item " data-atr="${item.name}">
            <a href="#popup__product" class="item__body popup__link" >
                <div class="item__img"><img src="${item.img}" alt=""></div>
                <div class="item__title">${item.name}</div>
                <div class="item__price">${item.price}$</div>
            </a>
        </div>`;
            }
            
        })
            displayItem = displayItem.join("")
            mensProducts.innerHTML = displayItem;

    } else {
        // diplay all womens items
        let displayWomenItem = items.map(item => {
            if (item.category === "womens") {
                return `<div class="collection__item item " data-atr="${item.name}">
        <a href="#popup__product" class="item__body popup__link" >
            <div class="item__img"><img src="${item.img}" alt=""></div>
            <div class="item__title">${item.name}</div>
            <div class="item__price">${item.price}$</div>
        </a>
    </div>`;
            }

        })
        displayWomenItem =  displayWomenItem.join("")
        womensProducts.innerHTML = displayWomenItem;
    }


    popupProducts(items)
}
// display only 4 items 
function displayMain(items) {

    // 4 mens items
    let displayMain = items.filter(item => item.id < 5)
    let displayItem = displayMain.map(item => {
        return `<div class="collection__item item " data-atr="${item.name}">
        <a href="#popup__product" class="item__body popup__link" >
            <div class="item__img"><img src="${item.img}" alt=""></div>
            <div class="item__title">${item.name}</div>
            <div class="item__price">${item.price}$</div>
        </a>
    </div>`;
    })

    displayItem = displayItem.join("")
    mainProducts.innerHTML = displayItem;

    //4 womens items
    let displayWomenMain = items.filter(item => item.category === "womens" && item.id < 13)
    let displayWomensItem = displayWomenMain.map(item => {

        return `<div class="collection__item item " data-atr="${item.name}">
        <a href="#popup__product" class="item__body popup__link" >
            <div class="item__img"><img src="${item.img}" alt=""></div>
            <div class="item__title">${item.name}</div>
            <div class="item__price">${item.price}$</div>
        </a>
    </div>`;
    })
    displayWomensItem = displayWomensItem.join("")
    mainWomensProducts.innerHTML = displayWomensItem;

    // new items
    let newItem = items.filter(item => item.mark === "new")
    let newItems = newItem.map(item => {

        return ` <div class="news__item item collection__item" data-atr="${item.name}">
            <a href="#" class="item__body">
                <div class="item__label">New</div>
                <div class="item__img"><img src="${item.img}" alt=""></div>
                <div class="item__title">${item.name}</div>
                <div class="item__price">${item.price}$</div>
            </a>
        </div>`

    })

    newProducts.innerHTML = newItems;
    popupProducts(items)
}
// dynamic open current product in popup

function popupProducts(items) {
    const filterItems = document.querySelectorAll(".collection__item");
    const cartWrapper = document.querySelector(".popup__cart-wrapper");

    filterItems.forEach(item => {
        item.addEventListener("click", (e) => {
            let displayProduct = products.filter(product => {
                if (item.dataset.atr === product.name) {

                    cartWrapper.innerHTML = `<section class="card">
               <div class="container">
                   <div class="card__title title__border" data-name="${product.name}">
                   ${product.name}
                   </div>
                   <div class="card__price" data-price="150" >${product.price}$</div>
                  
                   <div class="card__slider">
                       <div class="swiper-container">
                           <!-- Additional required wrapper -->
                           <div class="swiper-wrapper">
                             <!-- Slides -->
                             <div class="swiper-slide" ><img class="card__img-src" src="${product.img}" alt=""></div>
                             <div class="swiper-slide"><img src="${product.img2}" alt=""></div>
                             <div class="swiper-slide"><img src="${product.img3}" alt=""></div>
                             ...
                           </div>
                           <!-- If we need pagination -->
                           <div class="swiper-pagination"></div>
                         
                           <!-- If we need navigation buttons -->
                           <div class="swiper-button-prev"></div>
                           <div class="swiper-button-next"></div>   
                    </div>   
                   <div class="card__description">
                      <div class="card__size">
                          <div class="card__size-input">
                            <div class="card__size-btn ">
                               Выберите размер 
                               <i class='bx bxs-down-arrow bx-size'></i>
                            </div>
                             <div class="card__size-lists">
                                  <li class="card__size-list" data-size="44" > 44</li>
                                  <li class="card__size-list" data-size="43" >43</li>
                                  <li class="card__size-list" data-size="42">42</li>
                                  <li class="card__size-list" data-size="41">41</li>
                                  <li class="card__size-list" data-size="40"> 40</li>
                             </div>
                          </div>
                          <a class="card__size-info popup__link" href="#popup__size">
                           <i class='bx bxs-info-circle card__size-info-icon' ></i> Таблица размеров
                          </a>
                          <div class="card__check">
                              
                          </div>
                         <button class="card__cart-btn">
                             Добавить в корзину <i class='bx bxs-shopping-bags'></i>
                         </button>
                      </div>
                   </div>
               </div>
               
           </section>`
                }
            })

            // open popup and init slider
            popupOpen(popup__product);
            slider();
            checkSize();
            openTableSize();

        })
    })

}
// open table size popup
function openTableSize() {

    const tableBtn = document.querySelector(".card__size-info");
    const tablePopup = document.getElementById("popup__size")
    tableBtn.addEventListener("click", () => {
        tablePopup.classList.add("open")
    })
}
// ==== slider ====
function slider() {
    const slider = document.querySelector(".swiper-container")
    if (slider) {
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}


// ==== card-size ====
let arrCart = [];
const cartCount = document.querySelector(".header__cart-count")
const headerCart = document.querySelector(".header__cart")
const popupCart = document.querySelector(".popup__cart")

function checkSize() {
    const cardBtn = document.querySelector(".card__size-btn")
    const cardSize = document.querySelector(".card__size-input")
    const cardList = document.querySelectorAll(".card__size-list")
    const cardCartBtn = document.querySelector(".card__cart-btn")
    const cardCheck = document.querySelector(".card__check")
    let count = 0;

    //check size
    if (cardBtn) {
        cardBtn.addEventListener("click", () => {
            cardSize.classList.toggle("open")
        })

        cardList.forEach(item => {
            item.addEventListener("click", () => {
                cardSize.classList.remove("open")
                cardBtn.dataset["size"] = item.dataset["size"]
                let itemSize = item.dataset["size"]
                return cardBtn.innerHTML = `Выбран размер ${itemSize}  <i class='bx bxs-down-arrow'></i>`
            })
        })
        // add to cart
        cardCartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (!cardBtn.dataset["size"]) {
                return cardCheck.innerHTML = `<div class="card__check-msg"> Вы не выбрали размер </div>`
            } else {
                let currentProduct = document.querySelector(".card__title").dataset.name;
                let products = JSON.parse(localStorage.getItem("products"));
                let findItem = products.find(product => product.name === currentProduct)
                let cartStorage = JSON.parse(localStorage.getItem("cart"));
                // arrCart = [...arrCart, findItem]

                if (cartStorage) {
                    let checkItem = cartStorage.find(item => item.name === currentProduct)
                    if (checkItem === undefined) {

                        arrCart = [...arrCart, findItem]
                        localStorage.setItem("cart", JSON.stringify(arrCart));
                        cardCartBtn.disabled = true;
                        cardCheck.innerHTML = `<div class="card__check-msg-true"> Товар добавлен в корзину <i class='bx bx-check-circle card__check-icon'></i> </div>`
                        checkStorage()
                    } else {
                        cardCheck.innerHTML = `<div class="card__check-msg-true"> Товар уже в корзине <i class='bx bx-check-circle card__check-icon'></i> </div>`
                    }
                } else {
                    arrCart = [...arrCart, findItem]
                    localStorage.setItem("cart", JSON.stringify(arrCart));
                    cardCheck.innerHTML = `<div class="card__check-msg-true"> Товар добавлен в корзину <i class='bx bx-check-circle card__check-icon'></i> </div>`
                    cardCartBtn.disabled = true;
                    checkStorage()

                }


            }


        })
    }


}

// display cart

function checkStorage() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) { cartCount.innerHTML = cart.length }
    else {
        cartCount.innerHTML = "";
    }
}

headerCart.addEventListener("click", () => {
    const totalBody = document.querySelector(".popup__total")
    //display cart
    uiCart()

    function uiCart() {
        let updateCart = JSON.parse(localStorage.getItem("cart"));
        if (updateCart === null) {
            popupCart.innerHTML = `<div class="popup__cart-empty">Вы не выбрали товар</div>`;
            totalBody.innerHTML = "";
        } else {
            let displayCart = updateCart.map(product => {
                return ` <div class="popup__cart-item">
        <div class="popup__cart-img"><img src="${product.img}" alt=""><i class='bx bx-x popup__cart-btn' data-id="${product.id}"></i></div>
        <div class="popup__cart-text">${product.name}</div>
        <div class="popup__cart-price" data-price="${product.price}">${product.price}$</div>
        </div>`

            })
            popupCart.innerHTML = displayCart;
            // display total price
            uiTotal()
            checkItem()
        }

    }
    function uiTotal() {
        let sum = 0;
        const CartPrice = document.querySelectorAll(".popup__cart-price")
        CartPrice.forEach(item => {
            totalPrice(item.dataset.price)
        })

        function totalPrice(price) {
            return sum += +price
        }

        totalBody.innerHTML = `<div class="popup__total-price">Итого:${sum}$</div>
    <div class="popup__total-btn">Оплатить</div>`
    }

    //check and remove items 
    function checkItem() {
        const delBtn = document.querySelectorAll(".popup__cart-btn")
        delBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                delItem(btn.dataset.id)
            })
        })

        function delItem(id) {
            currentId = id;
            let cart = JSON.parse(localStorage.getItem("cart"));
            let updateCart = cart.filter(item => item.id != currentId)
            arrCart = []

            if (updateCart.length === 0) {
                localStorage.removeItem('cart')
                uiCart()
                checkStorage()
            } else {
                localStorage.setItem("cart", JSON.stringify(updateCart))
                uiCart()
                checkStorage()
            }




        }
    }

})


// update cart onload
window.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) cartCount.innerHTML = cart.length;
})
// MODAL //

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", (e) => {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();

        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupCloseIcon.length > 0) {

    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];

        el.addEventListener("click", (e) => {

            popupClose(el.closest('.popup'));
            e.preventDefault();

        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            //chek delete cart btn
            if (!e.target.classList.contains("popup__cart-btn")) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            }

        });
    }
}

function popupClose(popupActive, doUnlock = true) {


    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }


}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';

        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');

    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);

}