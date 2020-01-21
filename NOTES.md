## Routes and Controllers

controllers are just middleware but with the intent of sending back some data

in our case from our database with our models

controllers are the final point and you should treat the code within them as a return

```JavaScript

router.route('/').get((req, res) => {
return //your code
})

```

there are a few methods on the response object `.send()` , `.status()` and `.json()`

see how this project is set up, you can generalise the CRUD logic for all the controllers. i.e. the CRUD operations are the same for item, list and user

## Using models

mongoose CRUD operations are pretty easy to understand

```javaScript

Item.create() //CREATE
Item.find() //READ
Item.findOne() //READ
Item.findById() //READ
Item.update() //Update
Item.findByIdAndUpdate() //Update
Item.findOneAndUpdate() //Update - for update remember about the {new: true} param

//delete is same as update just replace with remove

```
