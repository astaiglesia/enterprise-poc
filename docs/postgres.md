- start the local servers
```
npm run dev
```
- connect to elephantsql database
  - install node-postgres
  set up a connection instance

- start up the the postgres server 
```
sudo -i -u postgres
```
  - access and edit the config files:
    - postgres.sql > listen_addresses = '*'
    https://dba.stackexchange.com/questions/83984/connect-to-postgresql-server-fatal-no-pg-hba-conf-entry-for-host

## Notes
  - username and database are the same
  https://www.elephantsql.com/docs/pgadmin.html


========== DATA MODEL 

CREATE TABLE products (
  product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 100 ) NOT NULL,
  saleType VARCHAR ( 10 ) NOT NULL,
  category VARCHAR ( 50 ) NOT NULL,
  color VARCHAR ( 50 ),
  sku VARCHAR ( 15 ) NOT NULL,
  variant_price INTEGER NOT NULL,
  image_src VARCHAR ( 250 ) NOT NULL,
  image_alt VARCHAR (250 ) NOT NULL,
  created_on TIMESTAMP 
);