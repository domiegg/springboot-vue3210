<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"borderRadius":"6px","width":"93%","padding":"30px"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="140px"
		>
			<template >
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="停车场名称" prop="tingchechangmingcheng">
					<el-input v-model="ruleForm.tingchechangmingcheng" placeholder="停车场名称" clearable  :readonly="ro.tingchechangmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="停车场名称" prop="tingchechangmingcheng">
					<el-input v-model="ruleForm.tingchechangmingcheng" placeholder="停车场名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="区域" prop="quyu">
					<el-select :disabled="ro.quyu" v-model="ruleForm.quyu" placeholder="请选择区域" >
						<el-option
							v-for="(item,index) in quyuOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="区域" prop="quyu">
					<el-input v-model="ruleForm.quyu"
						placeholder="区域" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'" label="车位编号" prop="cheweibianhao">
					<el-input v-model="ruleForm.cheweibianhao" placeholder="车位编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.cheweibianhao" label="车位编号" prop="cheweibianhao">
					<el-input v-model="ruleForm.cheweibianhao" placeholder="车位编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="车位名称" prop="cheweimingcheng">
					<el-input v-model="ruleForm.cheweimingcheng" placeholder="车位名称" clearable  :readonly="ro.cheweimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="车位名称" prop="cheweimingcheng">
					<el-input v-model="ruleForm.cheweimingcheng" placeholder="车位名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="车位类型" prop="cheweileixing">
					<el-select :disabled="ro.cheweileixing" v-model="ruleForm.cheweileixing" placeholder="请选择车位类型" >
						<el-option
							v-for="(item,index) in cheweileixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="车位类型" prop="cheweileixing">
					<el-input v-model="ruleForm.cheweileixing"
						placeholder="车位类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="upload" v-if="type!='info' && !ro.cheweitupian" label="车位图片" prop="cheweitupian">
					<file-upload
						tip="点击上传车位图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.cheweitupian?ruleForm.cheweitupian:''"
						@change="cheweitupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="upload" v-else-if="ruleForm.cheweitupian" label="车位图片" prop="cheweitupian">
					<img v-if="ruleForm.cheweitupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.cheweitupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.cheweitupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="车位位置" prop="cheweiweizhi">
					<el-input v-model="ruleForm.cheweiweizhi" placeholder="车位位置" clearable  :readonly="ro.cheweiweizhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="车位位置" prop="cheweiweizhi">
					<el-input v-model="ruleForm.cheweiweizhi" placeholder="车位位置" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="车位状态" prop="cheweizhuangtai">
					<el-select :disabled="ro.cheweizhuangtai" v-model="ruleForm.cheweizhuangtai" placeholder="请选择车位状态" >
						<el-option
							v-for="(item,index) in cheweizhuangtaiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="车位状态" prop="cheweizhuangtai">
					<el-input v-model="ruleForm.cheweizhuangtai"
						placeholder="车位状态" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="小时单价" prop="xiaoshidanjia">
					<el-input v-model="ruleForm.xiaoshidanjia" placeholder="小时单价" clearable  :readonly="ro.xiaoshidanjia"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="小时单价" prop="xiaoshidanjia">
					<el-input v-model="ruleForm.xiaoshidanjia" placeholder="小时单价" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' class="textarea" v-if="type!='info'" label="车位详情" prop="cheweixiangqing">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="车位详情"
					  v-model="ruleForm.cheweixiangqing" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"width":"100%","margin":"0 0 20px 0","display":"inline-block"}' v-else-if="ruleForm.cheweixiangqing" label="车位详情" prop="cheweixiangqing">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}'>{{ruleForm.cheweixiangqing}}</span>
				</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"40px","background":"rgba(27, 167, 166, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid rgba(27, 167, 166, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(27, 167, 166, 1)","borderRadius":"40px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid rgba(27, 167, 166, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"rgba(27, 167, 166, 1)","borderRadius":"40px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
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
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				cheweixiangqing: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
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
							this.ruleForm.cheweitupian = obj[o];
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
				








				this.ruleForm.cheweizhuangtai='可使用'


			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.quyuOptions = "A区,B区,C区,D区".split(',')
            this.$http({
				url: `option/cheweifenlei/cheweileixing`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.cheweileixingOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.cheweizhuangtaiOptions = "已使用,可使用".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `cheweixinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {












	if(this.ruleForm.cheweitupian!=null) {
		this.ruleForm.cheweitupian = this.ruleForm.cheweitupian.replace(new RegExp(this.$base.url,"g"),"");
	}









var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "cheweixinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `cheweixinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.cheweixinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `cheweixinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.cheweixinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
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
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.cheweixinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    cheweitupianUploadChange(fileUrls) {
	    this.ruleForm.cheweitupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  width: 140px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 140px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 300px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
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
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
