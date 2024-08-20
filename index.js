const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('.'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));