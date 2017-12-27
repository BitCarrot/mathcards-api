import Controller from 'trails/controller';

export default class UserController extends Controller {
    
    create(req, res, next) {
        const s = this.app.services;
        const { username, password } = req.body;
        return s.UserService.create({ username, password }).then((user) => {
            return res.json(user);
        }).catch(next);
    }
    
    find(req, res, next) {
        const s = this.app.services;
        return s.UserService.find().then((users) => {
            return res.json(users);
        }).catch(next);
    }
}
