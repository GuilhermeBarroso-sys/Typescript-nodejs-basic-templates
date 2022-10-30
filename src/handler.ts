import { prisma } from "./prisma";


export async function hello(event)  {

	return {

		statusCode: 200,
		body: JSON.stringify('h'),
	};
}
