"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PERSON_DETAILS = void 0;
exports.SQL_PERSON_DETAILS = {
    DETAILS: "SELECT id_person,first_name,second_name,first_last_name,second_last_name,phone,date_birth,address,occupation,type_document,document_number,place_expedition,gender,type_blood,status_civil,stratum,sisben,level_education,certificate,state_tuition,date_tuition,email,photo,photo64,photo_fingerprint,photo_fingerprint64, veh.type_vehicle, veh.license_plate, cour.type_course, cour.time_course, cour.price \
    FROM person ps\
    INNER JOIN course cour ON cour.id_course = ps.id_course\
    INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle\
    WHERE id_person = $1 ",
    DETAILSUPPDATE: "SELECT id_person,first_name,second_name,first_last_name,second_last_name,phone,date_birth,address,occupation,type_document,document_number,place_expedition,gender,type_blood,status_civil,stratum,sisben,level_education,certificate,state_tuition,date_tuition,email,photo,photo64,photo_fingerprint,photo_fingerprint64, veh.type_vehicle, veh.license_plate, cour.type_course, cour.time_course, cour.price \
  FROM person ps\
    INNER JOIN course cour ON cour.id_course = ps.id_course\
    INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle\
    WHERE id_person = $1 "
};
