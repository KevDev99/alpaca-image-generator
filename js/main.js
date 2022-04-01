const categories = [
  {
    id: 1,
    title: "hair",
  },
  {
    id: 2,
    title: "ears",
  },
  {
    id: 3,
    title: "eyes",
  },
  {
    id: 4,
    title: "mouth",
  },
  {
    id: 5,
    title: "neck",
  },
  {
    id: 6,
    title: "leg",
  },
  {
    id: 7,
    title: "accessories",
  },
  {
    id: 8,
    title: "backgrounds",
  },
];

const categorieItems = [
  {
    categoryId: 1,
    items: [
      {
        id: 1,
        title: "Default",
        imgPath: "./img/alpaca/hair/default.png",
      },
      {
        id: 2,
        title: "Curls",
        imgPath: "./img/alpaca/hair/curls.png",
      },
      {
        id: 3,
        title: "Short",
        imgPath: "./img/alpaca/hair/short.png",
      },
      {
        id: 4,
        title: "Bang",
        imgPath: "./img/alpaca/hair/bang.png",
      },
      {
        id: 5,
        title: "Elegant",
        imgPath: "./img/alpaca/hair/elegant.png",
      },
      {
        id: 6,
        title: "Quiff",
        imgPath: "./img/alpaca/hair/quiff.png",
      },
    ],
  },
  {
    categoryId: 2,
    items: [
      {
        id: 1,
        title: "Default",
        imgPath: "./img/alpaca/ears/default.png",
      },
      {
        id: 2,
        title: "Tilt Back",
        imgPath: "./img/alpaca/ears/tilt-backward.png",
      },
      {
        id: 3,
        title: "Tild Forward",
        imgPath: "./img/alpaca/ears/tilt-forward.png",
      },
    ],
  },
  {
    categoryId: 3,
    items: [
      {
        id: 1,
        title: "Default",
        imgPath: "./img/alpaca/eyes/default.png",
      },
      {
        id: 2,
        title: "Angry",
        imgPath: "./img/alpaca/eyes/angry.png",
      },
      {
        id: 3,
        title: "Naughty",
        imgPath: "./img/alpaca/eyes/naughty.png",
      },
      {
        id: 4,
        title: "Panda",
        imgPath: "./img/alpaca/eyes/panda.png",
      },
      {
        id: 5,
        title: "Smart",
        imgPath: "./img/alpaca/eyes/smart.png",
      },
      {
        id: 6,
        title: "Star",
        imgPath: "./img/alpaca/eyes/star.png",
      },
    ],
  },
  {
    categoryId: 4,
    items: [
      {
        id: 1,
        title: "Default",
        imgPath: "./img/alpaca/mouth/default.png",
      },
      {
        id: 2,
        title: "Astonished",
        imgPath: "./img/alpaca/mouth/astonished.png",
      },
      {
        id: 3,
        title: "Eating",
        imgPath: "./img/alpaca/mouth/eating.png",
      },
      {
        id: 4,
        title: "Laugh",
        imgPath: "./img/alpaca/mouth/laugh.png",
      },
      {
        id: 5,
        title: "Default",
        imgPath: "./img/alpaca/mouth/tongue.png",
      },
    ],
  },
  {
    categoryId: 5,
    items: [
      {
        id: 1,
        title: "Default",
        imgPath: "./img/alpaca/neck/default.png",
      },
      {
        id: 2,
        title: "Thick",
        imgPath: "./img/alpaca/neck/thick.png",
      },
      {
        id: 3,
        title: "Bend back",
        imgPath: "./img/alpaca/neck/bend-backward.png",
      },
      {
        id: 4,
        title: "Bend forward",
        imgPath: "./img/alpaca/neck/bend-forward.png",
      },
    ],
  },
  {
    categoryId: 6,
    items: [
      {
        id: 1,
        title: "Default",
        imgPath: "./img/alpaca/leg/default.png",
      },
      {
        id: 2,
        title: "Bubble Tea",
        imgPath: "./img/alpaca/leg/bubble-tea.png",
      },
      {
        id: 3,
        title: "Cookie",
        imgPath: "./img/alpaca/leg/cookie.png",
      },
      {
        id: 4,
        title: "Game Console",
        imgPath: "./img/alpaca/neck/game-console.png",
      },
      {
        id: 5,
        title: "Tilt back",
        imgPath: "./img/alpaca/neck/tilt-backward.png",
      },
      {
        id: 6,
        title: "Tilt forward",
        imgPath: "./img/alpaca/neck/tilt-forward.png",
      },
    ],
  },
  {
    categoryId: 7,
    items: [
      {
        id: 1,
        title: "Headphone",
        imgPath: "./img/alpaca/accessories/headphone.png",
      },
      {
        id: 2,
        title: "Earings",
        imgPath: "./img/alpaca/accessories/earings.png",
      },
      {
        id: 3,
        title: "Flower",
        imgPath: "./img/alpaca/accessories/flower.png",
      },
      {
        id: 4,
        title: "Glasses",
        imgPath: "./img/alpaca/accessories/glasses.png",
      },
    ],
  },
  {
    categoryId: 8,
    items: [
      {
        id: 1,
        title: "Blue 50",
        imgPath: "./img/alpaca/backgrounds/blue50.png",
      },
      {
        id: 2,
        title: "Blue 60",
        imgPath: "./img/alpaca/backgrounds/blue60.png",
      },
      {
        id: 3,
        title: "Blue 70",
        imgPath: "./img/alpaca/backgrounds/blue70.png",
      },
      {
        id: 4,
        title: "Darkblue 30",
        imgPath: "./img/alpaca/backgrounds/darkblue30.png",
      },
      {
        id: 5,
        title: "Darkblue 50",
        imgPath: "./img/alpaca/backgrounds/darkblue50.png",
      },
      {
        id: 6,
        title: "Darkblue 70",
        imgPath: "./img/alpaca/backgrounds/darkblue70.png",
      },
      {
        id: 7,
        title: "Green 50",
        imgPath: "./img/alpaca/backgrounds/green50.png",
      },
      {
        id: 8,
        title: "Green 60",
        imgPath: "./img/alpaca/backgrounds/green60.png",
      },
      {
        id: 9,
        title: "Green 70",
        imgPath: "./img/alpaca/backgrounds/green70.png",
      },
      {
        id: 10,
        title: "Grey 40",
        imgPath: "./img/alpaca/backgrounds/grey40.png",
      },
      {
        id: 11,
        title: "Grey 70",
        imgPath: "./img/alpaca/backgrounds/grey70.png",
      },
      {
        id: 12,
        title: "Grey 80",
        imgPath: "./img/alpaca/backgrounds/grey80.png",
      },
      {
        id: 13,
        title: "Red 50",
        imgPath: "./img/alpaca/backgrounds/red50.png",
      },
      {
        id: 14,
        title: "Red 60",
        imgPath: "./img/alpaca/backgrounds/red60.png",
      },
      {
        id: 15,
        title: "Red 70",
        imgPath: "./img/alpaca/backgrounds/red70.png",
      },
      {
        id: 16,
        title: "Yellow 50",
        imgPath: "./img/alpaca/backgrounds/yellow50.png",
      },
      {
        id: 17,
        title: "Yellow 60",
        imgPath: "./img/alpaca/backgrounds/yellow60.png",
      },
      {
        id: 18,
        title: "Yellow 70",
        imgPath: "./img/alpaca/backgrounds/yellow70.png",
      },
    ],
  },
];

