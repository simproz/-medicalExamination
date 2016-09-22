
$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
})
// 通过名称选取标签页
$('#myTab a[href="#profile"]').tab('show');

// 选取第一个标签页
$('#myTab a:first').tab('show');

// 选取最后一个标签页
$('#myTab a:last').tab('show');

// 选取第三个标签页（从 0 开始索引）
$('#myTab li:eq(2) a').tab('show');

var app = angular.module("myApp",[]);

/*$(function () {
	$('#myTab li:eq(1) a').tab('show');
});*/
/*	app.directive("radioName",function(){
	return {
		restrict:'E',
		scope: {  
       		'item': '=answers'  
    	},  
    	template:'<input type="radio" ng-model="item" ng-value="item">{{item}}</input>',  
		link: function(scope, elm, iAttrs, ngModelCtr) {
			 //elm.name="11";
		}
	}
});*/

app.filter("optionFilter",function(){
	return function(input){
		//console.log(input);
		return input.slice(0,1);
	}
});

app.controller("appController",function($scope){
	var i = $("[name=quaz]").val();
	
	var answers = $scope.answers = [{
		"id":"q1",
		"question":"继发性腹膜炎毒性强的原因主要是因为感染菌为2003",
		"options":["金黄色葡萄球菌","溶血性链球菌","大肠杆菌","绿脓杆菌"],
		"answer":"C",
		"select":"",
		"result":false
	},{
		"id":"q2",
		"question":"股骨头的主要血液供应来源是2001",
		"options":["旋股内、外侧动脉的分支","股圆韧带内的小凹动脉","股骨干的滋养动脉升支","闭孔动脉","阴部内、外动脉"],
		"answer":"A",
		"select":"",
		"result":false
	},{
		"id":"q3",
		"question":"某再生障碍性贫血病人，出现高热，伴抽搐，此时，最合适的降温措施是",
		"options":["温水擦浴","酒精擦浴","冰水灌肠","口服退热剂","头部及大血管处放置冰袋"],
		"answer":"E",
		"select":"",
		"result":false
	},{
		"id":"q4",
		"question":"某孕妇，第1胎，妊娠39周来院检查，医生告之临产先兆，收住院，最可靠的依据是",
		"options":["宫缩强度增加","胎儿下降感","见红","上腹部舒适感","尿频"],
		"answer":"C",
		"select":"",
		"result":false
	},{
		"id":"q5",
		"question":"脆弱拟杆菌感染是",
		"options":["无臭的黄色稠厚脓液","脓液稀薄，呈淡红色，量较多","脓液稠厚有粪臭味","脓液呈淡绿色有甜腥味","脓液呈淡绿色有甜腥味"],
		"answer":"E",
		"select":"",
		"result":false
	}];
	$.each($scope.answers,function(one){
		var opts = answers[one].options;
		for(i=0;i<opts.length;i++){
			opts[i] = String.fromCharCode(65+i)+"、"+opts[i];
		}
	});
	$scope.showName = function(){
		if(!confirm("确认提交吗？")){
			return;
		}
		//console.log(answers);
		$.each($scope.answers,function(one){
			var opts = answers[one];
			if(opts.answer!=opts.select){
				opts.result=true;
			}else{
				opts.result=false;
			}
		})
	};
});

