let cards = [
  {
    name: "php",
    img: "./image/php.png",
    id: 1,
  },
  {
    name: "css3",
    img: "./image/css3.png",
    id: 2,
  },
  {
    name: "html5",
    img: "./image/html5.png",
    id: 3,
  },
  {
    name: "javascript",
    img: "./image/javascript.png",
    id: 4,
  },
  {
    name: "node",
    img: "./image/nodejs.png",
    id: 5,
  },
  {
    name: "photoshop",
    img: "./image/photoshop.png",
    id: 6,
  },
  {
    name: "python",
    img: "./image/python.png",
    id: 7,
  },
  {
    name: "sass",
    img: "./image/sass.png",
    id: 8,
  },
  {
    name: "sublime",
    img: "./image/sublime.png",
    id: 9,
  },
  {
    name: "wordpress",
    img: "./image/wordpress.png",
    id: 10,
  },
  {
    name: "php",
    img: "./image/php.png",
    id: 11,
  },
  {
    name: "css3",
    img: "./image/css3.png",
    id: 12,
  },
  {
    name: "html5",
    img: "./image/html5.png",
    id: 13,
  },
  {
    name: "javascript",
    img: "./image/javascript.png",
    id: 14,
  },
  {
    name: "node",
    img: "./image/nodejs.png",
    id: 15,
  },
  {
    name: "photoshop",
    img: "./image/photoshop.png",
    id: 16,
  },
  {
    name: "python",
    img: "./image/python.png",
    id: 17,
  },
  {
    name: "sass",
    img: "./image/sass.png",
    id: 18,
  },
  {
    name: "sublime",
    img: "./image/sublime.png",
    id: 19,
  },
  {
    name: "wordpress",
    img: "./image/wordpress.png",
    id: 20,
  },
];

let divComponent = document.createElement("div");
document.body.appendChild(divComponent);
divComponent.style.width = "1000px";
divComponent.style.height = "800px";
divComponent.style.background = "green";
divComponent.style.position = "absolute";
divComponent.style.left = "20%";
divComponent.style.top = "20%";

let score = 1000;
let game = false;
let createScore = document.createElement("div");
document.body.appendChild(createScore);
createScore.style.width = "200px";
createScore.style.color = "black";
createScore.innerText = " your score: 0";
createScore.style.fontSize = "30px";
createScore.style.position = "absolute";
createScore.style.left = "20%";

function createButtonPlay() {
  let creatButtonPlay = document.createElement("button");
  creatButtonPlay.innerText = "Play Game";
  creatButtonPlay.style.color = "gray";
  creatButtonPlay.style.width = "100px";
  creatButtonPlay.style.height = "40px";
  creatButtonPlay.style.top = "20%";
  createScore.appendChild(creatButtonPlay);
  return creatButtonPlay;
}
//createButtonPlay();
let buttonPlay = createButtonPlay();
buttonPlay.addEventListener("click", () => {
  createScore.innerText = " your score: " + score;
  shuffleCards(cards);
  game = true;
  createCard();
});

function createCard() {
  let card = [];
  let label = [];
  let divBack = [];
  let distanceTop = 0;
  let count = 0;
  for (let index = 0; index < 20; index++) {
    let khoangCach = 0;
    if (index >= 0 && index < 20) {
      card[index] = document.createElement("div");
      divComponent.appendChild(card[index]);

      card[index].style.width = "200px";
      card[index].style.height = "200px";
      card[index].style.background = "orange";
      card[index].style.position = "absolute";
      card[index].style.border = "2px solid blue";
      khoangCach = count * 200;
      card[index].style.left = khoangCach + "px";
      card[index].style.top = distanceTop + "px";
      card[index].id = "card-" + index;
      
      card[index].addEventListener("click", clickCard);

      label[index] = document.createElement("p");
      card[index].appendChild(label[index]);
      label[index].innerText = index + 1;
      label[index].style.position = "absolute";
      label[index].style.top = "30px";
      label[index].style.width = "100%";
      label[index].style.textAlign = "center";
      label[index].style.fontSize = "50px";
      label[index].style.color = "white";

      divBack[index] = document.createElement("img");
      divComponent.appendChild(divBack[index]);
      divBack[index].style.width = "200px";
      divBack[index].src = cards[index].img;
      divBack[index].position = "absolute";
      khoangCach = count * 200;
      divBack[index].style.left = khoangCach + "px";
      divBack[index].style.top = distanceTop + "px";
      divBack[index].id = "img-" + index;

      count++;
      if (count == 5) {
        distanceTop += 200;
        count = 0;
      }
    }
  }
}

function shuffleCards(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function clickCard(e) {
  console.log(e);
  console.log(e.path[1].id);

  if (game == true) {
    let dem = 0;
    if (dem > 2) {
      dem = 0;
      for (let index = 0; index < 20; index++) {
        document.getElementById("card-" + index).style.display = "block";
      }
    } else {
      dem++;
      console.log(dem);
      let n = e.path[1].id ? 1 : 0;
      let m = e.path[n].id;
      document.getElementById(m).style.display = "none";
    }
  }
}

function checkCard() {
  let pickCard = [];
  let dem = 0;
  if (dem == 2) {
    dem = 0;
    for (let index = 0; index < 20; index++) {
      document.getElementById("card-" + index).style.display = "block";
    }
  } else {
    dem++;
    console.log(dem);
  }
}

console.log(shuffleCards(cards));
