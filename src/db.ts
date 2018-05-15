import {Sequelize} from 'sequelize';
// import {} from '';
// var Sequelize = require('sequelize')


const db = new Sequelize('learnManage','learnManage','learnManage',{
    dialect:'sqlite',
    host:'localhost',
    storage:'./learnManageDb.db'
})

const Course = db.define('course',{
    name:{
        type:Sequelize.STRING(40),
        allowNull:false,
        unique:true
    }
})

const Batch = db.define('batch',{
    name:{
        type:Sequelize.STRING(40),
        allowNull:false,
        unique:true
    },
    startDate:{
        type:Sequelize.DATE,
        allowNull:false
    }
})

const Teacher = db.define('teacher',{
    name:{
        type:Sequelize.STRING(40),
        allowNull:false,
        // unique:true
    }
})

const Student = db.define('student',{
    name:{
        type:Sequelize.STRING(40),
        allowNull:false,
        // unique:true
    }
})

const Leture = db.define('lecture',{
    name:{
        type:Sequelize.STRING(40),
        allowNull:false,
        // unique:true
    }
})

const Subject = db.define('subject',{
    name:{
        type:Sequelize.STRING(40),
        allowNull:false,
        unique:true
    }
})

Course.hasMany(Batch);
Course.hasMany(Subject);
Subject.hasMany(Teacher);
Batch.hasMany(Leture);
// Leture.belongsTo(Batch);
Leture.belongsTo(Subject);
Leture.belongsTo(Teacher);
Batch.belongsToMany(Student,{through:'BatchStudent'});
Student.belongsToMany(Batch,{through:'BatchStudent'});

async function learnManage() {
    try
    {
        await db.authenticate();
        console.log('connected to server ');
        await db.sync();
        console.log('tables Created');

        await Course.bulkCreate([
            {
                name:'Science'
            },
            // {
            //     name:'Music'
            // },
            // {
            //     name:'Computer Science'
            // }
        ])

        await Batch.bulkCreate([
            {
                name:'Summer 2018',
                courseId:1,
                startDate:'2018-06-01',
            },
            {
                name:'Spring 2018',
                courseId:1,
                startDate:'2018-03-01',
                
                
            },
            {
                name:'Fall 2018',
                
                courseId:1,
                startDate:'2018-09-01',
                
            },
            // {
            //     name:'Spring 2017',
            //     courseId:0
            // },
            // {
            //     name:'Winter 2017',
            //     courseId:1
            // },
            
            // {
            //     name:'Summer 2017',
            //     courseId:1
            // },
            // {
            //     name:'Winter 2017',
            //     courseId:2
            // }
        ])
        await Subject.bulkCreate([
            {
                name:'Physics',
                courseId:1
            },{
                name:'Chemistry',
                courseId:1
            },{
                name:'Biology',
                courseId:1
            },
            // {
            //     name:'Node',
            //     courseId:2
            // },
            // {
            //     name:'Angular',
            //     courseId:2
            // },
            // {
            //     name:'C#',
            //     courseId:2
            // },
            // {
            //     name:'Classical',
            //     courseId:1
            // },
            // {
            //     name:'Western',
            //     courseId:1
            // },
            // {
            //     name:'Pop',
            //     courseId:1
            // }

        ])
        await Teacher.bulkCreate([
            {
                name:'Tom',
                subjectId:1,
            },
            {
                name:'Dick',
                subjectId:3,
                
            },
            {
                name:'Harry',
                subjectId:2,
            },
            {
                name:'Jane',
                subjectId:2,
            },
            {
                name:'Marry',
                subjectId:2,
            },
            {
                name:'Trudy',
                subjectId:1,
            },
        ])
        await Leture.bulkCreate([
            {
                name:'L1',
                batchId:1,
                subjectId:1,
                teacherId:1,
            },
            {
                name:'L2',
                batchId:1,
                subjectId:2,
                teacherId:4,
            },
            {
                name:'L3',
                batchId:1,
                subjectId:1,
                teacherId:1,
            },
            {
                name:'L4',
                batchId:1,
                subjectId:2,
                teacherId:5,
            },
            {
                name:'L5',
                batchId:1,
                subjectId:3,
                teacherId:2,
            }
        ])
        // await Student.bulkCreate
    }
    catch(err ){
        console.log(err)
    }
}

export {
    Course,
    Batch,
    Teacher,
    Student,
    Leture,
    Subject,
    learnManage
}