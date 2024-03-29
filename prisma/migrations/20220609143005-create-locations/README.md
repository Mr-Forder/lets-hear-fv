# Migration `20220609143005-create-locations`

This migration has been generated by Mr-Forder at 6/9/2022, 3:30:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "locations" (
"id" SERIAL,
    "user_id" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "address" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "loops" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
)

CREATE INDEX "locations.userId" ON "locations"("user_id")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20220609143005-create-locations
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Location {
+  id        Int      @id @default(autoincrement())
+  userId    String   @map(name: "user_id")
+  latitude  Float
+  longitude Float
+  address   String
+  rating    Int
+  review    String
+  loops     String
+  createdAt DateTime @default(now()) @map(name: "created_at")
+  updatedAt DateTime @default(now()) @map(name: "updated_at")
+
+  @@index([userId], name: "locations.userId")
+  @@map(name: "locations")
+}
```


