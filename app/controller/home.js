'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');

const path = require('path');

const publicUrl = require('../constant/public');

class HomeController extends Controller {

  readFilePlugin(publicUrl, fileName) {
    return fs.readFileSync(path.join(__dirname, publicUrl + fileName), 'utf8');
  }

  async index() {
    const { ctx } = this;
    ctx.body = this.readFilePlugin(publicUrl.homeUrl, 'db.json');
  }

  async detail() {
    const { ctx } = this;
    ctx.body = this.readFilePlugin(publicUrl.detailUrl, 'detail.json');
  }

}

module.exports = HomeController;
