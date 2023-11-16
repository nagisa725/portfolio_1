
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

ミスタードーナツ("ハニーチュロ");







































