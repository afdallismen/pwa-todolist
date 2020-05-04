const mongooseErrorHook = {
  error: {
    all: [
      async (context) => {
        const { error } = context;
        const { statusCode, info } = error;
        
        if (statusCode && info && Object.values(info)[0]) {
          context.result = {
            error: {
              code: error.statusCode,
              message: Object.values(error.info)[0]
            }
          };
          context.statusCode = error.statusCode;
        }
        
        return context;
      }
    ]
  }
};

module.exports = mongooseErrorHook;

