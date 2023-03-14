"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_route_1 = __importDefault(require("./routes/course.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3005;
app.use(express_1.default.json());
app.use('/api/courses', course_route_1.default); // All routes in here starts with /route1
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
