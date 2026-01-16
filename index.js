import { server } from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const start = async () => {
	try {

		const requiredEnv = ['PORT'];

		for (const envdata of requiredEnv) {
			if (!process.env[envdata]) {
				throw new Error(`${envdata} must be defined.`);
			}
		}

		server.listen(process.env.PORT, () => {
			console.log('Agristack Supporting Registry Project is running on port: ', process.env.PORT);
		});

	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
start();