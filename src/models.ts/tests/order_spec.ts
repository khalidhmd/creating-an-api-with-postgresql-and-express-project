import { orderType, OrderModel } from "../Orders";

// import { Pool } from "pg";


// const db = new Pool({host: 'localhost',
// database: 'udaci_db_test',
// user: 'test_user',
// password: 'passwd',})


const order = new OrderModel();



describe("OrderModel tests", () => {
 
  it("should have an index() method", () => {
    expect(order.index).toBeDefined();
  });


  it("index method should return a list of order", async () => {
    const res = await order.index();
    expect(res).toEqual([]);
  });

  
});
