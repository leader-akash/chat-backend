const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")

async function userDetails(request,response){
    try {
        const token = request?.headers?.cookie || ""
        console.log('tokennnnnnnn', request)
        const user = await getUserDetailsFromToken(token)

        return response.status(200).json({
            message : "user details",
            data : user
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = userDetails