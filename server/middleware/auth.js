// authentcation middleware
import jwt from 'jsonwebtoken';

const auth = async (req,res,next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // getting token from headers
    const isCustomAuth = token.length < 500; // if true, the token is our own (aka not googles token)
    
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token,process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub; // google's id property
    }
    next(); // proceed to route;
  } catch(err) {
    console.log(err);
  }
}
export default auth;