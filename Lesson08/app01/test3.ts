@Token({id:123, canTalk:true}) //decorator adding attribute and function
class Student {

    constructor(public name:String, public gpa:number){}
}

function Token(token:any){
    return function(constructor:Function) {
        constructor.prototype.token = token.id;
        if(token.canTalk) {
            constructor.prototype.talk = function(){
                console.log("I can talk");
            }
        }
    }
}

const jack = new Student("Jack Smith", 3.3);

console.log("Student info", jack.name, jack.gpa);

console.log("Token", jack["token"]);

jack["talk"]();

// let john = new DE_Student("John Simons", 3.0);

// console.log("john Token", john)

