<template>
	<section>
		<div class="main-title">
			<el-row type="flex" justify="space-between">
				<el-col :span="6" style="text-align: left;">我的客户</el-col>
				<el-col :span="12">
					<el-input
						size="small"
						style="width: 326px;"
						clearable
						placeholder="项目名称/客户名称/工单号/apicode"
						>
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</el-col>
				<el-col :span="6" style="text-align: right;">
					<router-link to="/customeredit" tag="span"><el-button type="primary" size="small" >新建客户</el-button></router-link>
				</el-col>
			</el-row>
		</div>
    <div class="main-content">
      <div class="main-filter">
		  <div class="filter-item">
			  <div class="title">商务：</div>
			  <el-select placeholder="请选择"  clearable filterable>
			  	<el-option
			  		v-for="item in businessmansList"
			  		:key="item.id"
			  		:label="item.name"
			  		:value="item.id">
			  	</el-option>
			  </el-select>
		  </div>
      </div>
      <div class="tab-outer scroll">
        <el-table
          :data="table_list"
          border
          header-cell-class-name="header-cell-sty"
          cell-class-name="cell-sty"
          style="width: 100%">
          <el-table-column prop="short_name" label="简称"  />
          <el-table-column prop="type" label="类型" />
          <el-table-column prop="priority" label="客户级别"  />
          <el-table-column prop="region" label="区域"  />
        </el-table>
      </div>
    </div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				table_list: [],
				businessmansList: []
			}
		}
		
	}
</script>

<style>

</style>