let gCategoryId = 1;
let gAlpaca = {
  hair: 1,
  accessories: 1,
  backgrounds: 1,
  ears: 1,
  eyes: 1,
  leg: 1,
  mouth: 1,
  neck: 1,
};

const _categoryUl = document.getElementById("categorys");
const _categoryItemsUl = document.getElementById("categorysItems");

onInit();

function onInit() {
  loadCategories();
  loadCategoryItems();
}

function loadCategories(activeCategory = 1) {
  // loop through the categories and load each category within a li
  categories.map((category) => {
    let _categoryLi = document.createElement("li");

    // set the id to identify the li later on
    _categoryLi.id = category.id;
    // set the onclick handler
    _categoryLi.onclick = () => setCategory(category.id);
    // add base class
    _categoryLi.classList.add("category-item");

    // if its the first one -> set to active
    if (category.id === activeCategory) {
      _categoryLi.classList.add("active");
    }

    _categoryLi.appendChild(document.createTextNode(category.title));
    _categoryUl.appendChild(_categoryLi);
  });
}

function loadCategoryItems(activeCategoryId = 1) {
  // set the first category active
  const currentCategory = categories.find(
    (category) => category.id === activeCategoryId
  );

  // get the category items of the first
  const firstCategoryItems = categorieItems.find(
    (categoryItem) => categoryItem.categoryId === currentCategory.id
  );

  // clean current list items
  _categoryItemsUl.innerHTML = "";

  firstCategoryItems.items.map((categoryItem) => {
    let _categoryLi = document.createElement("li");

    _categoryLi.id = categoryItem.id;
    _categoryLi.onclick = () => setCategoryItem(categoryItem.id);
    _categoryLi.classList.add("category-item");

    // if its the first one -> set to active
    if (gAlpaca[currentCategory.title] == categoryItem.id) {
      _categoryLi.classList.add("active");
    }

    _categoryLi.appendChild(document.createTextNode(categoryItem.title));
    _categoryItemsUl.appendChild(_categoryLi);
  });
}

