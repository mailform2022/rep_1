class Header{

    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }

    render(id){
        this.out = `<img src = "${this.src}">
        <h1>${this.h1}</h1>
        <h2>${this.h2}</h2> `

        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

//-------------------------------------------------------------------


class HeaderChild extends Header{


    render(id){
        this.out = `<img src = "${this.src}"> 
        <h1>${this.h1}</h1>`
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

let img = "317717_operating system_windows_icon.png";
let h = "Лооготип windows";
let headerChild = new HeaderChild(img, h);
headerChild.render('header');


let img1 = "3225191_app_instagram_logo_media_popular_icon.png";
let h1 = "Логотип инстаграмм";
let headerChild1 = new HeaderChild(img1, h1); 
headerChild1.render('header1');

let img2 = "3225179_app_logo_media_popular_social_icon.png";
let h2 = "Логотип WhatsApp";
let headerChild2 = new HeaderChild(img2, h2); 
headerChild2.render('header2');

let img3 = "2993698_chrome_logo_logos_icon.png";
let h3 = "Логотип Chrome";
let headerChild3 = new HeaderChild(img3, h3); 
headerChild3.render('header3');

let img4 = "4373213_js_logo_logos_icon.png";
let h4 = "Логотип JS";
let headerChild4 = new HeaderChild(img4, h4); 
headerChild4.render('header4');

let img5 = "2993672_brand_brands_google_logo_logos_icon.png";
let h5 = "Логотип PlayMarket";
let headerChild5 = new HeaderChild(img5, h5);
headerChild5.render('header5');

let img6 = "5296499_fb_facebook_facebook logo_icon.png";
let h6 = "Логотип Facebook";
let headerChild6 = new HeaderChild(img6, h6);
headerChild6.render('header6');

let img7 = "5296521_play_video_vlog_youtube_youtube logo_icon.png";
let h7 = "Логотип Youtube";
let headerChild7 = new HeaderChild(img7, h7);
headerChild7.render('header7');

let img8 = "1622827_clock_oclock_time_timing_watch_icon.png";
let h8 = "Логотип Oclock";
let headerChild8 = new HeaderChild(img8, h8);
headerChild8.render('header8');
