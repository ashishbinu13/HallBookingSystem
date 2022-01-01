const JWT = require("jsonwebtoken");
const createHttpError = require("http-errors");

module.exports = {
  signAccessToken: (userId, role) => {
    return new Promise((resolve, reject) => {
      const payload = {
        role: role,
      };
      const secret = process.env.ACCESS_TOKEN_SECRET="faa33f74f301329f163e35ecb83ef4485f97a61aa4071f18df1b78495e7aeb90";
      const options = {
        expiresIn: "1h",
        issuer: "ICTAK",
        audience: userId,
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          return reject(createHttpError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"])
      return next(createHttpError.Unauthorized());
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    if (token === "null") return next(createHttpError.Unauthorized());

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET="faa33f74f301329f163e35ecb83ef4485f97a61aa4071f18df1b78495e7aeb90", (err, payload) => {
      if (err) {
        // if (err.name === "JasonWebTokenError")
        //   return next(createHttpError.Unauthorized());
        // else return next(createHttpError.Unauthorized(err.message));

        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;

        return next(createHttpError.Unauthorized(message));
      }

      req.payload = payload;
      next();
    });
  },
  signRefreshToken: (userId, role) => {
    return new Promise((resolve, reject) => {
      const payload = {
        role: role,
      };
      const secret = process.env.REFRESH_TOKEN_SECRET="0f56bce06975863613e44ca4b402e9da963d2b124511b6e5cc3ab3e0a37ce0b5";
      const options = {
        expiresIn: "1y",
        issuer: "ICTAK",
        audience: userId,
      };
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message);
          return reject(createHttpError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
  verifyRefreshToken: (refreshToken) => {
    return new Promise((resolve, reject) => {
      JWT.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET="0f56bce06975863613e44ca4b402e9da963d2b124511b6e5cc3ab3e0a37ce0b5",
        (err, payload) => {
          if (err) throw createHttpError.Unauthorized();

          const userId = payload.aud;
          resolve(userId);
        }
      );
    });
  },
};
