import { document } from "src/utils/dynamoDdClient";

export const handle = async (event) => {
  const { id } = event.pathParameters;

  const response = await document
    .query({
      TableName: "employees",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": id,
      },
    })
    .promise();

  const employeExist = response.Items[0];

  if (employeExist) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        name: employeExist.name,
      }),
    };
  }
  return {
    statusCode: 400,
    body: {
      message: "employee does not exists",
    },
  };
};
