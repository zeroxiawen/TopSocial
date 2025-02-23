const express = require('express');
const cors = require('cors');
const { handleErrors } = require('./middleware/errorMiddleWare');
const router = require('./routes/index');
const app = express();
const PORT = 80;

// 增加json 和url编码请求体大小限制
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use(cors());
app.use(express.json());

app.use('/api', router);

// use error middleware at the end
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/`);
});
