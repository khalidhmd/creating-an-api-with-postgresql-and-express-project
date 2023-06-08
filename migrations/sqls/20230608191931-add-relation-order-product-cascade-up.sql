ALTER TABLE order_products DROP CONSTRAINT  IF EXISTS fk_orders; 
ALTER TABLE order_products DROP CONSTRAINT  IF EXISTS fk_products; 

ALTER TABLE order_products ADD CONSTRAINT fk_orders FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE; 
ALTER TABLE order_products ADD CONSTRAINT fk_products FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE; 