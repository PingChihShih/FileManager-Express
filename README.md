# Express 檔案上傳下載

## 使用套件

+ **DB/ODM**: mongodb/mongoose
+ **File**: multer
+ Others: dotenv

## 專案結構

| 資料夾/檔案  | 敘述  |
|:---|---:|
| controllers | 包含流程以及簡單的邏輯 |
| middlewares | 此處是處理檔案的multer |
| models | 資料模型 |
| public | 一些靜態資料，包含上傳的檔案 |
| routes | 路由處理 |
| views | 視圖處理，但其實我不會jade |
| app.js | 程式入口 |
| ...其他 | 設定檔等 |