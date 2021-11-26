const testimonialModel = require("../models/firstapiModels");

exports.addfirstapiController = async (req, res) => {
  const { photo, name, post, testimonialdescription, active } = req.body;
  try {
    const newone = testimonialModel();
    newone.photo = photo;
    newone.name = name;
    newone.post = post;
    newone.testimonialdescription = testimonialdescription;
    newone.active = active;

    await newone.save();

    res.status(200).json({
      successMessage: "Added success.",
    });
  } catch (err) {
    console.log("addfirstapiController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.getfirstapiController = async (req, res) => {
  try {
    const firstapiAlldata = await testimonialModel.find({});
    res.json({ firstapiAlldata });
  } catch (err) {
    console.log(err, "getfirstapiController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.getfirstapiControllerById = async (req, res) => {
  try {
    const { _id } = req.params;

    const firstapiByIddata = await testimonialModel.findById(_id);
    if (!firstapiByIddata) {
      return res.status(404).json({ errorMessage: "No data found" });
    }
    res.json({ firstapiByIddata });
  } catch (err) {
    console.log(err, "getfirstapiControllerById error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.editfirstapiController = async (req, res) => {
  const { _id } = req.params;
  const { photo, name, post, testimonialdescription, active } = req.body;
  try {
    const firstapiData = await testimonialModel.findByIdAndUpdate(_id);
    if (firstapiData) {
      firstapiData.photo = photo;
      firstapiData.name = name;
      firstapiData.post = post;
      firstapiData.testimonialdescription = testimonialdescription;
      firstapiData.active = active;

      await firstapiData.save();
    }
    res.status(200).json({
      successMessage: "Edited successfully",
    });
  } catch (err) {
    console.log(err, "editfirstapiController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};

exports.deletefirstapiController = async (req, res) => {
  const { _id } = req.params;
  try {
    await testimonialModel.findByIdAndDelete(_id);
    res.status(200).json({
      successMessage: "Deleted successfully",
    });
  } catch (err) {
    console.log(err, "deletefirstapiController error", err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }
};
