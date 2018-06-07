import _ from 'underscore';
import Clone from 'clone'
/*
 * 
 *  后端传过来的产品列表为无层级的，但是要展示成横线排列的tabs，则需要进行转换
 *  生成类似这种的：[{  title: '评估报告', children: [ {title: '基础数据',children: [...pro]} , {title: '反欺诈',children: [...pro]} ]  }]
 */

function getProTabsList(oldArr,oneName,twoName) {
	// 首先生成一个类似{ "评估报告": { "基础信息": arr } }这种的数据结构，方便第二步的操作
	// oneName为一级类目的字段属性名，twoName为二级类目的字段属性名
	// oneName和twoName有默认值（因为dts中也可能用到这个函数，但是并不像申请工单中的type_name和group_name...）
	// 1
	oneName = oneName || 'type_name'
	twoName = twoName || 'group_name'
	
	let cMap = {}
	
	oldArr.forEach((item,index) => {
		/*************** */
		if(!cMap[item[oneName]]) {
			// 一级层级,如果不存在则初始化
			cMap[item[oneName]] = {};
		}
		if(!cMap[item[oneName]][item[twoName]]) {
			// 二级层级
			cMap[item[oneName]][item[twoName]] = [];
		}
		// 赋值
		cMap[item[oneName]][item[twoName]].push(item)
	})
	
	// 2
	let arr = []
	_.keys(cMap).forEach(item => {
		arr.push({
			title: item,
			children: [],
			
		})
		_.keys(cMap[item]).forEach(g => {
			let a = cMap[item][g]
			
			// 全选的checkbox，如果children中存在一个未选中的，则为false
			let isAllFlag = _.filter(a,(obj) => { return !obj.isChecked })
			
			arr[arr.length-1].children.push({
				title: g,
				parent: item,
				children: a,
				isChecked: isAllFlag.length ? false : true
			})
			
			
	
		})
	})
	
	return arr
}


/*
 * 获取tab页下的产品选择列表, 规则或者评分
 */
function getProListByFlag(this_arr,flag,isShow) {
	//	还区分  规则，评分的....
	var return_arr = [] ;

	var flagArr = _.filter(this_arr, (item) => {
		return item.type_code == flag
	})

	var this_group_arr = _.union(_.pluck(flagArr, 'group_name'));	//	获取3级分类
	
	var active_name_arr = []
//	
	this_group_arr.forEach(item => {
		var arr = _.filter(flagArr, (g) => {
			if(isShow) {
				//	维度，通过isShow判断是否加入该产品
				return item == g.group_name && g.isShow
			} else {
				return item == g.group_name
			}
		})
		if(arr.length) {
			
			return_arr.push({
				flag: flag,
				title: item,
				children: arr,
			})
		}
	})
	
	return return_arr
	
}

function getProListWithVision(_list) {
	var list = Clone(_list)
	var proIdMap = {};
	list.forEach(item => {
		proIdMap[item.id] = item
	})
	// 首先把多版本的单独都弄出来，产品带ver属性的，就是多版本，这时还要找出同code的其他版本
	var verArr = _.filter(list,item => {
		return item.ver
	})
	// 通过code查找到其他同版本的
	verArr.forEach(item => {
		item.idsbak = [];	// 存放着所有版本的id
		var sp = item.spread;	// 默认选中版本的id，然后判断spread，spread不等于0的时候，越小越优先    2 1 0 3
		item.verSe = item.id;	// 默认选中版本的id，然后判断spread，spread不等于0的时候，越小越优先    2 1 0 3
		list.forEach(g => {
			if(item.type_code == g.type_code && item.code == g.code && item.group_code == g.group_code) {
				item.idsbak.push(g.id)
				if(!sp || (g.spread && g.spread < sp)) {	// 如果sp == 0的话，那么重新赋值；如果sp != 0 ，则取最小的
					sp = g.spread;
					item.verSe = g.id
				}
				
				g.idsbak = item.idsbak;	//	这一步，让所有的版本产品的idsbak都一样
				g.verSe = item.verSe
			}
		})

	})
	
//	console.log(4,proIdMap["471"]);
//	console.log(4,proIdMap["472"]);
//	console.log(4,proIdMap["473"]);
//	console.log(4,proIdMap["467"]);
	
	// 相当于给每个多版本的子产品加了个idsbak
	
	return list;
	
}

export default {
	getProTabsList: getProTabsList,
	getProListByFlag: getProListByFlag,
	getProListWithVision: getProListWithVision
}
