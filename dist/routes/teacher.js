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
    teacher.fetchAllTeachers().then(function (teacher) {
        res.send(teacher);
    });
});
route.post('/', function (req, res) {
    teacher.insertBySubject(req.body.id, req.body.name).then(function (teacher) {
        res.send(teacher);
    });
});
route.get('/:id', function (req, res) {
    teacher.fetchById(req.params.id).then(function (teacher) {
        res.send(teacher);
    });
});
route.get('/:id/batches', function (req, res) {
    lecture.fetchAllBatches(req.params.id).then(function (batches) {
        res.send(batches);
    });
});
route.delete('/:id', function (req, res) {
    teacher.deleteById(req.params.id).then();
});
module.exports = { route: route };
