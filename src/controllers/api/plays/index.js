import express from 'express';
import * as PlaysModel from "@Models/plays";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get("/restricted-path", restrictedAccess, asyncHandler(async (req, res) => {
  res.send(`User id: ${req.userId}`);
}));

router.post("/create", asyncHandler(async (req, res) => {
  const mail = req.body.mail;
  const pass = req.body.pass;
  await PlaysModel.createPlay(mail, pass)
  res.send('Play creado con éxito');
}));

router.delete("/:id", restrictedAccess, asyncHandler(async (req, res) => {
  const { params: { id } } = req;
  await PlaysModel.deletePlay(id);
  res.send(`Play id: ${id} deleted`);
}));

router.patch("/:id", restrictedAccess, async (req, res) => {
  const { params: { id }, body } = req;
  await PlaysModel.updatePlay(id, body);
  res.send(`Play id: ${id} updated`);
});


export default router;
