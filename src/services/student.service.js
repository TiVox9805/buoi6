const Student = require("../models/student.model");

exports.create = (data) => Student.create(data);

exports.getAll = ({ page = 1, limit = 10, major }) => {
  const filter = major ? { major } : {};

  return Student.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
};

exports.getById = (id) => Student.findById(id);

exports.update = (id, data) =>
  Student.findByIdAndUpdate(id, data, { new: true });

exports.softDelete = (id) =>
  Student.findByIdAndUpdate(id, { isActive: false }, { new: true });

// nâng cao
exports.top = (limit) =>
  Student.find().sort({ score: -1 }).limit(limit);

exports.avg = async () => {
  const rs = await Student.aggregate([
    { $group: { _id: null, avg: { $avg: "$score" } } }
  ]);
  return rs[0]?.avg || 0;
};

exports.search = (q) =>
  Student.find({ name: { $regex: q, $options: "i" } });