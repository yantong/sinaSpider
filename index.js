var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });



  nightmare
  .goto('https://weibo.com/login.php')
//   .type('#loginname', '1209144177@qq.com')
//   .type('input[type="password"]', '1209144177yan')
//   .click('div.login_btn a')
  .wait(10000)
  .click('div.login_btn a')
  .then(function (result) {
    console.log(result);
    result = true;
    if(result)
    {
        console.log('登陆成功');

        nightmare
        .goto('https://weibo.com/xuezhiqian')
        .wait(1000)
        .click('table.tb_counter td:nth-child(2) a')
        .wait(3000)
        .evaluate(function () {
            
            let a = document.getElementsByTagName('a');

            for (const key in a) {
                const element = a[key];
                element.target = '_self';
            }
        })
        .wait(3000)
        .click('ul.follow_list li:nth-child(2) img')
        .wait(5000)
        .click('div.PCD_person_info a.WB_cardmore')
        .wait(3000)
        .evaluate(function () {
            let arr = [];
            let pt_detail = document.getElementsByClassName('pt_detail');
            for (const index in pt_detail) {
                const element = pt_detail[index].innerText;
                arr.push(element)
            }

            return arr;
        })
        .then(res => {
            console.log(res);
        })
        .catch(e => {
        })
    }
    else
      console.log('登陆失败');
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });