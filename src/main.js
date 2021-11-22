import config from './config/config';
import app from './routes/app';
import './database/database';


app.listen(app.get('port') || 3000);