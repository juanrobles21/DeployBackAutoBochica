"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_COURSE_CREATE = void 0;
exports.SQL_COURSE_CREATE = {
    CREATE: 'insert into course(type_course,time_course,price) values($1, $2, $3) RETURNING id_course'
};
