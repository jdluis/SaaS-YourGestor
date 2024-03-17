import express from 'express';
import mongoose from 'mongoose';

const Usuario = mongoose.model('User', new mongoose.Schema({
    name: String,
    mail: String,
}));

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://jdluisdev:password@monguito:27017/nodeapi?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', async (req, res) => {
    console.log('loading...');
    try {
        const users = await Usuario.find();
        console.log('users found:', users);
        return res.send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).send('Internal Server Error');
    }
});


app.get('/add', async (req, res) => {
    console.log('adding...');
    try {
        await Usuario.create({ name: "Jose Daniel", mail: "jdlusidev@gmail.com" });
        return res.send('ok');
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
