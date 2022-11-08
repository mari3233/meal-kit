//  d31f9e3a7bf0f40b7f3966b0c640976f


  //카카오맵
  //34.801975434693986 
  // 126.40618114891704 
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(34.801975434693986 , 126.40618114891704 ), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 