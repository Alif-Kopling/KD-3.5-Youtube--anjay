const { PrismaClient } = require('@prisma/client');
const { body, validationResult } = require('express-validator');

const prisma = new PrismaClient();

const index = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

const store = [
  body('name').notEmpty().withMessage('Name wajib diisi'),
  body('email').isEmail().withMessage('Email harus valid'),

  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { name, email } = req.body;
      const user = await prisma.user.create({ data: { name, email } });
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }
];

module.exports = { index, store };
