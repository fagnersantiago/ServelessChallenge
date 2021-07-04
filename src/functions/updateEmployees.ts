import { document } from "src/utils/dynamoDdClient";
import 'src/functions/createEmployees';
export const handle = async (event) => {
  const { id } = event.pathParameters;
  const response = await document
    .update({
      TableName: "employees",
      Key:"id =:id",
      ExpressionAttributeValues: {
    
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
