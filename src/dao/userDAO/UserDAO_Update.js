"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../config/connection/connectionDB"));
class UserDAO_Update {
    static actualizarUser(sqlActualizarYa, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                yield connectionDB_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                    return yield consulta.result(sqlActualizarYa, parametros);
                }))
                    .then((respuesta) => {
                    console.log(respuesta);
                    res.status(200).json({ respuesta: 'Usuario Actualizado' });
                })
                    .catch((mierror) => {
                    console.log(mierror);
                    res.status(400).json({ respuesta: 'Error Actualizado Usuario' });
                });
            }
        });
    }
}
exports.default = UserDAO_Update;
