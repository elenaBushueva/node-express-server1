import Adv from './Model';

export default function create(req, res) {
  const newAdv = new Adv({
    title: req.body.title,
    password: req.body.password,
  });

  newAdv
    .save()
    .then(() => {
      res.status(200).json('Adv created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Adv not created');
    });
}
