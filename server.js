const express = require('express');
const app = express();
const PORT =  process.env.PORT || 5000;
const dataRouter = require('./routes/dataRouter');
const uploadRouter = require('./routes/uploadRouter');
const boardRouter = require('./routes/boardRouter');


app.use('/', uploadRouter);
app.use('/data', dataRouter);
app.use('/board', boardRouter);

app.listen(PORT, () => {
    console.log(`Stating server PORT = localhost:${PORT}`);
});

