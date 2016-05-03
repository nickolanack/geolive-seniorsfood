if(window.Cluster){
Cluster.Symbol=ClusterSymbol;
ClusterSymbol.IconScale=function(sum){
   return 30+(5*Math.log2(sum));
};
ClusterSymbol.IconStyle=function(name){
   //expect to be bound to ClusterSymbol object
   if(name=="hover"){

      return {
			path: google.maps.SymbolPath.CIRCLE,
			fillColor:"rgb(0,160,80)",
			fillOpacity:0.7,
			strokeWeight:2.5,
			strokeColor:"rgb(0,160,80)",
			labelOrigin:google.maps.Point(0, 0)
      };


   }else{
   

      return {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor:"rgb(0,160,80)",
		fillOpacity:0.4,
		strokeWeight:2.5,
		strokeColor:"rgb(0,0,0)",
		labelOrigin:google.maps.Point(0, 0)

	};

   }

};
}else{
    setTimeout(start,100);
}