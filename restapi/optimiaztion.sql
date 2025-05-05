CREATE INDEX idx_customers_city ON Customers(city);


WITH FilteredCustomers AS (
  SELECT customer_id, customer_name
  FROM Customers
  WHERE city = 'New York'
)
SELECT fc.customer_name, p.product_name, SUM(o.total_price) AS total_spent
FROM FilteredCustomers fc
JOIN Orders o ON fc.customer_id = o.customer_id
JOIN Products p ON o.product_id = p.product_id
GROUP BY fc.customer_name, p.product_name;



