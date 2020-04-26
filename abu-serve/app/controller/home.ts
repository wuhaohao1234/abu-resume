import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // const TestObject = ctx.AV.Object.extend('TestObject');
    // const testObject = new TestObject();
    // testObject.set('words', 'Hello world!');
    // testObject.save().then((testObject: any) => {
    //   console.log(testObject)
    //   console.log('保存成功。')
    // })
    // const avQuery = new ctx.AV.Query('TestObject');
    // ctx.body = await avQuery.find();
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
