
import * as Courses from './../queries/courses'
import * as Batch from './../queries/batches'
import * as Lecture from './../queries/lectures'
import * as Student from './../queries/students'
import * as Teacher from './../queries/teacher'
import {Sequelize} from 'sequelize'
import express,{Router} from 'express'
import path from 'path'

const courses = Courses;
const batch= Batch;
const lecture = Lecture;
const teacher = Teacher;
const student = Student;

const route:Router = Router()
route.get('/',(req,res)=>{
    student.fetchAllStudents().then((students)=>{
        res.json(students)
    })
})
route.post('/',(req,res)=>{
    let arr = req.body.batches;
    student.insert(req.body.name,arr).then((students)=>res.send(students));
})
route.post('/:id',(req,res)=>{
    console.log(req.body.bid )
    student.insert1(req.params.id,req.body.bid).then(d=>res.send(d))
})
route.get('/:id/batches',(req,res)=>{
    student.fetchAll(req.params.id).then((studs)=>{
        res.locals.students = studs;
         res.send(studs)
        //next();
    });
})

route.get('/:id',(req,res)=>{
   student.fetchStudent(req.params.id).then((stud)=>res.send(stud))
})
export={route}
