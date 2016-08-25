'use strict';

const express = require("express");
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');