import infoRouter from '../info/Routes';
import userRouter from '../user/Routes';
import baseRouter from '../base/Routes';
import advRouter from '../adv/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/base', baseRouter);
  app.use('/adv', advRouter);
  app.use('/user', userRouter);
}
