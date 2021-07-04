import { document } from "../utils/DynamoDdClient";

interface ICreateEmployees {
  id: string;
  name: string;
  age: number;
  role: string;
}
export const handle = async (event) => {
  const { id, name, age, role } = JSON.parse(event.body) as ICreateEmployees;

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
      message: "Employee created",
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
