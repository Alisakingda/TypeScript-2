"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(sex, name, age) {
        this.face = 'weixiao';
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    Student.prototype.say = function () {
        console.log('你好');
    };
    Student.prototype.sayLove = function () {
        console.log('爱你');
    };
    return Student;
}());
// 继承
var SmallStudent = /** @class */ (function (_super) {
    __extends(SmallStudent, _super);
    function SmallStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmallStudent.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log('么么哒');
    };
    return SmallStudent;
}(Student));
var xiao = new SmallStudent('男', 'man', 18);
xiao.say();
