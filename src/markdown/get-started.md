# 开始使用
请先[安装](/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "king-ui"
```

就可以使用我提供的组件了。

## React 单文件组件

代码示例：

```
import React from 'react'
import Button from '../components/Button.tsx'

const App = ()=>{
    return (
        <Button>+1</Button>
    )
}
```