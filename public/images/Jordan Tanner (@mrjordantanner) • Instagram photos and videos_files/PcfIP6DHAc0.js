;/*FB_PKG_DELIM*/

__d("LSDeleteThenInsertIgThreadLabel",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(318).put({threadKey:a[0],labelType:a[1],labelTimestampMs:a[2]})},function(a){return b.resolve(c)}])}e.exports=a}),null);