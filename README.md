# 如何优雅的使用浏览器的键盘事件

## 前言

本文将介绍在`React`的项目中配合`mobx`对浏览器的键盘事件进行抽离，只是将使用过程中的一些实现思路进行总结，供以参考。


## 思考

如果抽离出来 如何在不同的页面对应的键盘函数去执行？
这里想到了使用`mobx`仓库进去进行 存储更改 对应的函数

## 封装

### 首先根据这个思路创建一个 mobx 仓库

新建一个抽象类文件

```ts
import { action, observable } from "mobx";

export default abstract class APageModel {
  @observable F1 = (): boolean => {
    console.log("F1");
    return false;
  };
  /**
   * 监听键盘事件
   */
  @action handleOnKey(): void {
    document.onkeydown = (e) => {
      const { keyCode } = e;
      /**
       * 页面中是否使用键盘事件
       *
       *  */
      let returnValue = false;
      //   执行
      switch (keyCode) {
        case 112:
          returnValue = this.F1();
          break;
      }
      if (returnValue) {
        e.preventDefault();
      }
    };
  }
}
```

首先`observable`name 为 F1 的函数 然后在创建一个执行函数 来监听键盘事件 执行对应函数

## 使用

### 继承

创建一个页面仓库，
继承我们的抽象类，
修改对应的键盘函数覆盖掉之抽象类里的内容

```ts
import { action, observable } from "mobx";
import APageModel from "./abstract/APageModel";
export default class AppModel extends APageModel {
  @observable keyName = "";
  F1 = () => {
    this.setKeyName("F1");
    return true;
  };
  @action
  setKeyName(value: string): void {
    this.keyName = value;
  }
}
```

### 页面中使用

App.tsx

```js
import React from "react";
import { observer } from "mobx-react";
import APage from "./abstract/APage";
import AppModel from "./AppModel";

interface AppProps {}
interface AppState extends AppModel {
  keyName: string;
}
@observer
class App extends APage<AppProps, AppState> {
  protected createModel(): AppState {
    //   引入仓库
    return new AppModel();
  }
  componentDidMount() {
      //监听
    this.model.handleOnKey();
  }
  public render() {
    let { keyName } = this.model;
    return <div>你刚刚按下了: {keyName}</div>;
  }
}

export default App;

```

## 结尾
- 项目地址：https://github.com/wangjinshen/keyCode.git
- 觉得有收获的朋友欢迎点赞，关注一波!