import { document } from "src/utils/dynamoDdClient";

export const handle = async (event) => {
  const { id } = event.pathParameters;

  await document
    .delete({
      TableName: "employees",
      Key: {
        id: id,
      },
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Employee was deleted",
    }),
  };
};
