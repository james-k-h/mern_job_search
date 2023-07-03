import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  // check header
  console.log(req.cookies)

  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
};
export default auth;
