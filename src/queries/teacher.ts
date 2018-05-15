

import {Leture} from './../db'
import {Teacher} from './../db'
import {Sequelize} from 'sequelize'


async function fetchAllTeachers(){
    try{
        let teachers = await Teacher.findAll();
        return teachers;
    }
    catch(err){
        console.log(err)
    }
}
async function fetchTeacherById(id){
    try{
        let teachers = await Teacher.findAll({
            where:{
                subjectId:{
                    [Sequelize.Op.eq]:id
                }
            }
        })
        return teachers;
    }
    catch(err)
    {
        console.log(err)
    }
}
async function fetchById(id){
    try{
        let teachers = await Teacher.findAll({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            }
        })
        return teachers;
    }
    catch(err)
    {
        console.log(err)
    }
}

async function fetchAll(id) {

    try{
       
            let lectures = await Leture.findAll({
                where:{
                    batchId:{
                        [Sequelize.Op.eq] : id
                    },
                    
                },
                include:[{
                    model:Teacher,
                    as:'teacher'
                }]
                // attributes:['id','teacherId']
            })
            let teachers = [];
            lectures.forEach(lecture=>{
                teachers.push(lecture.teacher);
            })
            return teachers;
       
        

    }
    catch(err){
        console.log(err)
    }
}
async function findTeachers(teachers){
    let teacherTotal = [];
    teachers.forEach(teach => {
        if(teacherTotal.indexOf(teach.teacherId) == -1)
        {
            teacherTotal.push(teach.teacherId);

        }

    });
    let totalTeachers=[];
    
     teacherTotal.forEach(id=>{
         Teacher.findOne({
            where:
            {
                id:{
                    [Sequelize.Op.eq]:id
                }
            },
            include:[{
                model:Teacher
            }
                
            ]
        })
    
        
    })
    console.log(totalTeachers)
    return totalTeachers;
}
async function insertBySubject(id,name){
    try{
        let teacer = await Teacher.create({
            name:name,
            subjectId:id
        })
        await teacer.save();
        return teacer;

    }
    catch(err){
        console.log(err)
    }
}
async function deleteById(id){
    try{
        await Teacher.destroy({
            where:{
                id:{
                    [Sequelize.Op.id]:id,
                }
            }
        })
    }
    catch(err){
        console.log(err)
    }
}
export {
    fetchAll,
    fetchTeacherById,
    insertBySubject,
    fetchAllTeachers,
    fetchById,
    deleteById,findTeachers
}
