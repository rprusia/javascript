
var Person = function (name, birthYear, job){
    
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
    
};
    
// example of a function or method 
Person.prototype.calcAge = function() {
    
    var d = new Date();
    //var currentYear = d.getFullYear();
    //console.log('currentYear ' + currentYear);
    //console.log(currentYear - this.birthYear);    
    return d.getFullYear() - this.birthYear;
};


var ray = new Person('Ray', 1992, "Engineer");
var heather = new Person('Heather', 1990, "Engineer");
var sam = new Person('Sam', 2005, "Engineer");

console.log('Ray\'s age: ' + ray.calcAge());
console.log('Heather\'s age: ' + heather.calcAge());
console.log('Sam\'s age: ' + sam.calcAge());