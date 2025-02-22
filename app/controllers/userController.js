let UserService = require("../services/usersService");

class UserController{
    static async obtenerUsuarios(req, res) {
        try {
            const users = await UserService.obtenerUser();
            res.json(users);
        } catch (e) {
            res.json({ error: "error en la peticion" });
            
    } 
    }
    static async login(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
       static async register(req, res) {
           try {
            let {nombre,correo,contrasena}=req.body
               let user = await UserService.crearUsarios(nombre, correo, contrasena);
               res.json(user);
        } catch (e) {
            res.json({ error: "error en la peticion" }); 
        }
    }
       static async eliminarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
         static async actualizarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
}
module.exports = UserController;