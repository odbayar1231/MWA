var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Student = class Student {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }
};
Student = __decorate([
    Token({ id: 123, canTalk: true })
], Student);
function Token(token) {
    return function (constructor) {
        constructor.prototype.token = token.id;
        if (token.canTalk) {
            constructor.prototype.talk = function () {
                console.log("I can talk");
            };
        }
    };
}
const jack = new Student("Jack Smith", 3.3);
console.log("Student info", jack.name, jack.gpa);
console.log("Token", jack["token"]);
jack["talk"]();
