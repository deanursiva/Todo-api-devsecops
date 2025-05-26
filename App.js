const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json());
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
