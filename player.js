//generic stats object

let p1Name = "Human";

let p1Stats = {
 HP: 100,
 MP: 100,
 ATK: 50,
 DEF: 30,
 SP: 40
}

let p2Name = "Orc";

let p2Stats = {
  HP: 150,
  MP: 50,
  ATK: 60,
  DEF: 30,
  SP: 30
}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
    
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
