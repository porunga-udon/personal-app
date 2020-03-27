$(function(){
  
      function buildHTML(message,current_user_name){
        if ( message.image ) {
          if (message.user_name == current_user_name) {
            var html =`
              <div class="message__mine">
                <div class="message__mine__index">
                  <div class="message__mine__index__name">
                    ${message.user_name}
                  </div>
                  <div class="message__mine__index__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="message__mine__low">
                  <p class="message__mine__text">
                    ${message.content}
                  </p>
                  <img src=${message.image}>
                </div>
              </div>`
            return html;
          } else {
            var html =`
              <div class="message__member">
                <div class="message__member__index">
                  <div class="message__member_index__name">
                    ${message.user_name}
                  </div>
                  <div class="message__member__index__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="message__member__low">
                  <p class="message__member__text">
                    ${message.content}
                  </p>
                  <img src=${message.image}>
                </div>
              </div>`
            return html;
          }
        } else {
          if (message.user_name == current_user_name) {
            var html =`
              <div class="message__mine">
                <div class="message__mine__index">
                  <div class="message__mine__index__name">
                    ${message.user_name}
                  </div>
                  <div class="message__mine__index__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="message__mine__low">
                  <p class="message__mine__text">
                    ${message.content}
                  </p>
                </div>
              </div>`
            return html;
          } else {
            var html =`
              <div class="message__member">
                <div class="message__member__index">
                  <div class="message__member_index__name">
                    ${message.user_name}
                  </div>
                  <div class="message__member__index__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="message__member__low">
                  <p class="message__member__text">
                    ${message.content}
                  </p>
                  <img src=${message.image}>
                </div>
              </div>`
            return html;
          }
        };
      }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var current_user_name = $('.current_user_name').val();
      var html = buildHTML(data,current_user_name);
      $('.messages').append(html);      
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.form__submit').prop('disabled', false);
    });
  })

});