function setCategoryItem(categoryItemId) {
  setActiveCategoryItem(categoryItemId);
  const selectedCategory = categorieItems.find(
    (categoryItem) => categoryItem.categoryId == gCategoryId
  );

  // get category
  const category = categories.find((category) => category.id == gCategoryId);

  // get selected category item
  const selectedCategoryItem = selectedCategory.items.find(
    (categoryItem) => categoryItem.id == categoryItemId
  );

  // get image part of the alpaca
  const _imagePart = document.getElementById(`alpaca-${category.title}`);
  // set the selected image
  _imagePart.src = selectedCategoryItem.imgPath;
}

function setActiveCategoryItem(categoryItemId) {
  if (!categoryItemId) return;

  // loop through each item and remove the active class if its set
  // set the active class for the selected category
  const _categoryItemsUlListItems = _categoryItemsUl.children;
  for (var i = 0; i < _categoryItemsUlListItems.length; i++) {
    if (_categoryItemsUlListItems[i].id == categoryItemId) {
      _categoryItemsUlListItems[i].classList.add("active");
      // add also to the glboal gAlpaca object to save the state
      const currentCategory = categories.find(
        (category) => category.id == gCategoryId
      );
      gAlpaca[currentCategory.title] = _categoryItemsUlListItems[i].id;
    } else {
      _categoryItemsUlListItems[i].classList.remove("active");
    }
  }
}

function setActiveCategory(categoryId) {
  if (!categoryId) return;

  // loop through each item and remove the active class if its set
  // set the active class for the selected category
  const _categoryUlListItems = _categoryUl.children;
  for (var i = 0; i < _categoryUlListItems.length; i++) {
    if (_categoryUlListItems[i].id == categoryId) {
      _categoryUlListItems[i].classList.add("active");
    } else {
      _categoryUlListItems[i].classList.remove("active");
    }
  }
}

function setCategory(categoryId) {
  if (!categoryId) return;

  // save globally
  gCategoryId = categoryId;
  setActiveCategory(categoryId);
  loadCategoryItems(categoryId);
}
