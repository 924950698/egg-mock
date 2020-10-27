'use strict';

const Controller = require('egg').Controller;

const helper = require('../extend/helper');

const publicUrl = require('../constant/public');

class HomeController extends Controller {

  async index() {
    const { ctx } = this;
    ctx.body = helper.dirname(publicUrl.homeUrl, 'db.json');
  }

  async detail() {
    const { ctx } = this;
    ctx.body = helper.dirname(publicUrl.detailUrl, 'detail.json');
  }

}

module.exports = HomeController;
