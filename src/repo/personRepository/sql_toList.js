"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PERSON_VIEW = void 0;
exports.SQL_PERSON_VIEW = {
    VIEW: "SELECT id_person,first_name,second_name,first_last_name,second_last_name,email,date_birth,gender,type_blood,document_number,place_expedition,address,cour.id_course, veh.type_vehicle\
    FROM person ps \
    INNER JOIN course cour ON cour.id_course = ps.id_course \
    INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle \
    ORDER BY id_person"
};
