
function yamashita1() {
    console.log('天才')
}
// 進化系
const nagisa1 = (aaa) => {
    console.log('子供kodomo')
    console.log(aaa)
}
// これは、進化系を簡略化したものっていうイメージで今はOK
(()=>{
    console.log('バイトやだー')
})()

nagisa1('あほ')
nagisa1('かす')

function tax1(num){
    num * 1.1
}
function tax2(num){
    return num * 1.1
}

let okaikei = 0;
const karaagekun = tax1(200)
if (karaagekun) {
    console.log('からあげクンを購入しました。')
    okaikei += karaagekun
}
const chocolate = tax2(100)
if (chocolate) {
    console.log('チョコレートを購入しました。')
    okaikei += chocolate
}

const ice = 300
okaikei += ice

console.log(okaikei)



function basket (oldtax){
    return oldtax * 1.08
}

let okaikei2 = 0;

const ポッキー = basket (150);
if(ポッキー){
    console.log("ポッキー購入")
    okaikei2 += ポッキー
}

const パリチキ= basket (250);
if (パリチキ){
    console.log("パリチキ購入")
    okaikei2 += パリチキ
}

const アイスコーヒー = basket(100);
if(アイスコーヒー){
    console.log("アイスコーヒー購入")
    okaikei2 += アイスコーヒー
}

const 水 = basket(100);
if(水){
    console.log("水")
    okaikei2 += 水
}

const タバコ= basket(580);
if(タバコ){
console.log("タバコ")
okaikei2 += タバコ
}

const ポテトチップス = basket(200)
if (ポテトチップス){
    console.log("ポテトチップス")
    okaikei2 += ポテトチップス
}

console.log(okaikei2)

function insect(...bugs){
    console.log(bugs);
}

insect("ant","Ladybug","pill bug");

function 虫 (insect, ...bugs2){
    console.log(insect);
    console.log(bugs2);
}

虫 ("beetle","ant","Ladybug","pill bug","bagworm");

function fn (ladybug2,pillbug2,bagworm2){
    console.log(ladybug2);
    console.log(pillbug2);
    console.log(bagworm2);
}
 const array = [1,2,3];
fn(...array);

 

const  hamu = "bread"
    if (hamu){
        console.log("ハムサンド")
 }

 const egg = "bread"
    if (egg){
        console.log("タマゴサンド")
 }

 const AAA = "BBB"; //BBBをAAAという変数に代入した代入式//
 
  const CCC = () => {  //実行されると１を返す関数を変数CCCに代入した関数式//
     console.log(3)
     return 1;
 };

 const callCCC = CCC (); //CCC()という式を呼び出し実行されると１という値をcallCCCに代入//
console.log(callCCC)


 const numbar = 1+1; //式＋演算式//
 console.log(numbar)

 let 合計 = 0;

const かもめ = (子供) => {
    return  子供 * 2;
};

const hinadori = かもめ (10)
if (hinadori){
    console.log ("ヒナが生まれました")
    合計 += hinadori
}
console.log(合計)

//trueと真偽値が出る為if文が実行される//
const w = 100;
if ( w > 50 ) {
    console.log("wは50よりも大きな値である")
}
//zよりも大きい値の為比較演算子により真偽値はfalse、よってif文の中身は実行されない//
const z = 100;
if ( z > 150 ){
    console.log("zは100よりも大きい値である")
}

