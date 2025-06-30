const jwt = require("jsonwebtoken");

// User defined string data that will be used to create our JSON web tokens
// Used in the algorith for encrypting our data which makes it difficult to decode the information without the defined secret keyword

const secret = "api_ihomis"

// JSON WEB TOKEN 


module.exports.createAccessToken = (user) => {
	
	// When the user logs in, a token will be created with the user's information
	const data = {
		id : user._id,
		email: user.email,
		isAdmin : user.isAdmin
	}

	// Generate a JSON web token using the jwt's sign method
	
	return jwt.sign(data, secret, {});
}

// Token verification
module.exports.verify = (req, res, next) => {

	// The token is retrieved from the request header
	// This can be provided in postman under
		// Authorization > Bearer token
	let token = req.headers.authorization;

	// Token recieved and is not undefined
	if (typeof token !== "undefined") {

		console.log(token);

		// The "slice" method takes only the token from the information sent via the request header
		// The token sent is a type of "Bearer" token which when received contains the word "Bearer" as a prefix
		// This removes the "Bearer " prefix and only obtains the token

		token = token.slice(7, token.length)

		// Validate the token using the "verify" method decrypting the token using the secret code

		return jwt.verify(token, secret, (err, data) => {

			if(err) {
				return res.send({auth : "failed"})

			} else {
				// Allows the application to proceed with the next middleware function/callback in the route
				// The verify method will be used as a middlware in the route to verify the token before proceeding to the function

				next();
			}
		})
	// Token does not exist
	} else {
		return res.send({ auth : "failed" })
	};
};

// Token decryption
module.exports.decode = (token) => {

	// Token recieved and is not undefined
	if(typeof token !== "undefined") {

		// Retreives only the token and removes the "Bearer" prefix
		token = token.slice(7, token.length);

		return jwt.verify(token, secret, (err, data) => {

			if(err){
				return null;

			} else {
				// The "decode" method is used to obtain the information from the JWT
				// The "{complet:true}" option allows us to return additional information from the JWT
				// Returns an object with access to the "payload" property which contains user information stored when the token was generated
				// The payload contains information provided in the "createAccessToken" method defined above

				return jwt.decode(token, {complete:true}.payload)
			}
		})
	} else {
		// Token does not exist
		return null;
	};
};