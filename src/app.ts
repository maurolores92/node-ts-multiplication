import { yarg } from "./config/plugins/args.plugin";
import { ServerAApp } from "./presentation/server-app";


(async() => {
    await main();

})();

async function main() {
    
    const {b:base, l:limit, s:showTable, n:fileName, d:fileDestination} = yarg;

    ServerAApp.run({base, limit, showTable, fileName, fileDestination});
}
