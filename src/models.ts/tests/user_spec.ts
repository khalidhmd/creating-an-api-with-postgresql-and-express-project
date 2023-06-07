import { userType, UserModel } from "../User";

import { Pool } from "pg";


const db = new Pool({host: 'localhost',
database: 'udaci_db_test',
user: 'test_user',
password: 'passwd',})
const user = new UserModel(db);




describe("UserModel tests", () => {
 
  
  it("should have an index() method", () => {
    expect(user.index).toBeDefined();
  });

  it("should have an show() method", () => {
    expect(user.show).toBeDefined();
  });

  it("should have an create() method", () => {
    expect(user.create).toBeDefined();
  });

  it("should have an delete() method", () => {
    expect(user.delete).toBeDefined();
  });

  it("index method should return a list of users", async () => {
    const res = await user.index();
    
    
    expect(res).toEqual([]);
  });

  
  
});
