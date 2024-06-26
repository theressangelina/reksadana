import express from 'express';
import cors from 'cors';
import userRouter from './user/router/userRouter.js';
import productRouter from './product/router/productRouter.js';
import sequelize from './database.js'; // Pastikan kamu memiliki file database.js untuk konfigurasi sequelize

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
