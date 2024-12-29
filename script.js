const fs = require('fs');

fs.rm("./copy", { recursive: true }, function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log("removed");
    }
})