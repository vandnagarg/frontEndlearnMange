

import {Course as Courses } from './../db'
import {Sequelize} from 'sequelize'

async function fetchAll(id){
    try{
        // To find all the courses
        let courses = [];
        if(id == -1)
        {
             courses = await Courses.findAll();
        }
        else{
             courses = await Courses.findAll({
                 where:{
                     id:{
                        [Sequelize.Op.eq]:id
                     }
                 }
             });
            
        }
        // console.log("courses" + courses)
        return courses;
    }
    catch(err){
        console.log(err)
    }
}
async function insert(name){
    try{
        let course = await Courses.create({
            name:name   
        })
        await course.save();
        return course;

    }
    catch(err){
        console.log(err)
    }
}
async function updateCourse(id,name){
    try{
        const course = await Courses.findOne({
            where:
            {
                id:id,
                
            }
        });
        course.name = name;
        await course.save();
    }   
    catch(err){
        console.log(err)
    }
}
async function deleteCourse(id){
    try{
        await Courses.destroy({
            where:{
                id:{
                    [Sequelize.Op.eq] : id
                },
                
            }
        })
    }
    catch(err){

        console.log(err)
    }
}
export {
    fetchAll,
    insert,
    updateCourse,
    deleteCourse,
}