const num = 1;
if (num > 10) {
    console.log(`numは10より大きい: ${num}`);
} else {
    console.log(`namは10以下です: ${num}`);
}
const dum =2;
if (dum > 10) {
    console.log(`namは10より大きいです: ${dum}`);
} else {
    console.log(`numは10以下です: ${dum}`);
}
const mam =3;
if ( mam>10 ){
    console.log(`mamは10より大きいです: ${mam}`);
}else{
    console.log(`mamは10以下です: ${mam}`);
}
const hamutarou ="15cm";
if (hamutarou>30){
    console.log(`ハム太郎は30cmより大きいです:${hamutarou}`);
}else{
    console.log(`ハム太郎は30cm以下です:${hamutarou}`);
}
const ちいかわ = "そうに決まっている";
if(ちいかわ<"おパンちゅうさぎ"){
    console.log(`おぱんちゅうさぎはちいかわより可愛いです ${ちいかわ}`);
}else{
    console.log(`ちいかわは何よりも可愛いです${ちいかわ}`);
}
const かまいたち="そうに決まってる";
if("面白い"<"面白くない"){
    console.log(`かまいたちは面白いです ${かまいたち}`);
}else{
    console.log(`かまいたちは面白くないです ${かまいたち}`);
}

const version = "ES6";
if (version === "ES5"){
    console.log("ECMAScript 5");
} else if(version === "ES6") {
    console.log("ECMAScript 2015");
} else if(version === "ES7") {
    console.log("ECMAScript 2016");
}

const KAMOME = "飛ぶ";
if (KAMOME === "走る"){
    console.log("チーター");
}else if(KAMOME === "飛ぶ"){
    console.log("トンビ");
}else if(KAMOME === "泳ぐ"){
    console.log("シャケ");
}
const ちいかわ1 = "可愛い";
if (ちいかわ1 === "可愛い"){
    console.log("なんか小さくて可愛いやつ");
}else if(ちいかわ1==="可愛くない"){
    console.log("なんか大きくて可愛くないやつ");
}else if(ちいかわ1==="おぱんちゅ"){
    console.log("おぱんちゅは可愛い")
}
const おにぎり = "美味しい";
if (おにぎり === "美味しい"){
    console.log("シャケ");
}else if(おにぎり === "美味しくない"){
    console.log("おかか");
}else if(おにぎり ==="美味しくない"){
    console.log("梅");
}
const パン = "好きなパン";
if(パン === "パン"){
    console.log("クロワッサン");
}else if(パン === "パン"){
    console.log("あんぱん");
}else if(パン ==="好きなパン"){
    console.log("メロンパン");
}
const 成人 =18;
if(成人===15){
    console.log("成人年齢ではない");
}else if(成人===20){
    console.log("成人年齢ではない");
}else if(成人===18){
    console.log("成人");
}

const year = new Date().getFullYear();
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`${year}年は閏年である`);
        } else {
            console.log(`${year}年は閏年ではない`);
        }
    } else {
        console.log(`${year}年は閏年である`);
    }
} else {
    console.log(`${year}年は閏年ではない`);
}

const ミスド = "ミスタードーナツ";
switch (ミスド){
    case "ミスタードーナツ":
        console.log("ミスドのハニーチュロが一番好きです");
        break;
    case "ミセスドーナツ":
        console.log("ミスドのフレンチクルーラーが一番おいしいです");
        break;
    case "ミスドーナツ":
        console.log("ミスドのポンデリングが一番美味しいです");
        break;
    case "ミンナドーナツ":
        console.log("ミスドのエンゼルクリームが一番美味しいです")
        break;
    default:
        console.log("この中に答えはない")
        break;
}

//breakを忘れると意図しないcase節が発生する//

function ミスタードーナツ (あ){
    switch(あ){
        case "ハニーチュロ":
            console.log("ハニーチョロ")
            return "が一番美味しいです";
        case "フレンチクルーラー":
            return "が一番美味しいです";
        case "ポンデリング":
            return "が一番美味しいです";
        default:
            return "美味しいものはありません"
    }
}

//ループと反復処理//
//while(条件式){
//   実行する文;
//}

let x = 0;
console.log(`ループ開始前のxの値 ${x}`);
while (x < 10){
    console.log(x);
    x += 1;
}
let t = 0;
console.log(`ループ開始前のtの値 ${t}`);
while(t < 10){
    console.log(t);
    t += 1;
}
let q = 0;
console.log(`ループ開始前のwの値 ${q}`);
while(w<10){
    console.log(q);
    q+=1;
}
let e = 10;
console.log(`ループ開始前のeの値 ${e}`);
while(e<20){
    console.log(e);
    e+=1;
}

