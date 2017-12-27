import Service from 'trails/service';
import boom from 'boom';

export default class AuthService extends Service {
    register({ username, password }) {
        const o = this.app.orm;
        return o.User.create({ username }).then((user) => {
            user.addPassword(password);
            return new Promise((resolve, reject) => {
                return user.save((err) => {
                    if (err) return reject(err);
                    return resolve(user);
                });
            });
        });
    }
    
    login({ username, password }) {
        const o = this.app.orm;
        return o.User.findOne({ username }).then((user) => {
            if (!user.validatePassword(password)) throw boom.unauthorized('User not logged in');
            return user;
        })
    }
}
