export const handle = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "hello world",
    }),
    header: {
      "Content-Type": "application/json",
    },
  };
};
