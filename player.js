//generic stats object

let p1Name = "Human";

let p1Stats = {
 HP: 125,
 MP: 75,
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

//not finished
let p1battle = {
  attack: function(mv){
    if(mv == 1){
      return this.move.punch();
    }
    else if(mv == 2){
      return this.move.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.DEF;
    this.stats.HP = this.stats.HP - rawDamage;
    if(this.stats.HP < 0){
      this.stats.HP = 0;
    }
  }
}

let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.ATK * 0.75;
    let bonus = 0.5 * this.stats.ATK * Math.random();
    return baseDamage + bonus;
  },
  charge: function(){
    let pain = Math.random();
    let bonus = 0.5 * this.stats.ATK * Math.random();
    if(pain < 0.50){
      this.stats.HP = this.stats.HP - this.stats.ATK/4;
      return this.stats.ATK + bonus;
    }
    else{
      return this.stats.ATK + bonus;
    }
  },
  roundhouseKick: function(){
    let tetradice = Math.random();
      let kick = Math.ceil(this.stats.ATK/2);
      if(tetradice < 0.33){
        return kick;
      }
      else if(tetradice < 0.66){
        return 2*kick;
      }
      else{
        return 3*kick;
    }
  },
  falconPunch: function(){
    let baseDamage = this.stats.ATK * 0.5;
    let bonus = this.stats.ATK * 1 * Math.random;
    return baseDamage + bonus;
  }
}

let magic = {
  hydroPump: function(){
    if(this.stats.MP >= 8){
      this.stats.MP = this.stats.MP - 8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.SP/3);
      if(tetradice < 0.10){
        return pump;
      }
      else if(tetradice < 0.30){
        return 2*pump;
      }
      else if(tetradice < 0.60){
        return 3*pump;
      }
      else{
        return 4*pump;
      }
    }
  },
  pyroBall: function(){
    if(this.stats.MP >= 6){
      this.stats.Mp = this.stats.MP - 6;
      let baseDamage = this.stats.SP * 0.88;
      let bonus = 0.32 * this.stats.SP * Math.random();
      return baseDamage + bonus;
    }
  },
  hyperBeam: function(){
    if(this.stats.MP >= 20){
      this.stats.Mp = this.stats.MP - 20;
      let baseDamage = this.stats.SP * 1.5;
      return baseDamage;
    }
  }
}