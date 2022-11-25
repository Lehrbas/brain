import { Router } from 'express';
import { spentController } from '../../components/spent';

const router = Router();

router.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'hello'
  });
});

router.get('/spent', (req, res) => {
  return spentController.findById(req, res);
});

router.post('/spent', (req, res) => {
  return spentController.createSpent(req, res);
});

export { router };