
axios.get("https://fizal.me/pokeapi/api/v2/id/6.json")
.then(function (response){
  console.log(response.data);
  let charizard = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);
  charizard.sprite()
  console.log(response.data.stats[3].base_stat);
});

axios.get("https://fizal.me/pokeapi/api/v2/id/25.json")
.then(function (response){
  console.log(response.data);
  let pikachu = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);
  pikachu.sprite2()
});

axios.get("https://fizal.me/pokeapi/api/v2/id/395.json")
.then(function (response){
  console.log(response.data);
  let empoleon = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);
  empoleon.sprite3()
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

// class Trainer{
//   constructor() {
//     this.pokemon = []
//   }
//   all () {
//
//   }
//   get(name) {
//
//   }
// }
class Pokemon{
  constructor(id, name, hp, attack, defense, ability, sprite){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
  }
  sprite() {
    let div = document.getElementById('chari');
    let img = document.createElement('img');
    div.appendChild(img)
    img.src = "http://play.pokemonshowdown.com/sprites/xyani/" + this.name +".gif"
    document.getElementById('info').innerHTML = this.name;
    document.getElementById('charihp').innerHTML = this.hp;
    document.getElementById('chariatt').innerHTML = this.attack;
    document.getElementById('charidef').innerHTML = this.defense;
    document.getElementById('chariabi').innerHTML = this.ability;
  }
  sprite2() {
    let div = document.getElementById('pikapika');
    let img = document.createElement('img');
    div.appendChild(img)
    img.src = "http://play.pokemonshowdown.com/sprites/xyani/" + this.name +".gif"
    img.id = "pikabolt";
    document.getElementById('infor').innerHTML = this.name;
    document.getElementById('pikahp').innerHTML = this.hp;
    document.getElementById('pikaatt').innerHTML = this.attack;
    document.getElementById('pikadef').innerHTML = this.defense;
    document.getElementById('pikaabi').innerHTML = this.ability;
  }
  sprite3() {
    let div = document.getElementById('emp');
    let img = document.createElement('img');
    div.appendChild(img)
    img.src = "http://play.pokemonshowdown.com/sprites/xyani/" + this.name +".gif"
    img.id = "iceking";
    document.getElementById('inform').innerHTML = this.name;
    document.getElementById('emphp').innerHTML = this.hp;
    document.getElementById('empatt').innerHTML = this.attack;
    document.getElementById('empdef').innerHTML = this.defense;
    document.getElementById('empabi').innerHTML = this.ability;
  }
  // //display(){
  //   let charizardSprite = document.createElement('img');
  //   charizardSprite.src = this.sprite;
  //   document.getElementById('chari').appendChild(charizardSprite);
  // }
}
