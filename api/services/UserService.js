import Service from 'trails/service';

export default class UserService extends Service {
    create({ username, password }) {
        const o = this.app.orm;
        return o.User.create({ username, password });
    }
    
    find() {
        const o = this.app.orm;
        return o.User.find();
    }
}
