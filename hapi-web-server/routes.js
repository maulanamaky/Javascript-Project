const Routes = [
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (req, h) => {
            const { name = 'stranger' } = req.params;
            const { lang } = req.query;
        }
    }
]