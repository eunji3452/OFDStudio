
    $( '#bgVideo' ).YTPlayer();

    let filters = {
        grayscale : 80,
        sepia : 20,
        opacity : 90
      }
      jQuery('#bgVideo').YTPApplyFilters(filters)




    //   schedule

    // api
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.55007564955231, 126.92208312589833), //지도의 중심좌표.37.55007564955231, 126.92208312589833
  level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

