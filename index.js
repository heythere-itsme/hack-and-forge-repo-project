const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());


app.listen(8000, () => console.log('!!! Started Successfully !!!'));

app.use(express.json());

app.post('/registerSend', async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);
        res.status(200).send({
            message: `your ${name} and ${email}, is Uploaded to DB`});
        
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})
app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(400).send({ message: 'Invalid email or password' });
        }

        const user = result.rows[0];
        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid email or password' });
        }

        res.status(200).send({ message: 'Login successful', user: { name: user.name, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
})