"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
exports.CreateEstudiantePage = void 0;
var core_1 = require("@angular/core");
var CreateEstudiantePage = /** @class */ (function () {
    function CreateEstudiantePage(route, service, navController, camera, cursosService) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.navController = navController;
        this.camera = camera;
        this.cursosService = cursosService;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        var id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.id = parseInt(id);
            this.service.getAlumnosId(this.id).then(function (data) {
                console.log(data);
                _this.nombre = data['nombre'];
                _this.codigo = data['codigo'];
                _this.fecha_nacimiento = data['fecha_nacimiento'];
                _this.curso = data['curso'];
                _this.estatura = data['estatura'];
            })["catch"](function (err) {
                console.error(err);
            });
        }
    }
    CreateEstudiantePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cursos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cursosService.getCursos()];
                    case 1:
                        cursos = _a.sent();
                        if (cursos['results'])
                            this.cursos = cursos['results'];
                        console.log(this.cursos);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateEstudiantePage.prototype.tomarFoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            console.log(imageData);
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            console.error(err);
        });
    };
    CreateEstudiantePage.prototype.saveEstudiante = function (formData) {
        var _this = this;
        if (formData.valid) {
            if (this.id) {
                //nombre
                //codigo
                //fecha_nacimiento
                //curso
                //estatura
                var body = {};
                if (formData.value['nombre'])
                    body['nombre'] = formData.value['nombre'];
                if (formData.value['codigo'])
                    body['codigo'] = formData.value['codigo'];
                if (formData.value['fecha_nacimiento'])
                    body['fecha_nacimiento'] = formData.value['fecha_nacimiento'];
                if (formData.value['curso'])
                    body['curso'] = formData.value['curso'];
                if (formData.value['estatura'])
                    body['estatura'] = formData.value['estatura'];
                console.log(body);
                console.log(formData.value);
                this.service.editAlumnosId(this.id, body).then(function (data) {
                    _this.navController.navigateBack('/estudiantes');
                })["catch"](function (err) {
                    console.error(err);
                });
            }
            else {
                if (this.base64Image)
                    formData.value['imagen'] = this.base64Image;
                this.service.createAlumnos(formData.value).then(function (data) {
                    _this.navController.navigateBack('/estudiantes');
                })["catch"](function (err) {
                    console.error(err);
                });
            }
            console.log("Valido");
        }
        else {
            console.log("No valido");
        }
        console.log(formData);
    };
    CreateEstudiantePage = __decorate([
        core_1.Component({
            selector: 'app-create-estudiante',
            templateUrl: './create-estudiante.page.html',
            styleUrls: ['./create-estudiante.page.scss']
        })
    ], CreateEstudiantePage);
    return CreateEstudiantePage;
}());
exports.CreateEstudiantePage = CreateEstudiantePage;
