//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (details) {
  this.name = details.name;
  this.status = details.status;
  this.color = details.color;
  this.hungry = details.hungry;
};

let sadie = new Dog({
  name: 'sadie',
  status: 'normal',
  color: 'black',
  hungry: false
});

let moonshine = new Dog ({
  name: 'moonshine',
  status: 'normal',
  color: 'black',
  hungry: true
})
let atticus = new Dog ({
})

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (humandetails) {
  this.name = humandetails.name;
  this.cool = humandetails.cool;
  this.feed = function( dog){
    console.log(this.name + ' feeds ' + dog.name);
    return dog.hungry = false
  };
  this.pet = function (dog) {
return dog.status = 'happy' };
}
let mason = new Human({
  name: 'mason',
  pet:  'sadie',
  cool: false

});
let julia = new Human({
  name: 'Julia',
  cool: true
});
// Instances of Human
// Needed: mason, julia
