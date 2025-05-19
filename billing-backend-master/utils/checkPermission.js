import userModel from '../models/user.js';

const checkPermission = async (userid, role) => {
    const checkIfIsHasPermission = await userModel.findById(userid);
    if (role.includes(checkIfIsHasPermission.role)){
        return true;
    }else{
        return false;
    }
}

export default checkPermission;