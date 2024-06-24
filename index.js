console.log("Master Prototypes");

const utility = {
  increment: function () {
    this.marks++;
    console.log(this.name, "- marks :>", this.marks);
  },
  decrement: function () {
    this.marks--;
    console.log(this.name, "- marks :>", this.marks);
  },
};

// Factory function => Function which helps to create an object and return it.
function createStudent(name, marks) {
  const obj = Object.create(utility);
  obj.name = name;
  obj.marks = marks;
  return obj;
}

const stu1 = createStudent("Twinkle", 33);
// console.log(stu1);

// Problem with this approch
// > addition of new functionality
// > Memory consumption = increase with every object

// const obj = {};
// obj.__proto__ = utility;
const obj = Object.create(utility);
obj.name = "Test";
obj.srNumber = 12282;

// Every Prototype object has one __proto__ property which is also known as dunder proto. The work of this property is to return the Prototype of your object.
// Every function __proto__ has it's own getter and setter function.
console.log("obj :>", obj);
console.log("obj.__proto__ :>", obj.__proto__);

// __proto__ = Point to the Prototype of your object. return the linked object.

// prototype = Link between main object and prototype object

// [[Prototype]] = Actual linked object [Prototype], in our case utility function.

function isFunctionAreObjects() {}
isFunctionAreObjects.prop1 = "Property";
console.dir(isFunctionAreObjects);
console.log("isFunctionAreObjects.prop1 :>", isFunctionAreObjects.prop1);

const arr = [1, 2, 3, 4, 5];
console.log('arr :>>', arr)
if(arr.hasOwnProperty(0)){
    console.log('arr.0 :>', arr[0]);
}

// .constructor property tell that with which object it is linked simply "whoIsMyParent"
console.log('arr.constructor :>', arr.constructor);


function CreateObject(name) {
    this.name = name;
}

CreateObject.prototype.getName = function() {
    console.log("Name :>", this.name);
}

const twinkle = new CreateObject("Twinkle");

console.log('twinkle.__proto__ :>', twinkle.__proto__);
console.log(twinkle instanceof CreateObject);
console.log(twinkle.__proto__ === CreateObject);
console.log(twinkle.__proto__ === CreateObject.prototype);
twinkle.getName();




// Tricky
const person = {
    age: 80,
};
const person2 = {};

// Object.setPrototypeOf(person2, person);
// depricated solution:  
person2.__proto__ = person;

console.log("Person2.age :>", person2.age);


// -----------------------------------------


// Tricky
function Animal() {
    this.legs = 4;
}

function Dog() {
    Animal.call(this);
    this.showNumberOfLegs = functions() {
        console.log(this.legs);
    }
}

Dog.prototype = Animal;
Dog.prototype.constructor = Dog;

const myPet = new Dog();
console.log(Animal.constructor === Dog.constructor);