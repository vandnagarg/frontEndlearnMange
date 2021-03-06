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
var db_1 = require("./../db");
var db_2 = require("./../db");
var sequelize_1 = require("sequelize");
function fetchAllTeachers() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_2.Teacher.findAll()];
                case 1:
                    teachers = _a.sent();
                    return [2 /*return*/, teachers];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAllTeachers = fetchAllTeachers;
function fetchTeacherById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, err_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_2.Teacher.findAll({
                            where: {
                                subjectId: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    teachers = _b.sent();
                    return [2 /*return*/, teachers];
                case 2:
                    err_2 = _b.sent();
                    console.log(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchTeacherById = fetchTeacherById;
function fetchById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, err_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_2.Teacher.findAll({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    teachers = _b.sent();
                    return [2 /*return*/, teachers];
                case 2:
                    err_3 = _b.sent();
                    console.log(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchById = fetchById;
function fetchAll(id) {
    return __awaiter(this, void 0, void 0, function () {
        var lectures, teachers_1, err_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.Leture.findAll({
                            where: {
                                batchId: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a),
                            },
                            include: [{
                                    model: db_2.Teacher,
                                    as: 'teacher'
                                }]
                            // attributes:['id','teacherId']
                        })];
                case 1:
                    lectures = _b.sent();
                    teachers_1 = [];
                    lectures.forEach(function (lecture) {
                        teachers_1.push(lecture.teacher);
                    });
                    return [2 /*return*/, teachers_1];
                case 2:
                    err_4 = _b.sent();
                    console.log(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAll = fetchAll;
function findTeachers(teachers) {
    return __awaiter(this, void 0, void 0, function () {
        var teacherTotal, totalTeachers;
        return __generator(this, function (_a) {
            teacherTotal = [];
            teachers.forEach(function (teach) {
                if (teacherTotal.indexOf(teach.teacherId) == -1) {
                    teacherTotal.push(teach.teacherId);
                }
            });
            totalTeachers = [];
            teacherTotal.forEach(function (id) {
                db_2.Teacher.findOne({
                    where: {
                        id: (_a = {},
                            _a[sequelize_1.Sequelize.Op.eq] = id,
                            _a)
                    },
                    include: [{
                            model: db_2.Teacher
                        }
                    ]
                });
                var _a;
            });
            console.log(totalTeachers);
            return [2 /*return*/, totalTeachers];
        });
    });
}
exports.findTeachers = findTeachers;
function insertBySubject(id, name) {
    return __awaiter(this, void 0, void 0, function () {
        var teacer, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db_2.Teacher.create({
                            name: name,
                            subjectId: id
                        })];
                case 1:
                    teacer = _a.sent();
                    return [4 /*yield*/, teacer.save()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, teacer];
                case 3:
                    err_5 = _a.sent();
                    console.log(err_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.insertBySubject = insertBySubject;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var err_6, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_2.Teacher.destroy({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.id] = id,
                                    _a)
                            }
                        })];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_6 = _b.sent();
                    console.log(err_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteById = deleteById;
