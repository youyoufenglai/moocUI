# 快速开始

#### 安装组件库
```bash
npm install mooc-ui-test
```

#### 引用组件库
>在main.js中引用组件库
```javascript
//全部引入
import 'mooc-ui-test/dist/css/index.css';
import MUI from 'mooc-ui-test';
Vue.use(MUI);

//按需引入
import 'mooc-ui-test/dist/css/demo.css';
import { DemoComponent } from 'mooc-ui-test';
Vue.use(DemoComponent);

import 'mooc-ui-test/dist/css/card.css';
import { CardComponent } from 'mooc-ui-test';
Vue.use(CardComponent);
```
