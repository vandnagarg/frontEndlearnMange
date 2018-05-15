
import {Student, Batch} from './../db'
import {Sequelize} from 'sequelize'


async function fetchAllStudents(){
    try{
        let students = await Student.findAll();
        return students;
    }
    catch(err){
        console.log(err)
    }
}

async function fetchAll(id) {

    try{
        let students = await Batch.findOne({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            }
        })
        let studs =await students.getStudents();
        return studs;

    }
    catch(err){
        console.log(err)
    }
}

async function insert(name,arr){
    try{
        let stud = await Student.create({
            name:name
        })
        stud = await stud.setBatches(arr)
        // await stud.save();
        // console.log(stud)
        return stud;
    }
    catch(err){
        console.log(err);
    }
}
async function fetchStudent(id){
    try{
        let students = await Student.findOne({
            where:{
                id:{
                    [Sequelize.Op.eq]:id
                }
            },
            include:[{
                model:Batch
            }]
        });
        return students;
    }
    catch(err){
        console.log(err)
    }
}
async function insert1(id,bid){
    try{
        let stud = await Student.findOne({
            where:{
                id:{
                    [Sequelize.Op.eq]:id,
                }
            }
        })
        console.log(stud)
        stud = await stud.setBatches(bid);
        return stud;
    }
    catch(er){
        console.log(er)
    }
}
export {
    fetchAll,
    insert,fetchAllStudents,
    fetchStudent,insert1
}
