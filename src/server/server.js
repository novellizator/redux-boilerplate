import express from 'express';
const app = express();

/* uncomment if you need templating
import swig from 'swig';

app.set('views', 'dist/views');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
*/

//put your DATABASE_URI etc. into config files
import config from './config';

app.use('/', express.static('dist/client'));
app.get('/hello', (req, res) => res.json({
  hello: config.HELLO_MESSAGE
}));

app.use((req, res) => {
  res.sendFile('dist/client/index.html');
});

app.listen(process.env.PORT || 3000);