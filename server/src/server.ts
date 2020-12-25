import app from "./app";
import {PORT} from "./settings";

app.listen(PORT, () => console.log(`🚀 server is listening on http://localhost:${PORT}`));