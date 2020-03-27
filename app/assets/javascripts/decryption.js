$(function() {

  // 解読プロトコル配列
  var input_decryption = [];
  // 解読プロトコル[d,e,c,r,y,p,t,i,o,n]
  var decryption_cmd = [68,69,67,82,89,80,84,73,79,78];
  
  // 開発用 dec
  var decryption_cmd = [68,69,67];
  
  // ----------------解読結果----------------------
  function buildHTML(decryption) {
    var result_html = `
                      <div class="result">
                        <div class="result__title">
                          解読結果
                        </div>
                        <div class="result__text">
                          ${decryption.content}
                        </div>
                        <div class="result__exit">
                          <a href="#" class="result__exit__btn">閉じる</a>
                        </div>
                      </div>`;
    return result_html;
  }

  // ---------------解読プロトコル-----------------
  $(window).keyup(function(event) {
    input_decryption.push(event.keyCode);
    if ( input_decryption[ input_decryption.length - 1 ] != decryption_cmd[ input_decryption.length - 1 ] ){
      // コマンド失敗
      input_decryption = [];
    } else if (input_decryption.length == decryption_cmd.length){
      // コマンド成功
      if($("#modal-overlay")[0]) return false ;
      $('.decryption').fadeIn("slow");
      $('.modal-overlay').fadeIn("slow");
      // 解読
      $('#decryption_form').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $('#decryption_form').attr('action');
        $('.decryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $.ajax({
          type: 'POST',
          url: url,
          data:formData,
          dataType: 'json',
          processData: false,
          contentType: false
        })
        .done(function(data) {
          var result_html = buildHTML(data);
          $('.body').append(result_html); 
          $('.result__exit__btn').click(function(){
            $('.modal-overlay').fadeOut("slow");
            $('.result').fadeOut("slow");
            $('.decryption__form__text').val('');
            $('.decryption__form__key').val('');
            input_decryption = [];
          })
        })
        .fail(function() {
          alert('error');
        });
        input_decryption = [];
      })
      // 閉じる
      $('.decryption__btn__no').click(function(e){
        e.preventDefault();
        $('.decryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $('.decryption__form__text').val('');
        $('.decryption__form__key').val('');
        input_decryption = [];
      })
      $('.modal-overlay').click(function(e){
        e.preventDefault();
        $('.decryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $('.decryption__form__text').val('');
        $('.decryption__form__key').val('');
        input_decryption = [];
      })
    }
  })
});
