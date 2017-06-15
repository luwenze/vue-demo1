// 1.0 导入vue核心包
import Vue from 'vue';
import VueRouter from 'vue-router'

//2.0在Vue中使用路由
Vue.use(VueRouter);


//根据对应的组件修改新的组件
//3.0导入vue组件
import App from './App.vue';
import home from './components/home.vue';
import shopcar from './components/shopcar/car.vue';

//根据对应的组件定义新的路径
//4.0定义路由规则
var router=new VueRouter({
	linkActiveClass:'mui-active',//改变路由激活时的class名称
	routes:[
		{path:'/home',component:home},
		{path:'/shopcar',component:shopcar}
	]
});

//5.0引入mint-ui库
//导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
//导入mint-ui组件对象
import mintui from 'mint-ui';
//在vue中全局使用mintui
Vue.use(mintui);


//6.0注册mui的css样式
import '../statics/mui/css/mui.css';
//  1.导入一个全局的样式
import '../statics/css/site.css';

//7.0实例化vue对象并且挂载到id=app的div元素上
new Vue({
	el:'#app',
	router:router,
	render:c=>c(App)  
});