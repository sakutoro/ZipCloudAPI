$(function () {

    // 検索がクリックされたら  
    $("#search-btn").on("click",function() {
        // 入力欄の中身取る
        let text = $("#search-word").val();
        console.log(text);

        $.ajax({
            // 郵便番号のAPIにリクエスト通信
            url: "http://zipcloud.ibsnet.co.jp/api/search",
            type:"GET",
            dataType:"jsonp",
            data: {
                zipcode: text,
            }
        }).done( (data) => {
            console.log(data);
            
            for(item of data.results) {
                // 県のパス
                let ken = item.address1;
                // 市町村
                let mati= item.address2;
                // 住所
                let name = item.address3;
                console.log(name);

                // 検索結果の所に表示
                $("#prefecture").text(ken);
                $("#city").text(mati);
                $("#address").text(name);
                
            }

            // let kan = data.results.address1;
            // $("#prefecture").text(kan);
            // console.log(kan);

            // console.log(item);
            console.log(data.results);


        }).fail( (data) => {

        })


    })

})