for (let i = 1; i < 3; i++){
    console.log("i = " + i);
  }
  
  console.log('end');



  let total = 0;
  for (let i = 0; i < 10; i++) {
      total += 0 + 1;
  }
  total = 1;
  for (let i = 0; i < 10; i++) {
      total = total + 1 + 1;
  }
  total = 3;
  for (let i = 0; i < 10; i++) {
      total = total + 2 + 1;
  }
  total = 6;
  for (let i = 0; i < 10; i++) {
    total = 6 + 3 + 1;
  }
  total = 10;
  for (let i = 0; i < 10; i++) {
    total = total + 4 + 1;
  }
  total = 15;
  for (let i = 0; i < 10; i++) {
    total = total + 5 + 1;
  }
  total = 21;
  for (let i = 0; i < 10; i++) {
      total = total + 6 + 1;
  }
  total = 28;
  for (let i = 0; i < 10; i++) {
      total = total + 7 + 1;
  }
  total = 36;
  for (let i = 0; i < 10; i++) {
      total = total + 8 + 1;
  }
  total = 45;
  for (let i = 0; i < 10; i++) {
      total = total + 9 + 1;
    }
total = 55;

let total2 = 0;
for (let r = 0; r < 10; r++){
    total2 += r+1; 
}
console.log(total2)

let total3 = 0; 
for (let o =0; o<10; o++){
    total3+=o+1;
}
console.log(total3);

let total4 =0;
for(let m =0; m<20; m++){
    total4+=m+1;
}
console.log(total4);

const sum = (numbars) => {
    let total5 = 0;
    for (let c = 0; c < numbars.length; c++){
        total5 += numbars[c];
    }
        return total5;
    }
console.log(sum([1,2,3,4,5]));

const sum2 = (numbars2) =>{
    let total6 =0;
    for (let d = 0; d < numbars2; d++){
        total6 += numbars2[d];
    }
        return total6;
}
console.log(sum([1,2,3,4,5,6,7,8,9]));

const sum3 = (numbars3) =>{
    let total7 =0;
    for(let e = 0; e < numbars3; e++){
        total7+=numbars3[e];
    } 
    return total7
}
console.log(sum([10,15,20,25,30]));


const array2 =[1,2,3];
array2.forEach(currentValue =>{
    console.log(currentValue)
});
const array3 = [1,3,5,7,9];
array3.forEach(currentValue =>{
    console.log(currentValue)
});
const array4 = [100,99,98,97,96,95];
array4.forEach(currentValue =>{
    console.log(currentValue)
});

const numbers4 = [1,5,10,15,20];
let evennumber = false; //console.logで表示されるためにfalse真偽値(宣言)をかませる
for(let f = 0; f < numbers4.length; f++){ //numbera4.lengthは配列の個数を表示するため
    const num =numbers4[f];
    if(num % 2===0){
        evennumber=true;
        break;
    }
}
console.log(evennumber);

const number4 =[1,5,10,15,20,25,30];
let evennunber = false;
for(let g = 0; g<7; g++){
    const num2 = number4[g];
    if(num2 % 2 === 0 ){
        evennumber=true;
        break;
    }
}
console.log(evennumber)

const number5 =[1,2,3,4,5,6,7,8,9,];
let oddnumber =false;
for(let h = 0; h < number5.length; h++){
    const num3 = number5[h];
    if(num3 % 3 === 0){
        oddnumber = true;
        break;
    }
}
console.log(oddnumber);

//for...in文 
//親要素のオブジェクトまで探索して列挙してしまう
const obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
for(const key in obj){
    value = obj[key];
    console.log(`key:${key}, value:${value}`);
}

//↓安全 Object.key Object.value Object.entriesでも作れる
const obj2= {
    "a" : 1,
    "b" : 2,
    "c" : 3
};
Object.keys(obj2).forEach(key =>{
    const value = obj2[key];
    console.log(`key:${key}, value:${value}`);
});































