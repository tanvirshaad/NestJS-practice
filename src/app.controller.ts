import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return "Hello World!";
    }
    @Get("/test")
    getTestRoute() {
        return "This is a test route!";
    }
}
