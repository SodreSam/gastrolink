import { Request, Response } from "express"

import { io } from "../../../index"

import { Order } from "../../models/Order"

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body

    if (!table) {
      res.status(400).json({
        message: "Table is requerid",
      })
    }

    if (!products) {
      res.status(400).json({
        message: "Products is requerid",
      })
    }

    const order = await Order.create({ table, products })
    const orderDetails = await order.populate("products.product")

    io.emit("orders@new", orderDetails)

    res.status(201).json(order)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
