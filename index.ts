import App from "./src/app";
import routes from "./src/routes";

import { PORT, MONGO_URI } from "./src/configs";

const app = new App();

app.connectDB(MONGO_URI as string);
app.setRoutes(routes);

app.listen(PORT);
