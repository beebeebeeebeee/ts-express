import express from "express"

export class Server {

    // define the private var
    private port: number;
    private app: express.Express;

    /**
     * constructor
     * @param port The port of server host
     */
    constructor(port: number) {
        this.port = port;
        this.app = express();

        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });


    }

    /**
     * method for starting the express server
     */
    public start() {
        this.app.listen(this.port, () => {
            return console.info(`Express is listening at http://localhost:${this.port}`);
        });
    }

}