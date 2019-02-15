'use strict';
//コメント

//計算

// console.log(10 + 3);  //  加算
// console.log(10 - 3);  //  減算
// console.log(10 * 3);  //  乗算
// console.log(10 / 3);  //  割算
// console.log(10 % 3);  //  あまり
// console.log(10 ** 3); //  べき乗

// 定数  const

// const price = 150;
// console.log(price * 140);
// console.log(price * 160);


//変数 let var

// let price = 150;
// console.log(price * 140);
// console.log(price * 160);

// price = 170;
// console.log(price * 140);
// console.log(price * 160);

// let price = 500;

// price = price + 100; // 500+100
// price += 100  //  600+100
// price++;

// console.log(price);

// price--;

// console.log(price);

// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// const score = 85

// if (score >= 80){
//     console.log('great');

// } else if(score >= 60) {

//     console.log('good');

// } else {
//     console.log('OK.....!');

// }


// score >= 80 ? console.log('Great!') : console.log('OK...!!!');

const score = 400
const name ='taguchi'

//  &&  なおかつ(AND)
//  ||  もしくは(OR)
//  !  ～ではない(NOT)

if(score >= 50){
    if(name === 'taguchi'){
        console.log('Good job');
    }
 }
    else{
        console.log('Bad job');
}