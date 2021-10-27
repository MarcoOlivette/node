-- CreateTable
CREATE TABLE "category" (
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "product_category" TEXT NOT NULL,
    "product_inventory" INTEGER NOT NULL,
    CONSTRAINT "product_product_category_fkey" FOREIGN KEY ("product_category") REFERENCES "category" ("category") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_product_inventory_fkey" FOREIGN KEY ("product_inventory") REFERENCES "inventory" ("amout") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "inventory" (
    "amout" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "category_category_key" ON "category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "product_product_inventory_key" ON "product"("product_inventory");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_amout_key" ON "inventory"("amout");
