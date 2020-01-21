export const getOne = model => async (req, res) => {
  // the model might be an item, user or list
  // req.params - an object of all the parameters on the url
  // model.findById

  const id = req.params.id // this id is the one that comes in on the params
  const userId = req.user._id // this is is the one that is stored with that user
  const doc = await model.findOne({ _id: id, createdBy: userId }).exec() // cant do findById as we have 2 paramters we need to search for. When you create a document in mongo it always gives it an _id. This is the same thing that is passed through the parameter. you can tell what user created the model as there is a createdBy field
  if (!doc) {
    return res.status(404).end()
  }

  res.status(200).json({ data: doc }) // you can use .send() here but the test is looking for .json
}

export const getMany = model => async (req, res) => {
  const docs = await model.find({ createdBy: req.user._id }).exec()
  res.status(200).json({ docs: docs })
}

export const createOne = model => async (req, res) => {
  const doc = await model.create({ ...req.body, createdBy: req.user._id }) // this will create one with the body and overrise the createdby field to be whatever the authenticated user is
  res.status(201).json({ data: doc })
}

export const updateOne = model => async (req, res) => {
  const doc = await model
    .findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id
      },
      req.body,
      { new: true }
    )
    .exec()

  if (!doc) {
    return res.status(400).end()
  }

  res.status(200).json({ data: doc })
}

export const removeOne = model => async (req, res) => {
  const doc = await model
    .findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id
    })
    .exec()

  if (!doc) {
    return res.status(400).end()
  }

  res.status(200).json({ data: doc })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
