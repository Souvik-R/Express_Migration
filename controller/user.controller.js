const userModel = require('../models/users');

exports.userList = async (req, res) => {
    console.log("==============");
    try {
        const userList = await userModel.findAll({
            attributes: [
                "id",
                "name",
                "email"
            ],
            order: [["id", "DESC"]],
        });
        return res.status(200).send({
            data: {
                details: userList,
                success: true,
            },
            errorNode: {
                errorCode: 0,
                errorMsg: "No Error",
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            data: { success: false, message: "Something went wrong" },
            errorNode: { errorCode: 1, errorMsg: error },
        });
    }
}