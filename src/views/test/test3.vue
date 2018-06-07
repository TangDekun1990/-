<template>
  <section>
    <div class="main-title">
      <el-row type="flex" justify="space-between">
        <el-col :span="6" >新增客户</el-col>
        <el-col :span="6" style="text-align: right;">
          <el-button type="primary" size="small" >保存</el-button>
          <router-link to="/customer" tag="span"><el-button plain size="small">取消</el-button></router-link>
        </el-col>
      </el-row>
    </div>
    <div class="main-content">
      <div class="detail-edit cus-edit">
        <el-form :inline="true" ref="customerEditForm" :model="post" class="demo-form-inline" label-width="100%" label-position="left" size="small" >
          <h5>基本信息</h5>
          <el-form-item label="客户名称" prop="name" :rules="[ { required: true, message: '请输入客户名称'} ]">
            <el-input v-model="post.name" auto-complete="off" clearable @blur="isCustomerExist(post.name)"></el-input>
          </el-form-item>
          <el-form-item label="客户简称" prop="short_name" :rules="[ { required: true, message: '请输入客户简称'} ]">
            <el-input v-model="post.short_name" auto-complete="off" clearable></el-input>
          </el-form-item>
          
          <el-form-item label="客户来源" prop="origin" :rules="[ { required: true, message: '请选择客户来源'} ]">
            <el-select  placeholder="请选择" v-model="post.origin">
              <el-option
                v-for="item in originList"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="注册资本(万)" prop="registered_capital">
            <el-input v-model="post.registered_capital" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="股东">
            <el-input v-model="post.shareholder" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="address" :rules="[ { required: true, message: '请输入详细地址'} ]">
            <el-input type="textarea" v-model="post.address" auto-complete="off" ></el-input>
          </el-form-item>
          <h5>业务信息</h5>
          <el-form-item label="业务/产品描述" prop="product_desc" :rules="[ { required: true, message: '请输入业务/产品描述'} ]">
            <el-input type="textarea" v-model="post.product_desc" auto-complete="off" ></el-input>
          </el-form-item>
          <el-form-item label="备注" class="red-text">
            <el-input type="textarea" v-model="post.note" auto-complete="off" ></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
  import _ from 'underscore';
  import Clone from 'clone';

  const originArr = ["内部线索","其他"];
  const limitArr = ["5万及以上","3-5万","1-3万","1千-1万","1千及以下"];
  const terArr = [
    {id: "随借随还",name: "随借随还（循环贷）"},
    {id: "1个月及以内",name: "1个月及以内（注：主要是paydayloan）"},
    {id: "2-12期",name: "2-12期（月）"},
    {id: "13-36期",name: "13-36期（月）"},
    {id: "36期以上",name: "36期以上（即3年以上）"}
  ];
  const rateArr = [
    {id: "18%及以下",name: "18%及以下（信用卡及以下利率）"},
    {id: "18-30%",name: "18-30%"},
    {id: "30%-50%",name: "30%-50%"},
    {id: "50%-100%",name: "50%-100%"},
    {id: "100%及以上",name: "100%及以上"}
  ];
  const sceneArr = ["购物","租房","装修","婚庆","旅游","购车","数码3C","其他"];

  export default {
    data() {
     
      return {
        originList: [],
				post: {}
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .cus-edit .w100 .el-form-item {
    width: 94%;
  }
  .cus-edit .el-form-item__content .area-cascader .el-cascader{
    width: 100%;
  }
  .cus-edit .el-form-item .otherScene{
    padding: 0;
    margin: 5px 0 0;
    width: 100%;
  }
  .cus-edit .el-form-item .otherScene .el-form-item__content{
    width: 100%;
  }
  .cus-edit .w100 .el-checkbox{
    margin: 0 5px 0 0;
    min-width: 120px;
  }
</style>
