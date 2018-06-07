<template>
	<section>
		<div class="main-title"  >
			<el-row type="flex" justify="space-between">
				<el-col :span="6">交付申请</el-col>
				<el-col :span="18">
					<div class="step-outer" @click="routeHandle" style="width: 100%;">
						<el-steps :active="totalIndex" finish-status="success" simple  align-center process-status="finish" style="position: fixed;right: 30px;min-width: 376px;" >
						  <el-step :title="key" v-for="(val,key) in stepMap" :key="key" description=""></el-step>
						</el-steps>
					</div>
				</el-col>
			</el-row>
		</div>

		<router-view ></router-view>
	</section>
</template>

<script>

	export default {
		data() {
			return {
				//nowIndex: 1,
				totalIndex: 2,
				stepMap: {
					"交付信息": 0,
					"客户信息": 1,
					"产品选择": 2,
//					"补充计费": 3
				}
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				// this.totalIndex++
				//this.changeRoute()
			},
			routeHandle(e) {
				var goIndex = this.stepMap[e.target.innerText]
				if(goIndex || goIndex == '0') {
					if(goIndex < this.totalIndex || goIndex == this.totalIndex) {
						this.$router.push({ name: 'CompassStep'+ (goIndex+1) })
					}
				}
			},
			changeRoute() {
				// 如果是NewCompass进来的，则自动跳转到ing的步骤
				// 如果url是/compass/step1这种的，则刷新不执行如下
				if(this.$route.name == 'NewCompass') {
					this.$router.push({
						name: 'CompassStep'+(parseInt(this.totalIndex)+1)
					})
				}

			}
		},
		watch: {
			$route() {
				this.init()
			}
		}
	}
</script>

<style>
</style>
