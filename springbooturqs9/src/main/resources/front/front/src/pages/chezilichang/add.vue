<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"10px auto","position":"relative","background":"none","display":"block"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="停车场名称" prop="tingchechangmingcheng">
            <el-input v-model="ruleForm.tingchechangmingcheng" 
                placeholder="停车场名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="区域" prop="quyu">
            <el-input v-model="ruleForm.quyu" 
                placeholder="区域" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位编号" prop="cheweibianhao">
            <el-input v-model="ruleForm.cheweibianhao" 
                placeholder="车位编号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位名称" prop="cheweimingcheng">
            <el-input v-model="ruleForm.cheweimingcheng" 
                placeholder="车位名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位类型" prop="cheweileixing">
            <el-input v-model="ruleForm.cheweileixing" 
                placeholder="车位类型" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位位置" prop="cheweiweizhi">
            <el-input v-model="ruleForm.cheweiweizhi" 
                placeholder="车位位置" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="小时单价" prop="xiaoshidanjia">
            <el-input v-model="ruleForm.xiaoshidanjia" 
                placeholder="小时单价" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="姓名" prop="xingming">
            <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="手机" prop="shouji">
            <el-input v-model="ruleForm.shouji" 
                placeholder="手机" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="头像" v-if="type!='cross' || (type=='cross' && !ro.touxiang)" prop="touxiang">
            <file-upload
            tip="点击上传头像"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
            @change="touxiangUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' class="upload" v-else label="头像" prop="touxiang">
                <img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车牌号" prop="chepaihao">
            <el-input v-model="ruleForm.chepaihao" 
                placeholder="车牌号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="进场时间" prop="jinchangshijian">
            <el-input v-model="ruleForm.jinchangshijian" 
                placeholder="进场时间" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="离场时间" prop="lichangshijian" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.lichangshijian" 
                  type="datetime"
                  placeholder="离场时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="停车时长" prop="tingcheshizhang">
            <el-input v-model="ruleForm.tingcheshizhang" 
                placeholder="停车时长" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="停车费用" prop="tingchefeiyong">
              <el-input v-model="tingchefeiyong" placeholder="停车费用" readonly></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"20px 0 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
        <el-button :style='{"border":"2px solid #2886bc","cursor":"pointer","padding":"0 35px","boxShadow":"inset 2px 0px 12px 0px #c2ddeb","margin":"0 10px","color":"#2886bc","outline":"none","borderRadius":"8px","background":"#fff","width":"auto","lineHeight":"44px","fontSize":"16px","height":"48px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"2px solid #ccc","cursor":"pointer","padding":"0 35px","boxShadow":"inset 0px 0px 12px 0px #eee","margin":"010px","color":"#999","outline":"none","borderRadius":"8px","background":"#fff","width":"auto","lineHeight":"44px","fontSize":"16px","height":"48px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            tingchechangmingcheng : false,
            quyu : false,
            cheweibianhao : false,
            cheweimingcheng : false,
            cheweileixing : false,
            cheweiweizhi : false,
            xiaoshidanjia : false,
            yonghuzhanghao : false,
            xingming : false,
            shouji : false,
            touxiang : false,
            chepaihao : false,
            jinchangshijian : false,
            lichangshijian : false,
            tingcheshizhang : false,
            tingchefeiyong : false,
            sfsh : false,
            shhf : false,
            ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          tingchechangmingcheng: '',
          quyu: '',
          cheweibianhao: '',
          cheweimingcheng: '',
          cheweileixing: '',
          cheweiweizhi: '',
          xiaoshidanjia: '',
          yonghuzhanghao: '',
          xingming: '',
          shouji: '',
          touxiang: '',
          chepaihao: '',
          jinchangshijian: '',
          lichangshijian: '',
          tingcheshizhang: '',
          tingchefeiyong: '',
          ispay: '',
        },
        rules: {
          tingchechangmingcheng: [
          ],
          quyu: [
          ],
          cheweibianhao: [
          ],
          cheweimingcheng: [
          ],
          cheweileixing: [
          ],
          cheweiweizhi: [
          ],
          xiaoshidanjia: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          yonghuzhanghao: [
          ],
          xingming: [
          ],
          shouji: [
          ],
          touxiang: [
          ],
          chepaihao: [
          ],
          jinchangshijian: [
          ],
          lichangshijian: [
          ],
          tingcheshizhang: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          tingchefeiyong: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          sfsh: [
          ],
          shhf: [
          ],
          ispay: [
          ],
        },
      };
    },
    computed: {


        tingchefeiyong:{
            get: function () {
                return 1*this.ruleForm.xiaoshidanjia*this.ruleForm.tingcheshizhang
            }
        },

    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.lichangshijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='tingchechangmingcheng'){
              this.ruleForm.tingchechangmingcheng = obj[o];
              this.ro.tingchechangmingcheng = true;
              continue;
            }
            if(o=='quyu'){
              this.ruleForm.quyu = obj[o];
              this.ro.quyu = true;
              continue;
            }
            if(o=='cheweibianhao'){
              this.ruleForm.cheweibianhao = obj[o];
              this.ro.cheweibianhao = true;
              continue;
            }
            if(o=='cheweimingcheng'){
              this.ruleForm.cheweimingcheng = obj[o];
              this.ro.cheweimingcheng = true;
              continue;
            }
            if(o=='cheweileixing'){
              this.ruleForm.cheweileixing = obj[o];
              this.ro.cheweileixing = true;
              continue;
            }
            if(o=='cheweiweizhi'){
              this.ruleForm.cheweiweizhi = obj[o];
              this.ro.cheweiweizhi = true;
              continue;
            }
            if(o=='xiaoshidanjia'){
              this.ruleForm.xiaoshidanjia = obj[o];
              this.ro.xiaoshidanjia = true;
              continue;
            }
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              this.ro.yonghuzhanghao = true;
              continue;
            }
            if(o=='xingming'){
              this.ruleForm.xingming = obj[o];
              this.ro.xingming = true;
              continue;
            }
            if(o=='shouji'){
              this.ruleForm.shouji = obj[o];
              this.ro.shouji = true;
              continue;
            }
            if(o=='touxiang'){
              this.ruleForm.touxiang = obj[o].split(",")[0];
              this.ro.touxiang = true;
              continue;
            }
            if(o=='chepaihao'){
              this.ruleForm.chepaihao = obj[o];
              this.ro.chepaihao = true;
              continue;
            }
            if(o=='jinchangshijian'){
              this.ruleForm.jinchangshijian = obj[o];
              this.ro.jinchangshijian = true;
              continue;
            }
            if(o=='lichangshijian'){
              this.ruleForm.lichangshijian = obj[o];
              this.ro.lichangshijian = true;
              continue;
            }
            if(o=='tingcheshizhang'){
              this.ruleForm.tingcheshizhang = obj[o];
              this.ro.tingcheshizhang = true;
              continue;
            }
            if(o=='tingchefeiyong'){
              this.ruleForm.tingchefeiyong = obj[o];
              this.ro.tingchefeiyong = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('chezilichang/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

          this.ruleForm.tingchefeiyong = this.tingchefeiyong
        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('chezilichang/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('chezilichang/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('chezilichang/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      touxiangUploadChange(fileUrls) {
          this.ruleForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 15px;
	  color: #2886bc;
	  font-weight: 500;
	  width: 150px;
	  font-size: 16px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  border-radius: 30px;
	  padding: 0 10px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  width: 350px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  border-radius: 30px;
	  padding: 0 10px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  width: 350px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  border-radius: 30px;
	  padding: 0 10px 0 30px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #2886bc;
	  width: 350px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #666;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #666;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #666;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #666;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ddd;
	  border-radius: 30px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  width: 350px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
