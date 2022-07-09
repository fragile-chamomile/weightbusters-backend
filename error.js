const errorOrResponce = (status, body) => {
  return {
    Status: status,
    "Content-Type": "application/json",
    ResponseBody: body,
  };
};

module.exports = { errorOrResponce };