"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_COURSE_UPDATE = void 0;
exports.SQL_COURSE_UPDATE = {
    UPDATE: 'UPDATE course SET  type_course=$2, time_course=$3, price=$4 \
    WHERE id_course=$1'
};
