<template>
	  <el-container>

	    <div class="lg-bg">
	    		<div class="bg-inner">
	    			<el-form :model="post" ref="loginForm" label-width="0px" class="login-container">
							<h3 style="margin-bottom: 14px;">
								<img src="../assets/login_logo.png" />
							</h3>
						  <h3 style="margin-bottom: 22px;font-size: 20px;font-weight: 700;">数据观察室</h3>
						  <el-form-item
						    prop="username"
						    :rules="[{ required: true, message: '用户名不能为空'}]"
						  >

						    <el-input
						    		clearable
						    		v-model="post.username"
						    		placeholder="用户名"	>
						    </el-input>
						  </el-form-item>

						  <el-form-item
						    prop="password"
						    :rules="[{ required: true, message: '密码不能为空'}]"
						  >
						    <el-input
						    		type="password"
						    		clearable
						    		v-model="post.password"
						    		@keyup.enter.native="submitForm"
						    		placeholder="密码"	>
						    </el-input>
						  </el-form-item>
						  <el-form-item style="text-align: center;margin-top: 30px;">
						  	<el-button type="primary" style="width: 100%;border-radius: 1px;" @click="submitForm" :loading="loginLoading" >登录</el-button>
						  </el-form-item>
						</el-form>
	    		</div>
	    </div>
	  </el-container>
</template>

<script>
	import moment from 'moment'


	moment.locale('zh-cn');


	export default {
		name: 'login',
		data() {
			return {
			   post: {
		          username: '',
		          password: '',
//		          messageid: '123'
		       },
		       timeNow: moment().format('ll dddd'),
		       ticket: '',
		     loginLoading: false,
		     isShowAutoFullLoading: false
			}
		},
		mounted() {
			// this.init()
		},
		components: {
		},
		methods: {
			init() {
				this.ticket = this.$route.query.ticket;
				if(this.ticket) {
					this.autoLogin()
				}


			},
			submitForm() {
				this.$refs['loginForm'].validate(valid => {
					if (valid) {
			        this.login()
			    }
				})
			},
			async login() {
				this.loginLoading = true;
    	  		var rsu = await this.$http.post('/api/login',this.post);

				if(rsu.code != '0') {
					this.$message({ message: rsu.message,type: 'error'});
					this.loginLoading = false;
				} else {
					this.afterLogin(rsu.data)
				}

// 	    if(!rsu.status) {
//					this.$message({ message: rsu.fail_reason,type: 'error'});
//				} else {
//					this.afterLogin(rsu)
//				}




			},
			async autoLogin() {
				this.isShowAutoFullLoading = true;

				var rsu = await this.$http.get('/api/login',{ ticket: this.ticket });

				setTimeout(() => {
					if(rsu.code != '0') {
						//this.$message({ message: rsu.fail_reason,type: 'error'});
						alert(rsu.message)
					} else {
						this.afterLogin(rsu.data)
					}
				},1000)

			},
			async afterLogin(info) {
				var menuObj = await this.$http.get('/api/menus');
				var menu = menuObj.data.list.filter(function (v) {
          return v.children.length
        });
				var cfg = Object.assign({}, info, { menus: menu });

        sessionStorage.setItem('filter-session','');
				localStorage.setItem('crm-session',JSON.stringify(cfg));
				this.loginLoading = false;

				location.replace(cfg.menus[0].children[0].url)

			},
		},

	}
</script>

<style >
	body {
		/*overflow: hidden;*/
	}
	.header-mr {
		width: 1200px;
		margin: 0 auto;
		height: 100%;
		line-height: 60px;
	}
	.logo-left {
		height: 100%;

		-webkit-user-select: none;
		padding-left: 20px;
	}
	.logo-left img {
			height: 34px;
			width: 34px;
			top: 10px;
		}
	 .logo-left	span {
			/*//margin-left: 10px;*/
			font-size: 20px;
			position: relative;
			margin-left: 2px;
		}
		.time-outer {
			font-size: 13px;
		}
		.new-font {
			color: #fff;
			font-size: 12px;
			background: #ed7266;
			padding: 0 4px 3px;
			border-radius: 2px;
			line-height: 12px;
			position: relative;
			display: inline-block;
			top: -6px;
		}
	.lg-bg {
		width: 100%;
		background: url(../assets/lg-bg.jpg) no-repeat;
		background-position: center;
		background-size: cover;
		height: 100vh;
		overflow: hidden;
	}
	.bg-msg {
		position: absolute;
		top: 160px;
		left: 50px;
		font-size: 37px;
		color: #fff;
		-webkit-user-select: none;
	}
	.bg-inner {
			/*width: 1200px;
			margin: 0 auto;
			position: relative;*/
		}
	.login-container {
		border-radius: 2px;
		width: 296px;
		background: rgba(255,255,255,0.5);
		padding: 40px 35px 60px 35px;
		/*border: 1px solid #eaeaea;*/
		margin: 180px auto;
	}
	.el-footer {
		text-align: center;
		line-height: 60px;
		font-size: 13px;
		color: #6c7377;
	}
	.el-input .el-input__inner {
		border-radius: 1px;
	}
	.lg-bg .el-form .el-input .el-input__inner {
		height: 40px;
	}

	/*.user-icon {
		height: 14px;
		width: 14px;
		background: url(../assets/icon-main.png) 0 0 no-repeat;
		display: inline-block;
	}
	.psd-icon {
		height: 16px;
		width: 13px;
		background-position: -20px 0;
		background: url(../assets/icon-main.png) -20px 0 no-repeat ;
		display: inline-block;
	}
	.el-form-item__content .el-input .el-input__prefix {
		left: 10px;
		top: 2px;
	}*/
</style>
