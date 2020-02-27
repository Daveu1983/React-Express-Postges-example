const express = require("express");
const app = express();
app.use(express.json());
const port = 8000

let stuff = [
    {
        fruit: "Bannana"
    },
    {
        fruit: "Apple"
    },
    {
        fruit: "Orange"
    },
]

app.listen(port, () => console.log(`listening on port ${port}`));
app.get("/", function(request, response){
    response.json({
        fruit: stuff
    })
})