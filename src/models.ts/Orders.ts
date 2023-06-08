import { Pool } from "pg";
import db from "../db";

export type orderType = {
  id?: number | any;
  order_date: Date;
  user_id: number;
  status: boolean;
};

export class OrderModel {
  async index(): Promise<orderType[]> {
    try {
      const conn = await db.connect();
      const sql = "SELECT * FROM orders;";

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }

  async show(id: number): Promise<orderType> {
    try {
      const sql = "SELECT * FROM orders WHERE id=($1);";

      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find order ${id}. Error: ${err}`);
    }
  }

  async create(o: orderType): Promise<orderType> {
    try {
      const sql =
        "INSERT INTO orders (order_date, user_id, status) VALUES($1, $2, $3) RETURNING *;";
      const conn = await db.connect();

      const result = await conn.query(sql, [o.order_date, o.user_id, o.status]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(
        `Could not add new order from user ${o.user_id}. Error: ${err}`
      );
    }
  }

  async delete(id: number): Promise<orderType> {
    try {
      const sql = "DELETE FROM orders WHERE id=($1);";
      const conn = await db.connect();

      const result = await conn.query(sql, [id]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(`Could not delete order ${id}. Error: ${err}`);
    }
  }

  async clear(): Promise<orderType> {
    try {
      const sql = "DELETE FROM orders;";
      const conn = await db.connect();

      const result = await conn.query(sql);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(`Could not clear order . Error: ${err}`);
    }
  }
}
