import App from './app';
// Routes
import ExampleRoute from './routes/example.route';

const app = new App([new ExampleRoute()]);

app.listen();
