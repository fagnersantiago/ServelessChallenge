import { document } from "src/utils/dynamoDdClient";
import { CreateEmployeesDTO } from "src/functions/dto/createEmployeeDTO";

export const handle = async (event) => {
  const { id } = event.pathParameters;
  const { name, age, role } = JSON.parse(event.body) as CreateEmployeesDTO;

  await document
    .update({
      TableName: "employees",
      Key: {
        id: id,
      },

      ExpressionAttributeValues: {
        name,
        age,
        role,
      },
      ReturnValues: "UPDATE_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Employee updated",
    }),
  };
};
