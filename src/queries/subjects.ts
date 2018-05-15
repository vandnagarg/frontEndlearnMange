import {Subject} from './../db'
import {Teacher} from './../db'
import {Sequelize} from 'sequelize'

async function insert(id,name){
    try{
        let subject = await Subject.create({
            name:name,
            courseId:id,
        })
        await subject.save();
        return subject;
    }
    catch(err){
        console.log(err)
    }
}
async function fetchAll() {
    try{
        let subjects= await Subject.findAll();
        return subjects;
    }
    catch(err){
        console.log(err)
    }
}
async function fetchSubjectById(id){
    try{
        let subjet = await Subject.findOne({
            where:{
                id:{
                    [Sequelize.Op.eq] : id
                }
            }
        })
        return subjet;
    }
    catch(err)
    {
        console.log(err)
    }
}

async function updateSubject(id,name){
    try{
        let suject  = await Subject.findOne({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            }
        })
        suject.name = name;
        await suject.save();
    }
    catch(err)
    {
        console.log(err)
    }
}
async function deleteSubject(id){
    try{
        await Subject.destroy({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            }
        })
        await Teacher.destroy({
            where:{
                subjectId:{
                    [Sequelize.Op.id]:id
                }
            }
        })
    }
    catch(err){
        console.log(err)
    }
}
export{
    fetchAll,fetchSubjectById,updateSubject,deleteSubject,insert
}