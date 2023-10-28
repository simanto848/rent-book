const router = require("express").Router()
const CartController = require("../app/controllers/CartController")
const isLogin = require("../app/middleware/isLogin")

router.get("/", isLogin, CartController.cart_index)
router.post("/:id", isLogin, CartController.cart_add)
router.put("/:id", isLogin, CartController.cart_update)
router.delete("/:id", isLogin, CartController.cart_delete)
// router.get("/checkout", isLogin, CartController.cart_checkout)
// router.get("/:id/view", isLogin, CartController.cart_view)


module.exports = router