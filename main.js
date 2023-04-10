function clickevent() {
  var per = document.getElementById('per')
  var num = document.getElementById('num')
  var hit = 0
  var lose = 0
  var flg = 0
  var r3num = 0
  for (let i = 0; i < num.value; i++) {
    var rnd = Math.floor(Math.random() * (100 / per.value)) + 1
    if (rnd == 1) {
      hit = hit + 1
      if (flg == 0){
        flg = 1
        r3num = i + 1
        result3.innerText = r3num + ' 回目でアタリ'
      }
    } else {
      lose = lose + 1
    }
  }
  if (num.value <= 0 || per.value == 0){
    result0.innerText = '有効な数値を入力してください'
  }else{
    result0.innerText = num.value + ' 回中'
  }
  result1.innerText = 'アタリ '+ hit + ' 回'
  result2.innerText = 'ハズレ '+ lose + ' 回'
  if (flg == 0){
    result3.innerText = 'アタリはありません'
  }
}
