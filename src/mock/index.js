import Mock from 'mockjs';
// import {login} from './data/login.js';
// import {task} from './data/task.js';

//mock数据，测试时默认开启时
let data=[].concat(
    // login,
    // task
);

data.forEach((res)=>{
    Mock.mock(res.path,res.type,res.data);
})