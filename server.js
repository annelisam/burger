const express = require('express'),
  exphbs = require('express-handlebars'),
  bodyParser = require('body-parser'),
  routes = require('./controllers/burger_controller');

const PORT = process.env.PORT || 8080,
  app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));