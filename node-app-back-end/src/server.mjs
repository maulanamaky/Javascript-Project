import Hapi from '@hapi/hapi';
import { routes } from './routes.mjs';

const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`server running at ${server.info.uri}`);
};

init();