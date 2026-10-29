let express = require('express');
const path = require("path");
let app = express();

const PORT = 3000;

app.get("/api/products", (req, res) => {
    res.sendFile(
        path.join(__dirname, "VIEW", "products.html")
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});