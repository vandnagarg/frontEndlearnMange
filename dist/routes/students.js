"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var Courses = __importStar(require("./../queries/courses"));
var Batch = __importStar(require("./../queries/batches"));
var Lecture = __importStar(require("./../queries/lectures"));
var Student = __importStar(require("./../queries/students"));
var Teacher = __importStar(require("./../queries/teacher"));
var express_1 = require("express");
var courses = Courses;
var batch = Batch;
var lecture = Lecture;
var teacher = Teacher;
var student = Student;
var route = express_1.Router();
route.get('/', function (req, res) {
    student.fetchAllStudents().then(function (students) {
        res.json(students);
    });
});
route.post('/', function (req, res) {
    var arr = req.body.batches;
    student.insert(req.body.name, arr).then(function (students) { return res.send(students); });
});
route.post('/:id', function (req, res) {
    console.log(req.body.bid);
    student.insert1(req.params.id, req.body.bid).then(function (d) { return res.send(d); });
});
route.get('/:id/batches', function (req, res) {
    student.fetchAll(req.params.id).then(function (studs) {
        res.locals.students = studs;
        res.send(studs);
        //next();
    });
});
route.get('/:id', function (req, res) {
    student.fetchStudent(req.params.id).then(function (stud) { return res.send(stud); });
});
module.exports = { route: route };
