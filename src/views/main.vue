<template>
	<el-container>
		<el-header class="header-con">
			<el-row type="flex"  justify="space-between">
				<el-col :span="16">
					<div class="fl" >
						<div class="logo-img" >
							<img src="../assets/logo4.png" height="36"  />
						</div>
					</div>
					<ul class="fl header-nav">
						<li><i class="fa fa-cube" aria-hidden="true"></i><a href="javascript:void(0)">产品管理</a></li>
						<li class="active"><i class="fa fa-pie-chart" aria-hidden="true"></i><a href="javascript:void(0)">测试数据</a></li>
					</ul>
				</el-col>
				<el-col :span="8" style="text-align: right;">
					<el-dropdown trigger="hover" style="margin-right: 40px;padding-left: 10px;text-align: left;">
						<span class="el-dropdown-link" style="font-size: 13px;color: #666;cursor: pointer;">
							{{username}}HI 测试人员
							<i class="fa fa-angle-down" style="font-size: 16px;margin-left: 4px;"></i>
						</span>
						<el-dropdown-menu slot="dropdown" style="margin-top: -2px;">
							<el-dropdown-item  style="font-size: 13px;" ><span  style="display: inline-block;width: 100%;">退出</span></el-dropdown-item>
						</el-dropdown-menu>
							
					</el-dropdown>
						
				</el-col>
			</el-row>
				
			</el-header>
			
			<el-main class="main-con clearfix">
				<div class="left-nav fl">
					<el-menu>
					  <el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">产品列表</span>
					  </el-menu-item>
					  <el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span slot="title">文档导出</span>
					  </el-menu-item>
					  <el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">产品配置</span>
					  </el-menu-item>
					  <el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">FAQ</span>
					  </el-menu-item>
					  <el-menu-item index="4" class="spit">
						<i class="el-icon-setting"></i>
						<span slot="title">测试数据列表</span>
					  </el-menu-item>
					</el-menu>
				</div>
				<div class="content fr">
					<router-view />
				</div>
				
			</el-main>
	</el-container>
</template>

<script>
	import _ from 'underscore';
	
	export default {
		data() {
			return {
				username: ''
			}
		}
	}
	
	
</script>

<style>
	body {
		overflow-x: hidden;
		background: #E3E4E9;
	}
	.header-con {
		background: #F4F6FC;
		color: #fff;
		line-height: 60px;
		padding: 0;
		box-shadow: 0 1px 2px rgba(0,0,0,.2);
		position: fixed;
		left: 0;
		right: 0;
		z-index: 100;
	}
	.logo-img {
		display: inline-block;
		margin-left: 36px;
		margin-top: 12px;
		width: 200px;
	}
	ul.header-nav {
		height: 60px;
		margin-left: 60px;
	}
	ul.header-nav li {
		float: left;
		height: 60px;
		line-height: 60px;
		text-align: center;
		padding: 0 26px;
	}
	ul.header-nav li a {
		color: #666;
		font-size: 14px;
	}
	ul.header-nav li i {
		color: #D1D2D5;
		font-size: 14px;
		margin-right: 5px;
	}
	ul.header-nav li:hover i, ul.header-nav li.active i {
		color: #ff8a1f;
	}
	ul.header-nav li.active a {
		font-weight: 700;
	}
	
	.main-con {
		width: 1200px;
		margin: 80px auto 20px;
		padding: 0;
	}
	.left-nav {
		width: 160px;
		background: #fff;
		border: 1px solid rgba(0,0,0,.2);
		min-height: 260px;
		padding-top: 10px;
	}
	.left-nav .el-menu-item {
		font-size: 13px;
	}
	.left-nav .el-menu {
		border-right: 0;
		text-align: left;
	}
	.left-nav .el-menu-item {
		height: 42px;
		line-height: 42px;
		position: relative;
	}
	.left-nav .el-menu-item.spit {
		margin-top: 12px;
	}
	.left-nav .el-menu-item.spit:before {
		content: '';
		position: absolute;
		top: -2px;
		height: 1px;
		width: 86%;
		left: 7%;
		background: #eee;
	}
	.el-menu li {
		-webkit-user-select: none;
	}
	.content {
		min-height: 680px;
		background: #fff;
		width: 1016px;
		border: 1px solid rgba(0,0,0,.2);
	}
</style>
