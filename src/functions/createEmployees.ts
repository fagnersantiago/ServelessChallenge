import { document } from "../utils/DynamoDdClient";
import { CreateEmployeesDTO } from "src/functions/dto/createEmployeeDTO";

export const handle = async (event) => {
  const { id, name, age, role } = JSON.parse(event.body) as CreateEmployeesDTO;

  await document
    .put({
      TableName: "employees",
      Item: {
        id,
        name,
        age,
        role,
      },
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Employe created",
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
