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
function insert(id, name) {
    return __awaiter(this, void 0, void 0, function () {
        var subject, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db_1.Subject.create({
                            name: name,
                            courseId: id,
                        })];
                case 1:
                    subject = _a.sent();
                    return [4 /*yield*/, subject.save()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, subject];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.insert = insert;
function fetchAll() {
    return __awaiter(this, void 0, void 0, function () {
        var subjects, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.Subject.findAll()];
                case 1:
                    subjects = _a.sent();
                    return [2 /*return*/, subjects];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchAll = fetchAll;
function fetchSubjectById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var subjet, err_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db_1.Subject.findOne({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    subjet = _b.sent();
                    return [2 /*return*/, subjet];
                case 2:
                    err_3 = _b.sent();
                    console.log(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchSubjectById = fetchSubjectById;
function updateSubject(id, name) {
    return __awaiter(this, void 0, void 0, function () {
        var suject, err_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db_1.Subject.findOne({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    suject = _b.sent();
                    suject.name = name;
                    return [4 /*yield*/, suject.save()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _b.sent();
                    console.log(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateSubject = updateSubject;
function deleteSubject(id) {
    return __awaiter(this, void 0, void 0, function () {
        var err_5, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, db_1.Subject.destroy({
                            where: {
                                id: (_a = {},
                                    _a[sequelize_1.Sequelize.Op.eq] = id,
                                    _a)
                            }
                        })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, db_2.Teacher.destroy({
                            where: {
                                subjectId: (_b = {},
                                    _b[sequelize_1.Sequelize.Op.id] = id,
                                    _b)
                            }
                        })];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_5 = _c.sent();
                    console.log(err_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteSubject = deleteSubject;
