const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

async function userDetails(request, response) {
    try {
        console.log('Request headers:', request.headers);
        console.log('Request cookies:', request.cookies);

        const token = request.cookies.token || "";
        console.log('Token:', token);

        if (!token) {
            return response.status(401).json({
                message: "Token is missing",
                error: true
            });
        }

        const user = await getUserDetailsFromToken(token);

        return response.status(200).json({
            message: "User details",
            data: user
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = userDetails;
