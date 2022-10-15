var x = document.getElementById('ride');
var y = document.getElementById('drive');
var z = document.getElementById('btn');

function drive() {
    x.style.left = "-480px";
    y.style.left = "10px";
    z.style.left = "220px";
    document.querySelector('.hero').style.background = "url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_834/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png') center center/ cover"
}

function ride() {
    x.style.left = "0px";
    y.style.left = "480px";
    z.style.left = "0px";
    document.querySelector('.hero').style.background = "url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png') center center/ cover"

}