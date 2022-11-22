import { APIGatewayProxyEventV2 } from "aws-lambda";
import { prisma } from "./prisma";


export async function hello(event : APIGatewayProxyEventV2)  {

	return {

		statusCode: 200,
		body: JSON.stringify('h'),
	};
}
