let h1 = document.createElement("h1");
h1.className = "title";
h1.style.textAlign = "center";
h1.textContent = "Сыграй в меня - получи полное наслаждение от жизни!";
document.body.append(h1);

let conteiner = document.createElement("div");

document.body.append(conteiner);
conteiner.className = "conteiner";
conteiner.style.width = "300px";
conteiner.style.height = "300px";
conteiner.style.display = "grid";
conteiner.style.gridTemplateColumns = "100px 100px 100px";
conteiner.style.gridTemplateRows = "100px 100px 100px";
conteiner.style.border = "1px solid black";

let div1 = document.createElement("div");
document.body.append(div1);
div1.className = "div";
div1.style.backgroundColor = "cyan";
conteiner.prepend(div1);
div1.style.display = "flex";
div1.style.width = "100%";
div1.style.height = "100%";
div1.style.alignItems = "center";
div1.style.justifyContent = "center";
div1.style.fontSize = "35px";
div1.style.border = "1px solid black";

function clone(blockNumber) {
  let arrDivs = [];

  for (let i = 2; i <= blockNumber; i++) {
    arrDivs.push("div" + i);
  }

  arrDivs.forEach((divs) => {
    divs = div1.cloneNode(true);
    divs.className = "div";
    conteiner.prepend(divs);
  });
}
clone(9);

conteiner = document.querySelector(".conteiner");

let divs = document.querySelectorAll(".div");

function start(divs) {
  let i = 0;
  for (let div of divs) {
    div.addEventListener("click", function step() {
      if (i % 2 == 0) {
        this.innerHTML = "X";
      } else {
        this.innerHTML = "O";
      }
      this.removeEventListener("click", step);
      if (i == 8) {
        textResult = "ничьюшечка. Катани еще раз катку";
        result();
      }
      check();
      i++;
    });
  }
}
start(divs);

let textResult = "";

function check() {
  let victoriousVariants = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let variant of victoriousVariants) {
    if (divs[variant[0]].innerHTML == "X" && divs[variant[1]].innerHTML == "X" && divs[variant[2]].innerHTML == "X") {
      textResult = "победили Xрестики. Юххууу!!";
      result();
    } else if (divs[variant[0]].innerHTML == "O" && divs[variant[1]].innerHTML == "O" && divs[variant[2]].innerHTML == "O") {
      textResult = "победили Oлики. Ты большой молодец!";
      result();
    }
  }
}
const body = document.body;

function result() {
  conteiner.innerHTML = `${textResult}`;
  // body.style.backgroundColor = "grey";
  // body.addEventListener("click", () => location.reload());
}
