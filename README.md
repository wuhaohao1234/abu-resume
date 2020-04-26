# abu-resume
个人简历

## git commit

项目集成了husky

commit 规范
```
    feat：新功能（feature）
    fix：修补bug
    docs：文档（documentation）
    style： 格式（不影响代码运行的变动）
    refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    test：增加测试
    chore：构建过程或辅助工具的变动
```

## 前端:

abu-client

`vue create abu-client`

`vue add vuetify`

## 后端

abu-serve

`npm init egg --type=ts`

## lean-cloud

```
// const TestObject = ctx.AV.Object.extend('TestObject');
// const testObject = new TestObject();
// testObject.set('words', 'Hello world!');
// testObject.save().then((testObject: any) => {
//   console.log(testObject)
//   console.log('保存成功。')
// })
const avQuery = new ctx.AV.Query('TestObject');
ctx.body = await avQuery.find();
```