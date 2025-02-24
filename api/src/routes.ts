import path from "node:path"

import { Router } from "express"

import multer from "multer"

import { createCategory } from "./app/useCases/categories/createCategory"
import { listCategory } from "./app/useCases/categories/listCategory"
import { createProduct } from "./app/useCases/products/createProducts"
import { listProducts } from "./app/useCases/products/listProducts"
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory"
import { listOrders } from "./app/useCases/orders/listOrders"
import { createOrder } from "./app/useCases/orders/createOrders"
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus"
import { cancelOrder } from "./app/useCases/orders/cancelOrder"
import { deleteCategory } from "./app/useCases/categories/deleteCategory"
import { deleteProduct } from "./app/useCases/products/deleteProduct"

export const router = Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"))
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`)
    },
  }),
})

// List categories
router.get("/categories", listCategory)

// Create Category
router.post("/categories", createCategory)

// Delete Category
router.delete("/categories/:categoryId", deleteCategory)

// List products
router.get("/products", listProducts)

// Create products
router.post("/products", upload.single("image"), createProduct)

// Delete products
router.delete("/products/:productId", deleteProduct)

// Get products by category
router.get("/categories/:categoryId/products", listProductsByCategory)

// List order
router.get("/orders", listOrders)

// Create order
router.post("/orders", createOrder)

// Change order status
router.patch("/orders/:orderId", changeOrderStatus)

// Delete/cancel order
router.delete("/orders/:orderId", cancelOrder)
