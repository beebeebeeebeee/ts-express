import { Server } from "./app/server";

async function main(){

    const server = new Server(3000);
    server.start()
    
}

main();