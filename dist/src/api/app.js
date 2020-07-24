"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Sentry = __importStar(require("@sentry/node"));
var Apm = __importStar(require("@sentry/apm"));
var integrations_1 = require("@sentry/integrations");
require("../db/mongoose");
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
exports.default = app;
global.__rootdir__ = __dirname || process.cwd();
Sentry.init({
    dsn: "https://e6b40222e0bd4913ad18acd8a167c120@o424596.ingest.sentry.io/5356579",
    integrations: [
        new integrations_1.RewriteFrames({
            root: global.__rootdir__,
        }),
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Apm.Integrations.Express({ app: app }),
    ],
    tracesSampleRate: 1.0,
});
var transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
});
Sentry.configureScope(function (scope) {
    scope.setSpan(transaction);
});
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
app.use(express_1.default.json());
app.use("/api", index_1.default);
app.use("*", function (req, res) {
    res.send("<h1>Welcome to your server!</h1>");
});
