# mooc-ui-test 组件库

### 快速开始

#### 1、安装组件库

```bash
npm i mooc-ui-test
```

#### 2、引用组件库

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