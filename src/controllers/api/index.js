import UsersController from './users';
import PlaysController from './plays';
import LinesController from './lines';


export default function (app) {

  app.use('/plays', PlaysController);
  app.use('/lines', LinesController);

  // Private
  app.use('/users', UsersController);

  app.use('/', (req, res) => res.send(`Working like a charmii ٩(^‿^)۶`));

}
