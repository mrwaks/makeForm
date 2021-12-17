#!/usr/bin/env node

import {
    promptField,
    promptForm,
    generateForm
} from "./utils/makeform.js";

let fields = [];
let form;


const cmd = (([, , ...args] = process.argv) => {
    if (args[0] === "makeform") {
        promptField(fields);
        form = promptForm();
        generateForm(form, fields);
    }
})();