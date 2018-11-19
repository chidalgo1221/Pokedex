
axios.get("https://fizal.me/pokeapi/api/v2/id/6.json")
.then(function (response){
  console.log(response.data);
  let charizardSprite = document.createElement('img');
  charizardSprite.src = response.data.sprites.front_default;
  document.getElementById('chari').appendChild(charizardSprite);
});

function play(){
  var audio = document.getElementById("raycry");
  raycry.play();
        }

function play(){
  var audio = document.getElementById("charcry");
  charcry.play();
        }

document.getElementById('ray').onclick = function() {
    if (this.src == 'https://pa1.narvii.com/6260/9ac5dd897c7ec3fdf50ebe092369f319c340003b_hq.gif') {
        this.src = 'https://mbtskoudsalg.com/images/rayquaza-transparent-sprite-emerald-5.gif';
    } else if (this.src == 'https://mbtskoudsalg.com/images/rayquaza-transparent-sprite-emerald-5.gif') {
        this.src = 'https://pa1.narvii.com/6260/9ac5dd897c7ec3fdf50ebe092369f319c340003b_hq.gif';
    } else {
        alert('error');
    }
}



class Pokemon{
  constructor(id, name, hp, attack, defense, ability){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
  }
}
