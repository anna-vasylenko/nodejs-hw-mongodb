import { Router } from 'express';

import * as authControllers from '../controllers/auth.js';

import { validateBody } from '../middlewares/validateBody.js';

import {
  resetPasswordSchema,
  sendResetEmailSchema,
  userLoginSchema,
  userRegisterSchema,
} from '../validation/auth.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegisterSchema),
  ctrlWrapper(authControllers.registerController),
);

authRouter.post(
  '/login',
  validateBody(userLoginSchema),
  ctrlWrapper(authControllers.loginController),
);

authRouter.post(
  '/refresh',
  ctrlWrapper(authControllers.refreshSessionController),
);

authRouter.post('/logout', ctrlWrapper(authControllers.logoutController));

authRouter.post(
  '/send-reset-email',
  validateBody(sendResetEmailSchema),
  ctrlWrapper(authControllers.sendResetEmailController),
);

authRouter.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  ctrlWrapper(authControllers.resetPasswordController),
);

export default authRouter;
