import { APIGatewayEventRequestContextV2, APIGatewayProxyEventV2, APIGatewayProxyEventV2WithRequestContext } from "aws-lambda";
import { prisma } from "./prisma";
import middy from '@middy/core';
import { AuthenticationMiddlewareExample } from "./middlewares/AuthenticationMiddlewareExample";
import { IMiddlewareAttributes } from "./middlewares/IMiddlewareInterface";

async function handler(event : APIGatewayProxyEventV2 & IMiddlewareAttributes)  {
	
	return {

		statusCode: 200,
		body: JSON.stringify(event.userIdExample),
	};	
}

export const hello = middy(handler)
	.use(new AuthenticationMiddlewareExample());