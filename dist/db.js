"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
// import {} from '';
// var Sequelize = require('sequelize')
var db = new sequelize_1.Sequelize('learnManage', 'learnManage', 'learnManage', {
    dialect: 'sqlite',
    host: 'localhost',
    storage: './learnManageDb.db'
});
var Course = db.define('course', {
    name: {
        type: sequelize_1.Sequelize.STRING(40),
        allowNull: false,
        unique: true
    }
});
exports.Course = Course;
var Batch = db.define('batch', {
    name: {
        type: sequelize_1.Sequelize.STRING(40),
        allowNull: false,
        unique: true
    },
    startDate: {
        type: sequelize_1.Sequelize.DATE,
        allowNull: false
    }
});
exports.Batch = Batch;
var Teacher = db.define('teacher', {
    name: {
        type: sequelize_1.Sequelize.STRING(40),
        allowNull: false,
    }
});
exports.Teacher = Teacher;
var Student = db.define('student', {
    name: {
        type: sequelize_1.Sequelize.STRING(40),
        allowNull: false,
    }
});
exports.Student = Student;
var Leture = db.define('lecture', {
    name: {
        type: sequelize_1.Sequelize.STRING(40),
        allowNull: false,
    }
});
exports.Leture = Leture;
var Subject = db.define('subject', {
    name: {
        type: sequelize_1.Sequelize.STRING(40),
        allowNull: false,
        unique: true
    }
});
exports.Subject = Subject;
Course.hasMany(Batch);
Course.hasMany(Subject);
Subject.hasMany(Teacher);
Batch.hasMany(Leture);
// Leture.belongsTo(Batch);
Leture.belongsTo(Subject);
Leture.belongsTo(Teacher);
Batch.belongsToMany(Student, { through: 'BatchStudent' });
Student.belongsToMany(Batch, { through: 'BatchStudent' });
function learnManage() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    return [4 /*yield*/, db.authenticate()];
                case 1:
                    _a.sent();
                    console.log('connected to server ');
                    return [4 /*yield*/, db.sync()];
                case 2:
                    _a.sent();
                    console.log('tables Created');
                    return [4 /*yield*/, Course.bulkCreate([
                            {
                                name: 'Science'
                            },
                        ])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, Batch.bulkCreate([
                            {
                                name: 'Summer 2018',
                                courseId: 1,
                                startDate: '2018-06-01',
                            },
                            {
                                name: 'Spring 2018',
                                courseId: 1,
                                startDate: '2018-03-01',
                            },
                            {
                                name: 'Fall 2018',
                                courseId: 1,
                                startDate: '2018-09-01',
                            },
                        ])];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, Subject.bulkCreate([
                            {
                                name: 'Physics',
                                courseId: 1
                            }, {
                                name: 'Chemistry',
                                courseId: 1
                            }, {
                                name: 'Biology',
                                courseId: 1
                            },
                        ])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, Teacher.bulkCreate([
                            {
                                name: 'Tom',
                                subjectId: 1,
                            },
                            {
                                name: 'Dick',
                                subjectId: 3,
                            },
                            {
                                name: 'Harry',
                                subjectId: 2,
                            },
                            {
                                name: 'Jane',
                                subjectId: 2,
                            },
                            {
                                name: 'Marry',
                                subjectId: 2,
                            },
                            {
                                name: 'Trudy',
                                subjectId: 1,
                            },
                        ])];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, Leture.bulkCreate([
                            {
                                name: 'L1',
                                batchId: 1,
                                subjectId: 1,
                                teacherId: 1,
                            },
                            {
                                name: 'L2',
                                batchId: 1,
                                subjectId: 2,
                                teacherId: 4,
                            },
                            {
                                name: 'L3',
                                batchId: 1,
                                subjectId: 1,
                                teacherId: 1,
                            },
                            {
                                name: 'L4',
                                batchId: 1,
                                subjectId: 2,
                                teacherId: 5,
                            },
                            {
                                name: 'L5',
                                batchId: 1,
                                subjectId: 3,
                                teacherId: 2,
                            }
                        ])
                        // await Student.bulkCreate
                    ];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.learnManage = learnManage;
