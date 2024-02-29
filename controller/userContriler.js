const User = require("../modale/emailModele");

exports.sendEmail = async (req, res) => {
    try {
        const { email, message } = req.body;
        const response = await User.create({email, message});

        res.status(200).json({
            success:true, 
            data:response,
            message:'Entry created succesfully',
            
        })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:error.message,
            }
        )

    }
}