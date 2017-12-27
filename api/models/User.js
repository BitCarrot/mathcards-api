import Model from 'trails/model';
import bCrypt from 'bcrypt-nodejs';
import boom from 'boom';

export default class Cat extends Model {
  static config() {}

  static schema() {
    return {
      username: {
        type: 'string',
        required: true
      },
      passwordHash: {
        type: 'string'
      },
      
      addPassword: function(password) {
        const passwordHash = bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
        return this.passwordHash = passwordHash;
      },
      
      validatePassword: function(password) {
          if (!this.passwordHash) boom.badImplementation('Password not set');
          return bCrypt.compareSync(password, this.passwordHash);
      }
    };
  }
}
