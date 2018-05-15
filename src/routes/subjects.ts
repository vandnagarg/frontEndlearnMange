
import * as Courses from './../queries/courses'
import * as Batch from './../queries/batches'
import * as Lecture from './../queries/lectures'
import * as Student from './../queries/students'
import * as Teacher from './../queries/teacher'
import * as Subject from './../queries/subjects'
import {Sequelize} from 'sequelize'
import express,{Router} from 'express'
import path from 'path'

const courses = Courses;
const batch= Batch;
const lecture = Lecture;
const teacher = Teacher;
const student = Student;
const subject = Subject;

const route:Router = Router()

route.get('/',(req,res)=>{
    subject.fetchAll().then((subjects)=>res.send(subjects));
})
route.get('/:id',(req,res)=>{
    subject.fetchSubjectById(req.params.id).then((subs)=>res.send(subs))
})
route.get('/:id/teachers',(req,res)=>{
    teacher.fetchTeacherById(req.params.id).then((teachers)=>{
        res.send(teachers)
    })
})
route.post('/',(req,res)=>{
    subject.insert(req.body.id,req.body.name).then((sub)=>{
        res.send(sub)
    })
})
route.put('/:id',(req,res)=>{
    subject.updateSubject(req.params.id,req.body.name).then();
})
route.delete('/:id',(req,res)=>{
    subject.deleteSubject(req.params.id).then();
})
route.post('/:id/teachers',(req,res)=>{
    teacher.insertBySubject(req.params.id,req.body.name).then();
})
export={route}
