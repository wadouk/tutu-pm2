const flat = require("flat");

const fs = require("fs");
const path = require("path");

fs.readFile(path.join(process.cwd(), "app.user.prod.json"), (err, content) => {
    const env = flat(JSON.parse(content.toString()));
    console.log("heroku config:set --app app-b2c-pr", Object.keys(env).map((key) => {
        return key + "=" + env[key];
    }).join(" "));
});