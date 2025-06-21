export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"车位分类","menuJump":"列表","tableName":"cheweifenlei"}],"menu":"车位分类管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除","进场"],"menu":"车位信息","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","删除"],"menu":"车子进场","menuJump":"列表","tableName":"chezijinchang"}],"menu":"车子进场管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","删除","首页统计","首页总数","处罚","审核"],"menu":"车子离场","menuJump":"列表","tableName":"chezilichang"}],"menu":"车子离场管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改","删除","首页统计","首页总数"],"menu":"违规处罚","menuJump":"列表","tableName":"weiguichufa"}],"menu":"违规处罚管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"投诉建议","tableName":"messages"}],"menu":"投诉建议"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"论坛交流","tableName":"forum"}],"menu":"论坛交流"},{"child":[{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线交流","tableName":"chat"},{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","进场"],"menu":"车位信息列表","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","离场","删除"],"menu":"车子进场","menuJump":"列表","tableName":"chezijinchang"}],"menu":"车子进场管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","支付","删除"],"menu":"车子离场","menuJump":"列表","tableName":"chezilichang"}],"menu":"车子离场管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","支付","删除"],"menu":"违规处罚","menuJump":"列表","tableName":"weiguichufa"}],"menu":"违规处罚管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","进场"],"menu":"车位信息列表","menuJump":"列表","tableName":"cheweixinxi"}],"menu":"车位信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
