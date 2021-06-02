document.addEventListener("DOMContentLoaded", function () {

  let btn = document.createElement("button");
      btn.textContent = "Click ME";
      btn.addEventListener("click", function () {
          alert("Something FUNNY!");
    });
      document.body.appendChild(btn);

      
  let formText = document.getElementById("formText");
  let formBtn = document.querySelector("#formBtn");
      formBtn.addEventListener("click",function () {
              alert(formText.value);
    });

  let div = document.getElementById("div");
      div.addEventListener("mouseenter", function () {
      div.style.backgroundColor = "orange";
    });
      div.addEventListener("mouseleave", function () {
      div.style.backgroundColor = "blue";
    });
    

  let p4 = document.getElementById("p4");
      p4.addEventListener("click", function () {
      p4.style.color = 'red';
    });

  let btn5 = document.getElementById("btn5");
  let div5 = document.getElementById("div5");
      btn5.addEventListener("click", function () {
  let span = document.createElement("span");
      span.textContent = "Christopher";
      div5.appendChild(span);
    });

  let btn6 = document.getElementById("btn6");
  let ul = document.getElementById("ul");
  let friends = [
    "Alina",
    "Kaz",
    "Nina",
    "Nikolai",
    "Malyen",
    "Zoya",
    "Inej",
    "Baghra",
    "Pella",
    "Jesper",
  ];
  let friendCounter = 0;

    btn6.addEventListener("click", function () {
        if (friendCounter < friends.length) {
            let li = document.createElement("li");
            li.textContent = friends[friendCounter];
            ul.appendChild(li);
    
            friendCounter++    
        } else {
            btn6.disabled = "true";
        }
    });
});













