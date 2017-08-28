import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: ['This is test data'] });
});

export default router;
