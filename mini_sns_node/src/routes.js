const Router = require("@koa/router");
const router = new Router();

//선언
const webController = require("./web/controller");
const apiUserController = require("./api/user/controller");
const apiFeedController = require("./api/feed/controller");

//웹 컨트롤러 루트
router.get("/", webController.home);
router.get("/page/:page", webController.page);

//유저 컨트롤러 루트
router.get("/api/user/:id", apiUserController.info);

//피드 컨트롤러 루트
router.get("/api/feed", apiFeedController.index);
router.post("/api/feed", apiFeedController.store);
router.get("/api/feed/:id", apiFeedController.show);
router.put("/api/feed/:id", apiFeedController.update);
router.delete("/api/feed/:id", apiFeedController.delete);

module.exports = router;
