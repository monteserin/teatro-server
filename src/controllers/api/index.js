import UsersController from './users';
import AuthController from './auth';
import PlaysController from './plays';


export default function (app) {
  // Public
  app.use('/auth', AuthController);

  app.use('/plays', PlaysController);

  // Private
  app.use('/users', UsersController);

  app.use('/', (req, res) => res.send(`Working like a charm ٩(^‿^)۶`));

}
