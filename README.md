# abu-resume
个人简历

## git commit

项目集成了husky

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