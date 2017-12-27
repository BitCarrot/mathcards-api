import Controller from 'trails/controller';

export default class AuthController extends Controller {
    
    register(req, res, next) {
        const s = this.app.services;
        const { username, password } = req.body;
        return s.AuthService.register({ username, password }).then((user) => {
            return res.json(user);
        }).catch(next);
    }
    
    login(req, res, next) {
        const s = this.app.services;
        const { username, password } = req.body;
        return s.AuthService.login({ username, password }).then((user) => {
            return res.json(user);
        }).catch(next);
    }
}
