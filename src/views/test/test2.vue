<template>
	<section>
		<div class="main-title">
		      <el-row type="flex" justify="space-between">
		        <el-col :span="12">交付申请信息
		        </el-col>
		        <el-col :span="12" style="text-align: right;">
		        	<router-link to="/compasslist"><el-button plain size="small"><i class="fa fa-reply" aria-hidden="true"></i> 返回</el-button></router-link>
		        </el-col>
		      </el-row>
		    </div>
		    <div class="main-content">
		      <div class="detail-view">
		        <el-form :inline="true"  class="demo-form-inline" label-width="100px" label-position="left" size="small">
		          <h5>基本信息</h5>
		          <el-form-item label="单号">{{info.id}}</el-form-item>
		          <el-form-item label="客户ID">{{info.customer_sid}}</el-form-item>
		          <el-form-item label="所属项目">{{info.project_name}}</el-form-item>
		          <el-form-item label="所属客户">{{info.customer_name}}</el-form-item>
		          <el-form-item label="申请人">{{info.applicant}}</el-form-item>
		          <el-form-item label="申请时间">{{info.create_time}}</el-form-item>
		          <el-form-item label="当前状态">{{info.state_name}}</el-form-item>
		          <el-form-item label="账号类型">{{info.account_type}}</el-form-item>
		          <el-form-item label="备注">{{info.note}}</el-form-item>
		          <h5>联系人信息</h5>
		          <h5>进度信息</h5>
		          <h5>模块信息</h5>
		          
		          <h5>历史申请信息</h5>
		          
		        </el-form>
		      </div>
		    </div>
		   
	</section>
</template>

<script>
	export default {
		data() {
			return {
				table_list: [],
				businessmansList: [],
				info: {}
			}
		}
		
	}
</script>

<style>

</style>
