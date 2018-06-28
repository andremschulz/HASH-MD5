
;(function () {
  'use strict'

  var input = document.getElementById('input')
  document.getElementById('calculate').addEventListener(
    'click',
    function (event) {
      event.preventDefault()
      document.getElementById('result').value = md5(input.value)
      var copyText = document.getElementById("result");

      /* Select the text field */
      copyText.select();

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      
    }
  )
  input.value = ''
}())
