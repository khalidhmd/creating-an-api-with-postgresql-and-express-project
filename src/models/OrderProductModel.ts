import db from "../database";

export type order_productType = {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
};

export class OrderProductModel {
  async index(): Promise<order_productType[]> {
    try {
      const conn = await db.connect();
      const sql = "SELECT * FROM order_products;";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }

  async show(order_id: number): Promise<order_productType> {
    try {
      const sql = "SELECT * FROM orders WHERE order_id=($1);";

      const conn = await db.connect();

      const result = await conn.query(sql, [order_id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find order ${order_id}. Error: ${err}`);
    }
  }

  async create(o: order_productType): Promise<order_productType> {
    try {
      const sql =
        "INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *;";
      const conn = await db.connect();

      const result = await conn.query(sql, [
        o.order_id,
        o.product_id,
        o.quantity,
      ]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(
        `Could not add new order_product for order: ${o.order_id} and product: ${o.product_id}. Error: ${err}`
      );
    }
  }

  async delete(id: number): Promise<order_productType> {
    try {
      const sql = "DELETE FROM order_products WHERE id=($1);";
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(`Could not delete order ${id}. Error: ${err}`);
    }
  }

  async clear(): Promise<void> {
    try {
      const sql = "DELETE FROM order_products;";
      const conn = await db.connect();

      await conn.query(sql);

      conn.release();
    } catch (err) {
      throw new Error(`Could not clear order . Error: ${err}`);
    }
  }
}
