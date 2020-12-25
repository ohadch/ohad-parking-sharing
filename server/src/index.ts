import "./app";
import {server} from "./config";
import {PORT} from "./settings";

server.listen(PORT, () => console.log(`🚀 server is listening on http://localhost:${PORT}`));