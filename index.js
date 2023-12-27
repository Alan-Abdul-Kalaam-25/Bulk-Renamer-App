const fs = require("fs");
const path = require("path");
const replaceThis = "alex";
const replaceWith = "salma-sheikh";
const preview = true;
const folder = __dirname;

try {
    fs.readdir(folder, (err, data) => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            let oldfile = path.join(folder,item);
            let newfile = path.join(folder, item.replace(new RegExp(replaceThis, 'g'), replaceWith));
            if(!preview){
              fs.rename(oldfile, newfile, () => {
                console.log("Renaming Successfull...", item, newfile);
            });
            }
           
            else{
              if("data/" + item != newfile) console.log("data/" + item + " will be renamed to " + newfile);
              else console.log("Nothing to be renamed as " + oldfile + " = " + newfile);
            }
            console.log(!preview)
        }
    });
} catch (err) {
    console.log(err);
}
