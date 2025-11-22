import page from 'page';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home.js'
import { LoginUI , LoginLogic} from './pages/Login.js'
import { RegisterUI , RegisterLogic } from './pages/Register.js'

const app = document.getElementById('app');

page('/',() => {
  app.innerHTML = Home();
})

page('/login',() => {
  app.innerHTML = LoginUI();
  LoginLogic();
})

page('/register',() => {
  app.innerHTML = RegisterUI();
  RegisterLogic();
})

page()
