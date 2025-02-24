import { Request, Response } from "express"

import { Product } from "../../models/Product"

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename
    const { name, description, price, category, ingredients } = req.body

    if (!imagePath) {
      res.status(400).json({
        message: "Image is requerid",
      })
    }
    if (!name) {
      res.status(400).json({
        message: "Name is requerid",
      })
      if (!description) {
        res.status(400).json({
          message: "Description is requerid",
        })
      }
      if (!category) {
        res.status(400).json({
          message: "Category is requerid",
        })
      }
      if (!ingredients) {
        res.status(400).json({
          message: "Ingredients is requerid",
        })
      }
    }
    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    })

    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
