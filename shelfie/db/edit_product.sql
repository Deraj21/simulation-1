-- 1 = id; 2 = name; 3 = price, 4 = url;
update Product
  set (product_name, price, image_url) = ($2, $3, $4)
  where product_id = $1;

select * from Product;