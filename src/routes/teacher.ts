
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
    teacher.fetchAllTeachers().then((teacher)=>{
        res.send(teacher);
    })
})
route.post('/',(req,res)=>{
    teacher.insertBySubject(req.body.id,req.body.name).then((teacher)=>{
        res.send(teacher)
    })
})
route.get('/:id',(req,res)=>{
    teacher.fetchById(req.params.id).then((teacher)=>{
        res.send(teacher);
    })
})
route.get('/:id/batches',(req,res)=>{
    lecture.fetchAllBatches(req.params.id).then((batches)=>{
        res.send(batches);
    })
})
route.delete('/:id',(req,res)=>{
    teacher.deleteById(req.params.id).then();
})
export={route}

