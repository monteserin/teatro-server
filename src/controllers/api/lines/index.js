import express from 'express';
import * as LinesModel from "@Models/lines";
import { asyncHandler } from "@Middlwares/error-handler";
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get("/:playId", asyncHandler(async (req, res) => {
  const { params: { playId } } = req;
  const data = await LinesModel.getByPlayId(playId);
  res.send(data);
}));


router.post("/", asyncHandler(async (req, res) => {
  const { body: { txt, playId, order } } = req;
  await LinesModel.create(txt, playId);
  res.send('Line creada con éxito');
}));

router.delete("/:lineId", asyncHandler(async (req, res) => {
  const { params: { lineId } } = req;
  console.log('*******************');
  console.log(lineId);
  await LinesModel.remove(lineId);
  res.send('Play borrado con éxito');
}));


router.put("/", asyncHandler(async (req, res) => {
  const { body: { txt, order, lineId } } = req;
  try {
    const result = await LinesModel.update(txt, order, lineId);
    console.log(result);
  } catch (err) {
    console('error', err);
  }
  res.send('Line actualizada con éxito');
}));

///////////////////

export default router;
