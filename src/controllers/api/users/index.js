import express from 'express';
import * as UsersModel from "@Models/users";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.post("/googleIdExists", asyncHandler(async (req, res) => {
  const { body: { googleId } } = req;
  const user = await UsersModel.getIfUserExistsByGoogleId(googleId);
  res.send({ res: user ? true : false });
}));

router.post("/registerNewUserByGoogleId", asyncHandler(async (req, res) => {
  const { body: { googleId } } = req;
  const user = await UsersModel.registerNewUserByGoogleId(googleId);
  res.send({ res: user });
}));

export default router;
