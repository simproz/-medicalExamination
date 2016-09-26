function start(){
	$("#exams").click();
}

var app = angular.module("myApp",[]);

app.filter("optionFilter",function(){
	return function(input){
		//console.log(input);
		return input.slice(0,1);
	}
});


app.controller("appController",function($scope){
	
	var data = [
{"question":"癌性发热属于哪种热型","options":["稽留热","弛张热","间歇热","不规则热"],"answer":"D"},
{"question":"下列哪项不是温水擦浴的禁忌部位","options":["胸前区","腹部","足底","颈部两侧"],"answer":"D"},
{"question":"0.1ml青霉素皮试的试验液含青霉素（）单位","options":["20-50","200-500","40-60","400-600"],"answer":"A"},
{"question":"患者需要输入100ml液体，计划2小时输完，所用输液器滴定系数为20，求每分钟滴数（）","options":["16","20","26","30"],"answer":"A"},
{"question":"免疫性溶血性贫血的患者需要输什么血制品（）","options":["浓缩红细胞","洗涤红细胞","红细胞悬液","血小板"],"answer":"B"},
{"question":"下列哪项不是输血的“三查”（）","options":["血液的有效期","输血装置是否完好","血液的种类","血液的质量"],"answer":"C"},
{"question":"最常见的输血反应为（）","options":["过敏反应","发热反应","溶血反应","循环负荷过重"],"answer":"B"},
{"question":"心三联不包括（ ）","options":["利多卡因","肾上腺素","阿托品","多巴胺"],"answer":"D"},
{"question":"胸外心脏按压的频率（ ）次/分","options":["70-80","80-90","80-100","100-120"],"answer":"C"},
{"question":"缺铁性贫血的病因有","options":["铁需要量增加而摄入量不足","铁吸收不良","铁丢失过多","以上都是"],"answer":"D"},
{"question":"再生障碍性贫血的主要临床表现为","options":["进行性贫血","出血","感染","以上都是"],"answer":"D"},
{"question":"使用环磷酰胺易引起（ ），所以要指导患者多饮水并注意观察尿量及颜色，并使用美司那","options":["急性肾炎","急性膀胱炎","出血性肾炎","出血性膀胱炎"],"answer":"D"},
{"question":"骨髓穿刺术后指导病人（ ）小时不要弄湿穿刺处","options":["12-24","24-36","36-48","48-72"],"answer":"D"},
{"question":"鞘内注射化疗药后应嘱病人平卧","options":["4-6","6-8","2-4","8-10"],"answer":"A"},
{"question":"特发性血小板减少性紫癜的治疗首选","options":["磺胺类","糖皮质激素","安络血","环孢素"],"answer":"B"},
{"question":"对多发性骨髓瘤的健康指导下列哪项是错误的","options":["病人易出现病理性骨折，故应卧床休息，应使用软床垫；","应注意劳逸结合，要避免过度劳累、做剧烈运动；","适度活动可促进肢体血液循环和血钙在骨骼的沉积，减轻骨骼的脱钙；","注意预防感染，一旦出现发热或活动后出现剧烈疼痛，应及时就诊。"],"answer":"A"},
{"question":"（ ）是淋巴瘤确诊和分型的主要依据","options":["淋巴结活检","外周血象","骨髓穿刺","胸腹部CT"],"answer":"A"},
{"question":"DIC休克病人根据病情应取（ ）位","options":["A中凹位","平卧位","半坐卧位","侧卧位"],"answer":"A"},
{"question":"某急性白血病病人，经治疗后在缓解期出现头痛、恶心、呕吐、视力障碍、 瞳孔改变。最可能发生","options":["脑血栓形成","中枢神经系统感染","颅内出血","脑膜白血病"],"answer":"C"},
{"question":"下列哪一项是多发性骨髓瘤的突出症状是","options":["骨骼疼痛","病理性骨折","广泛性出血","反复感染","肝、脾肿大"],"answer":"A"},
{"question":"异环磷酰胺主要不良反应为","options":["心肌损害","肝脏损害","出血性膀胱炎","消化道反应"],"answer":"C"},
{"question":"某白血病病人需要进行化疗，为预防其不良反应，护理措施不妥的是","options":["鞘内注药后应补足水分","末梢神经炎给维生素B","尿酸性肾病服碳酸氢钠","出血性膀胱炎应补足水分"],"answer":"A"},
{"question":"白血病化疗期间口服别嘌呤醇的目的是","options":["抑制尿素的合成","加强化疗药的疗效","抑制尿酸的合成","加强尿酸的排泄"],"answer":"C"},
{"question":"血液病由于粒细胞减少而感染，首要护理诊断","options":["有窒息的危险","有感染的危险","呼吸型态改变","气体交换受阻"],"answer":"B"},
{"question":"最严重的输血反应是","options":["溶血反应","发热反应","过敏反应","循环负荷过重"],"answer":"A"},
{"question":"对发热的血液病人护理措施不妥的是","options":["降温措施主要是乙醇擦浴","体温超过38.5℃应降温","每日液体入量在3000ml左右","给高蛋白、高热量、高维生素饮食"],"answer":"A"},
{"question":"下列哪一项不符合多发性骨髓瘤的是","options":["高钙血症","高粘滞血症","高尿酸血症","高白蛋白血症"],"answer":"D"},
{"question":"成人的主要造血器官是","options":["骨髓","肝","脾","淋巴结"],"answer":"A"},
{"question":"贫血的定义是指单位容积的外周血液中","options":["循环血容量低于正常低限","红细胞数和红细胞比容低于正常","红细胞数、血红蛋白量和／或红细胞比容低于正常"],"answer":"D"},
{"question":"贫血时病人皮肤及粘膜苍白，检查较为可靠的部位是","options":["面颊、皮肤及上腭粘膜","耳轮皮肤及口腔粘膜","颈部皮肤及舌面","手掌皮肤、睑结合膜、口唇及指甲"],"answer":"D"},
{"question":"急性白血病出血的主要原因是","options":["感染","白血病细胞浸润","血小板减少","免疫下降"],"answer":"C"},
{"question":"急性白血病的主要临床表现有","options":["贫血，发热，出血，肝、牌和淋巴结肿大","贫血，出血，肝、牌和淋巴 结肿大，肾功能衰竭","贫血，发热，肝、脾和淋巴 结肿大，蛋白尿","发热，出血，肝、牌和淋巴结肿大"],"answer":"A"},
{"question":"患者，女性，24岁，确诊为慢性粒细胞白血病3年余。目前贫血、出血明显加重，脾迅速肿大.护士为其提供的护理措施中，不妥的是","options":["适当限制活动，预防各种创伤","尽量减少肌肉注射","保持鼻黏膜湿润，清除鼻腔内血痂","摄入高蛋白、高维生素、高纤维素、易消化饮食"],"answer":"C"},
{"question":"血液病预防感染的护理措施哪项不妥","options":["病室定期紫外线消毒","加强营养,提高机体抵抗力","多探视给予心理支持","定时洗澡、换衣、漱口"],"answer":"C"},
{"question":"男性，10岁，阵发性腹痛伴发热，便血3日，两下肢皮肤瘀点呈对称性分布，两膝和踝关节轻度肿胀，活动受限、腹软、右下腹有压痛无反跳痛，血红蛋白120ｇ／L、白细胞11×10９／L，血小板100×10９／L，尿蛋白（+），红细胞（+），凝血时间正常，最可能是","options":["急性阑尾炎","肾小球肾炎","特发性血小板减少性紫癜","过敏性紫癜"],"answer":"D"},
{"question":"输血时，错误的护理措施是","options":["输血时，护士严格按操作规程执行","输入浓缩红细胞时，可用生理盐水稀释．","血制品不能加温输入","取血后必须放置一段时间再输入"],"answer":"B"},
{"question":"在我国贫血的诊断标准为","options":["男：Hb＜160g/L，女：Hb＜140g/L","男：Hb＜140g/L，女：Hb＜130g/L","男：Hb＜130g/L，女：Hb＜120g/L","男：Hb＜120g/L，女：Hb＜110g/L"],"answer":"B"},
{"question":"国内按贫血的程度将贫血分为轻度，中度，重度和极度,其中重度贫血为","options":["Hb ＞90g/L","Hb＞60 - 90g/L","Hb＞30 - 60g/L","Hb＜30g/L"],"answer":"B"},
{"question":"下列哪种疾病常有贫血和脾肿大，除外","options":["白血病","恶性组织病","再生障碍性贫血","慢性溶血性贫血"],"answer":"C"},
{"question":"ITP的主要出血部位是","options":["皮肤与粘膜","内脏","肌肉","颅内"],"answer":"A"},
{"question":"护理白血病化疗病人的措施，正确的有","options":["化疗药液必须现用现配","呕吐后鼓励进食","严密监测血象变化","有明显脱发者应暂停化疗","患者常有呕吐，故应少饮"],"answer":["A","B","C"]},
{"question":"输血可引起下列哪些反应","options":["发热反应","溶血反应","过敏反应","传播爱滋病、病毒性 肝炎等疾病","细菌污染血液引起菌血症"],"answer":["A","B","C","D","E"]},
{"question":"出血性疾病病人在急性出血时的护理措施","options":["病人常有恐惧和紧张情绪，应予安慰","给予哌替啶镇静","准备一切抢救用品","密切观察出血情况","嘱病人绝对卧床休息"],"answer":["A","C","D","E"]},
{"question":"下列关于口腔、牙龈出血的护理措施正确的有","options":["定时用氯己定或苏打水漱口液漱口","牙龈渗血时，可用肾上腺素棉球或明胶海绵片敷于齿龈","牙龈渗血时，可局部涂抹凝血酶粉剂、云南白药等止血","口腔内有陈旧血块时，会引起口臭，影响食欲，应该用牙刷、牙签清理干净","患者进餐前可用1％过氧化液体漱口"],"answer":["A","B","C","E"]},
{"question":"血液病患者出现下列哪些临床表现，提示患者出现了颅内出血","options":["突然剧烈头痛","喷射性呕吐","视力模糊","头晕","昏迷"],"answer":["A","B","C","D","E"]}
];
	//初始化随机排序
	var initData = function(data){
		var answerTmp = new Array();
		$.each(data,function(i){
			if(i<40){
				var index = Math.floor(Math.random()*(40-answerTmp.length));
				answerTmp[i] = data[index];
				data.splice(index,1);
			}else{
				var index = Math.floor(Math.random()*(45-answerTmp.length));
				answerTmp[i] = data[index];
				data.splice(index,1);
			}
		});
		return answerTmp;
		console.log(answerTmp);
	}

	var answerA_s = $scope.answerA_s = initData(data);

	//初始化数据
	var init = (function(){
		//选项前添加A、B、C、D
		$.each(answerA_s,function(index,answer){
			var opts = answer.options;
			for(i=0;i<opts.length;i++){
				opts[i] = String.fromCharCode(65+i)+"、"+opts[i];
			}
			answer["id"]=(index+1);
			answer["select"]={};
			answer["result"]=false;
		});
	})();
	
	//初始化首页10条数据
	var answersA = $scope.answersA= (function(){
		return answerA_s.slice(0,10);
	})();
	//翻页初始化变量
	var page = $scope.page = {
		pageNow:1
	}
	//翻页
	var changePage = $scope.changePage = function(pageNum){
		//console.log(pageNum);
		//console.log(answers_s);
		var changes = answerA_s.slice((pageNum-1)*10,10*pageNum);
		//console.log(changes);
		page.pageNow = pageNum;
		$scope.answersA = changes;
	
	}
	//向前翻页
	$scope.prePage = function(pageNow){
		if(pageNow>1){
			changePage(pageNow-1);
		}
	}
	//向后翻页
	$scope.nextPage = function(pageNow){
		if(pageNow>0 && pageNow<5){
			changePage(pageNow+1);
		}
	}
	//得分情况
	var examResult = $scope.examResult = {
		passA:0,
		passB:0,
		score:0
	}
	//提交
	$scope.commit = function(){
		if(examResult.passA!=0 || examResult.passB!=0){
			$("#myModal").modal("show");
			return;
		}
		if(!confirm("确认提交吗？")){
			return;
		}

		$.each($scope.answerA_s,function(one){
			var opts = answerA_s[one];
			var answer = opts.answer;
			var select = opts.select;
			
			if(answer.length==1){
				//单项选择	
				if(answer == select){
					examResult.passA++;
					opts.result=false;
				}else{
					opts.result=true;
				}
			}else{
				//多项选择
				var tmp = new Array();
				if(select.s0==true){
					tmp.push("A");
				}
				if(select.s1==true){
					tmp.push("B");
				}
				if(select.s2==true){
					tmp.push("C");
				}
				if(select.s3==true){
					tmp.push("D");
				}
				if(select.s4==true){
					tmp.push("E");
				}
				if(tmp.sort().toString() == answer.sort().toString()){
					examResult.passB++;
					opts.result=false;
				}else{
					opts.result=true;
				}
			}
		});
		examResult.score = examResult.passA*2 + examResult.passB*4;
		//alert("本次考试得分："+examResult.score);
		$("#myModal").modal("show");
	};

});

