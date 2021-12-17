"use strict";
import rl from "readline-sync";
import os from "os";

import { writeFileSync } from "fs";

export const promptField = (arr) => {
    const name = rl.question("Name of field: ");
    const types = ["text", "number", "file"];
    const index = rl.keyInSelect(types, "Type of field: ");
    const newField = rl.question("Add a new field to your form ? Y/n ");
    const field = `<label for="${name}">${os.EOL}<input type="${types[index]}" id="${name}">`;
    arr.push(field);
    return newField.toLowerCase() === "y" ? promptField(arr) : newField.toLowerCase() === "n" ? arr : console.log("bad answer");
}

export const promptForm = () => {
    const form = rl.question("Do you want a form ? Y/n ");
    return form.toLowerCase() === "y" ? `<form></form>` : false;
}

export const generateForm = (form, fields) => {
    form.length > 0 ? writeFileSync("form.html", `<form>\n${fields.join("\n")}\n</form>`) : false;
}