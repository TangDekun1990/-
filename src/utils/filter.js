/*
 * 
 * 通用过滤器
 * 
 */

import _ from 'underscore';

/*
 * 将格式 [{id:1,name: 'df'},{id:2, name: 'ccc'}]   转换成   df,ccc
 */
const getArrNames = (arr) => {
	return _.pluck(arr,'name').join('，')
}

/*
 * 将文件大小转换成 MB  KB 这种的
 */
const getFileSize = (bytes) => {
	if(!bytes) return ""
	if (bytes === 0) return '0 B';  
    var k = 1024;  
  
    var sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];  
  
    var i = Math.floor(Math.log(bytes) / Math.log(k));  
    
    
    return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];  
}

export {
	getArrNames,
	getFileSize
}
