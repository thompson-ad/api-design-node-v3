Look in the server.js file for the code setup

## Middleware

list of functions that execute in order before your controllers

things like `app.use(cors())` and `app.use(json())` ia middleware that has been istalled to transform the request coming in.

## Rest Routes with Express

express was designed with REST in mind

we can match on:

1. exact routes '/data'
2. a regex
3. glob '/user/\*'
4. parameters '/:id'

really only will need exact or id

Routes match in order - order matters

Express allows you to create sub routers

rest will always be these five different routes:

`['get /cat', 'get /cat/:id', 'post /cat', 'put /cat/:id', 'delete /cat/:id']`

looking at this, there are 4 verbs but only 2 different routes `/cat` and `/cat/:id`

express allows us to handle this by

```javaScript

router.route('/cat')
  .get()
  .post()

router.route('/cat/:id')
  .get()
  .put()
  .delete()

```
