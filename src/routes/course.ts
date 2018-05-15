
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
    console.log('sdfsdf')
    courses.fetchAll(-1).then((courses)=>{
        console.log("sdSD" + courses)   
        res.send(courses)
    })
    
})
route.post('/',(req,res)=>{
    console.log(req.body.name + "yess")
    courses.insert(req.body.name).then((course)=>{
        console.log(course)
        res.send(course)
    })
})

route.get('/:id',(req,res)=>{
    courses.fetchAll(req.params.id).then((courses)=>{
        res.send(courses)
    })
})
route.put('/:id',(req,res)=>{
    courses.updateCourse(req.params.id,req.body.name).then();
})
route.delete('/:id',(req,res)=>{
    courses.deleteCourse(req.params.id).then();
})
route.get('/:id/batches',(req,res)=>{
    batch.fetchAll(req.params.id,-1).then((batches)=>{
        res.send(batches)
    })
})
route.post('/:id/batches',(req,res)=>{
    batch.insert(req.params.id,req.body.name,req.body.date).then(batch=>res.send(batch));
})
route.get('/:id/batches/:id1',(req,res)=>{
    batch.fetchAll(req.params.id,req.params.id1).then((batches)=>{
        res.send(batches)
    })
})
route.get('/:id/batches/:id1/lectures',(req,res)=>{
    lecture.fetchAll(req.params.id1,-1).then((lectures)=>{
        res.send(lectures)
    })
})

route.get('/:id/batches/:id1/lectures/:id2',(req,res)=>{
    lecture.fetchAll(req.params.id1,req.params.id2).then((lectures)=>{
        res.send(lectures)
    })
})
route.post('/:id/batches/:id1/lectures',(req,res)=>{
    lecture.insert(req.params.id1,req.body.sid,req.body.tid,req.body.name)
    .then((lec)=> res.send(lec))
})

route.get('/:id/batches/:id1/students',(req,res)=>{
    student.fetchAll(req.params.id1).then((studnets)=>{
        console.log('id = ' + req.params.id1 + " " + studnets)

        res.send(studnets)
    })
})
route.post('/:id/batches/:id1/students',(req,res)=>{
    student.insert(req.body.name,req.params.id1).then((course)=>{
        res.send(course)
    })
})
route.get('/:id/batches/:id1/teachers',(req,res)=>{
    // async function teachersFind(){
    //     let teachers = await teacher.fetchAll(req.params.id1);
    //     let teachers1 = await teacher.findTeachers(teachers);
    //     console.log(teachers1)
    //     res.send(teachers1);

    // }
    // teachersFind();
    teacher.fetchAll(req.params.id1).then((teachers)=>{
        //  teacher.findTeachers(teachers)
        console.log(teachers)
        res.send(teachers)
    })
})
export= {route};