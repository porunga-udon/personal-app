$(function(){
  // 暗号プロトコル配列
  var input_encryption = [];
  // 暗号プロトコル[e,n,c,r,y,p,t,i,o,n]
  // var encryption_cmd = [69,78,67,82,89,80,84,73,79,78];

  // 開発用
  var encryption_cmd = [69,78,67];

  // --------------暗号送信---------------------
  function buildHTML(encryption) {
    var encryption_html = `
                          <div class="message__mine">
                            <div class="message__mine__index">
                              <div class="message__mine__index__name">
                                ${encryption.user_name}
                              </div>
                              <div class="message__mine__index__date">
                                ${encryption.created_at}
                              </div>
                            </div>
                            <div class="message__mine__low">
                              <p class="message__mine__text">
                                ${encryption.content}
                              </p>
                            </div>
                          </div>`;
    return encryption_html;
  }

  // 暗号コマンド
  $(window).keyup(function(e) {
    input_encryption.push(e.keyCode);
    if ( input_encryption[ input_encryption.length - 1 ] != encryption_cmd[ input_encryption.length - 1 ] ){
      // コマンド失敗
      input_encryption = [];
    } else if (input_encryption.length == encryption_cmd.length){
    // コマンド成功
      if($("#modal-overlay")[0]) return false ;
      $('.encryption').fadeIn("slow");
      $('.modal-overlay').fadeIn("slow");
      // 実行ボタン
      $('#encryption_form').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $('#encryption_form').attr('action');
        $('.encryption').fadeOut("slow");
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
          var encryption_html = buildHTML(data);
          $('.messages').append(encryption_html); 
          $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
          $('.encryption__form__text').val('');
          $('.encryption__form__code').val('');
          input_encryption = [];
        })
        .fail(function() {
          alert('error');
        });
        input_encryption = [];
      })
      // 閉じる
      $('.encryption__btn__no').click(function(e){
        e.preventDefault();
        $('.encryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $('.encryption__form__text').val('');
        $('.encryption__form__code').val('');
        input_encryption = [];
      })
      $('.modal-overlay').click(function(e){
        e.preventDefault();
        $('.encryption').fadeOut("slow");
        $('.modal-overlay').fadeOut("slow");
        $('.encryption__form__text').val('');
        $('.encryption__form__code').val('');
        input_encryption = [];
      })
    }
  })
})