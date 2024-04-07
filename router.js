import { homepage, saveStudent, updateStudent, removeUser, removeAllUser, findByUsername, findAll } from './controller.js';

const router = (app) => {
app.get('/', homepage);
app.post('/save-student', saveStudent);
app.post('/update', updateStudent);
app.post('/remove-user', removeUser);
app.post('/remove-all-user', removeAllUser);
app.get('/user', findByUsername);
app.get('/members', findAll);
}

export default router;