const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.use(express.static('dist/my-website'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'my-website', 'index.html')));

app.listen(PORT, () => console.log(`Server run on port ${PORT}`));