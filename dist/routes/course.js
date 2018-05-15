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
    console.log('sdfsdf');
    courses.fetchAll(-1).then(function (courses) {
        console.log("sdSD" + courses);
        res.send(courses);
    });
});
route.post('/', function (req, res) {
    console.log(req.body.name + "yess");
    courses.insert(req.body.name).then(function (course) {
        console.log(course);
        res.send(course);
    });
});
route.get('/:id', function (req, res) {
    courses.fetchAll(req.params.id).then(function (courses) {
        res.send(courses);
    });
});
route.put('/:id', function (req, res) {
    courses.updateCourse(req.params.id, req.body.name).then();
});
route.delete('/:id', function (req, res) {
    courses.deleteCourse(req.params.id).then();
});
route.get('/:id/batches', function (req, res) {
    batch.fetchAll(req.params.id, -1).then(function (batches) {
        res.send(batches);
    });
});
route.post('/:id/batches', function (req, res) {
    batch.insert(req.params.id, req.body.name, req.body.date).then(function (batch) { return res.send(batch); });
});
route.get('/:id/batches/:id1', function (req, res) {
    batch.fetchAll(req.params.id, req.params.id1).then(function (batches) {
        res.send(batches);
    });
});
route.get('/:id/batches/:id1/lectures', function (req, res) {
    lecture.fetchAll(req.params.id1, -1).then(function (lectures) {
        res.send(lectures);
    });
});
route.get('/:id/batches/:id1/lectures/:id2', function (req, res) {
    lecture.fetchAll(req.params.id1, req.params.id2).then(function (lectures) {
        res.send(lectures);
    });
});
route.post('/:id/batches/:id1/lectures', function (req, res) {
    lecture.insert(req.params.id1, req.body.sid, req.body.tid, req.body.name)
        .then(function (lec) { return res.send(lec); });
});
route.get('/:id/batches/:id1/students', function (req, res) {
    student.fetchAll(req.params.id1).then(function (studnets) {
        console.log('id = ' + req.params.id1 + " " + studnets);
        res.send(studnets);
    });
});
route.post('/:id/batches/:id1/students', function (req, res) {
    student.insert(req.body.name, req.params.id1).then(function (course) {
        res.send(course);
    });
});
route.get('/:id/batches/:id1/teachers', function (req, res) {
    // async function teachersFind(){
    //     let teachers = await teacher.fetchAll(req.params.id1);
    //     let teachers1 = await teacher.findTeachers(teachers);
    //     console.log(teachers1)
    //     res.send(teachers1);
    // }
    // teachersFind();
    teacher.fetchAll(req.params.id1).then(function (teachers) {
        //  teacher.findTeachers(teachers)
        console.log(teachers);
        res.send(teachers);
    });
});
module.exports = { route: route };
