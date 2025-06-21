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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}'  label="区域" prop="quyu">
            <el-select v-model="ruleForm.quyu" placeholder="请选择区域"  >
              <el-option
                  v-for="(item,index) in quyuOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位编号" prop="cheweibianhao">
              <el-input v-model="ruleForm.cheweibianhao" placeholder="车位编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位名称" prop="cheweimingcheng">
            <el-input v-model="ruleForm.cheweimingcheng" 
                placeholder="车位名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}'  label="车位类型" prop="cheweileixing">
            <el-select v-model="ruleForm.cheweileixing" placeholder="请选择车位类型"  >
              <el-option
                  v-for="(item,index) in cheweileixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位图片" v-if="type!='cross' || (type=='cross' && !ro.cheweitupian)" prop="cheweitupian">
            <file-upload
            tip="点击上传车位图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.cheweitupian?ruleForm.cheweitupian:''"
            @change="cheweitupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' class="upload" v-else label="车位图片" prop="cheweitupian">
                <img v-if="ruleForm.cheweitupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.cheweitupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.cheweitupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位位置" prop="cheweiweizhi">
            <el-input v-model="ruleForm.cheweiweizhi" 
                placeholder="车位位置" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}'  label="车位状态" prop="cheweizhuangtai">
            <el-select v-model="ruleForm.cheweizhuangtai" placeholder="请选择车位状态"  >
              <el-option
                  v-for="(item,index) in cheweizhuangtaiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="小时单价" prop="xiaoshidanjia">
            <el-input v-model="ruleForm.xiaoshidanjia" 
                placeholder="小时单价" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)"}' label="车位详情" prop="cheweixiangqing">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="车位详情"
              v-model="ruleForm.cheweixiangqing">
            </el-input>
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
            cheweitupian : false,
            cheweiweizhi : false,
            cheweizhuangtai : false,
            xiaoshidanjia : false,
            cheweixiangqing : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          tingchechangmingcheng: '',
          quyu: '',
          cheweibianhao: this.getUUID(),
          cheweimingcheng: '',
          cheweileixing: '',
          cheweitupian: '',
          cheweiweizhi: '',
          cheweizhuangtai: '可使用',
          xiaoshidanjia: '',
          cheweixiangqing: '',
        },
        quyuOptions: [],
        cheweileixingOptions: [],
        cheweizhuangtaiOptions: [],
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
          cheweitupian: [
          ],
          cheweiweizhi: [
          ],
          cheweizhuangtai: [
          ],
          xiaoshidanjia: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          cheweixiangqing: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
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
            if(o=='cheweitupian'){
              this.ruleForm.cheweitupian = obj[o].split(",")[0];
              this.ro.cheweitupian = true;
              continue;
            }
            if(o=='cheweiweizhi'){
              this.ruleForm.cheweiweizhi = obj[o];
              this.ro.cheweiweizhi = true;
              continue;
            }
            if(o=='cheweizhuangtai'){
              this.ruleForm.cheweizhuangtai = obj[o];
              this.ro.cheweizhuangtai = true;
              continue;
            }
            if(o=='xiaoshidanjia'){
              this.ruleForm.xiaoshidanjia = obj[o];
              this.ro.xiaoshidanjia = true;
              continue;
            }
            if(o=='cheweixiangqing'){
              this.ruleForm.cheweixiangqing = obj[o];
              this.ro.cheweixiangqing = true;
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
        this.quyuOptions = "A区,B区,C区,D区".split(',')
        this.$http.get('option/cheweifenlei/cheweileixing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.cheweileixingOptions = res.data.data;
          }
        });
        this.cheweizhuangtaiOptions = "已使用,可使用".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('cheweixinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

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
                 this.$http.get('cheweixinxi/list', {
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


                          this.$http.post('cheweixinxi/add', this.ruleForm).then(res => {
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


                  this.$http.post('cheweixinxi/add', this.ruleForm).then(res => {
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
      cheweitupianUploadChange(fileUrls) {
          this.ruleForm.cheweitupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
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
