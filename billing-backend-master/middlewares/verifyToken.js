//creata a middleware to verify the token if it is not valid then return 403 error

import jwt from 'jsonwebtoken';
import userModel from '../models/user.js';

const verifyToken = async (req, res, next) => {
    const token = req.header('auth_token');
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        const checkIfUserExist = await userModel.findById(verified.id);
        if(!checkIfUserExist) return res.status(401).send('Invalid Token');
        req.userid = verified.id;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).send('Invalid Token');
    }
}

export default verifyToken;