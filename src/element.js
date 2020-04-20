import Vue from 'vue'

// 按需引入element-ui组件
import {Message,MessageBox} from 'element-ui'

// 声明使用所需组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;