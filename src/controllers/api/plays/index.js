import express from 'express';
import * as PlaysModel from "@Models/plays";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get("/getPlays", asyncHandler(async (req, res) => {
  const { query: { userId } } = req;
  const data = await PlaysModel.getPlays(userId);
  res.send(data);
}));



router.post("/create", asyncHandler(async (req, res) => {
  const { body: { name, userId } } = req;
  await PlaysModel.createPlay(name, userId)
  res.send('Play creado con éxito');
}));

///////////////////

router.get("/restricted-path", restrictedAccess, asyncHandler(async (req, res) => {
  res.send(`User id: ${req.userId}`);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
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
