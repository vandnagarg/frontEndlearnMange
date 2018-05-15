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
var Subject = __importStar(require("./../queries/subjects"));
var express_1 = require("express");
var courses = Courses;
var batch = Batch;
var lecture = Lecture;
var teacher = Teacher;
var student = Student;
var subject = Subject;
var route = express_1.Router();
route.get('/', function (req, res) {
    subject.fetchAll().then(function (subjects) { return res.send(subjects); });
});
route.get('/:id', function (req, res) {
    subject.fetchSubjectById(req.params.id).then(function (subs) { return res.send(subs); });
});
route.get('/:id/teachers', function (req, res) {
    teacher.fetchTeacherById(req.params.id).then(function (teachers) {
        res.send(teachers);
    });
});
route.post('/', function (req, res) {
    subject.insert(req.body.id, req.body.name).then(function (sub) {
        res.send(sub);
    });
});
route.put('/:id', function (req, res) {
    subject.updateSubject(req.params.id, req.body.name).then();
});
route.delete('/:id', function (req, res) {
    subject.deleteSubject(req.params.id).then();
});
route.post('/:id/teachers', function (req, res) {
    teacher.insertBySubject(req.params.id, req.body.name).then();
});
module.exports = { route: route };
