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

app.filter("selectFilter",function(){
	return function(input){
		//console.log(input);
		return input.select==undefined?"glyphicon glyphicon-unchecked":"glyphicon glyphicon-check";
	}
});

app.controller("appController",function($scope){
	var i = $("[name=quaz]").val();
	
	var answers_s = $scope.answers_s = [{
		"question":"继发性腹膜炎毒性强的原因主要是因为感染菌为2003",
		"options":["金黄色葡萄球菌","溶血性链球菌","大肠杆菌","绿脓杆菌"],
		"answer":"C",
	},{
		"question":"股骨头的主要血液供应来源是2001",
		"options":["旋股内、外侧动脉的分支","股圆韧带内的小凹动脉","股骨干的滋养动脉升支","闭孔动脉","阴部内、外动脉"],
		"answer":"A",
	},{
		"question":"某再生障碍性贫血病人，出现高热，伴抽搐，此时，最合适的降温措施是",
		"options":["温水擦浴","酒精擦浴","冰水灌肠","口服退热剂","头部及大血管处放置冰袋"],
		"answer":"E",
	},{
		"question":"某孕妇，第1胎，妊娠39周来院检查，医生告之临产先兆，收住院，最可靠的依据是",
		"options":["宫缩强度增加","胎儿下降感","见红","上腹部舒适感","尿频"],
		"answer":"C",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	},{
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
	}];
	
	//初始化数据
	var init = (function(){
		$.each(answers_s,function(index,answer){
			var opts = answer.options;
			for(i=0;i<opts.length;i++){
				opts[i] = String.fromCharCode(65+i)+"、"+opts[i];
			}
			//console.log(index);
			answer["id"]=(index+1);
			answer["select"]=undefined;
			answer["result"]=false;
		});
		//console.log(answers_s);
	})();
	
	//初始化首页10条数据
	var answers = $scope.answers= (function(){
		return answers_s.slice(0,10);
	})();
	//翻页初始化变量
	var page = $scope.page = {
		pageNow:1
	}
	//翻页
	var changePage = $scope.changePage = function(pageNum){
		//console.log(pageNum);
		//console.log(answers_s);
		var changes = answers_s.slice((pageNum-1)*10,10*pageNum);
		//console.log(changes);
		page.pageNow = pageNum;
		$scope.answers = changes;
	
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
		passNum:0,
		score:0
	}
	//提交
	$scope.commit = function(){
		if(examResult.passNum!=0){
			return;
		}
		if(!confirm("确认提交吗？")){
			return;
		}
		//console.log(answers);
		$.each($scope.answers_s,function(one){
			var opts = answers_s[one];
			if(opts.answer!=opts.select){
				opts.result=true;
			}else{
				examResult.passNum++;
				opts.result=false;
			}
		});
		examResult.score = examResult.passNum*2;
		//alert("本次考试得分："+examResult.score);
	};

});

