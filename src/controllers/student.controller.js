const service = require("../services/student.service");

exports.create = async (req, res, next) => {
  try {
    res.json(await service.create(req.body));
  } catch (e) { next(e); }
};

exports.getAll = async (req, res, next) => {
  try {
    res.json(await service.getAll(req.query));
  } catch (e) { next(e); }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.getById(req.params.id);
    if (!data) return res.status(404).json({ msg: "Not found" });
    res.json(data);
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    res.json(await service.update(req.params.id, req.body));
  } catch (e) { next(e); }
};

exports.updateScore = async (req, res, next) => {
  try {
    const { score } = req.body;

    if (score < 0 || score > 100)
      return res.status(400).json({ msg: "Invalid score" });

    const data = await service.update(req.params.id, { score });

    if (!data)
      return res.status(404).json({ msg: "Not found" });

    res.json(data);
  } catch (e) { next(e); }
};

exports.delete = async (req, res, next) => {
  try {
    res.json(await service.softDelete(req.params.id));
  } catch (e) { next(e); }
};

// nâng cao
exports.top = async (req, res, next) => {
  try {
    res.json(await service.top(req.query.limit || 5));
  } catch (e) { next(e); }
};

exports.avg = async (req, res, next) => {
  try {
    res.json({ avg: await service.avg() });
  } catch (e) { next(e); }
};

exports.search = async (req, res, next) => {
  try {
    res.json(await service.search(req.query.q));
  } catch (e) { next(e); }
};