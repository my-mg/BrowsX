body {
    font: normal 12px/1.3 Arial, sans-serif;
    color: #333;
    
}

#browser {
    width: 90%;
    min-width: 900px;
    margin: 40px 5%;
    background: #ccc;
    border: 1px solid #666;
    border-radius: 5px;
    overfloww: hidde;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.4), 0 0 60px rgba(0,0,0,.6);
}

.tabs {
    float: left;
    margin-left: 20px;
    height: 40px;
}
.tabs li,
.tabs li:before {
    cursor: default;
    z-index: 1;
    position: relative;
    border: 1px solid #aaa;
    border-bottom: 0;
    transform: skewX(25deg);
    float: left;
    height: 29px;
    margin: 10px 0 0 12px;
    padding: 0 15px;
    width: 160px;
    border-radius: 5px 5px 0 0;
    box-shadow: inset -1px 1px 0 rgba(255,255,255,.5);
    background: #ddd;
}
.tabs li:nth-child(1) { z-index: 7 }
.tabs li:nth-child(2) { z-index: 6 }
.tabs li:nth-child(3) { z-index: 5 }
.tabs li:nth-child(4) { z-index: 4 }
.tabs li:nth-child(5) { z-index: 3 }
.tabs li:nth-child(6) { z-index: 2 }
.tabs li:nth-child(7) { z-index: 1 }

.tabs li.active,
.tabs li.active:before {
    z-index: 9 !important;
    background: #eee;
    height: 30px;
    margin-bottom: -1px;
    border-color: #888;
}
.tabs li:before {
    content: '';
    position: absolute;
    left: -18px;
    top: -1px;
    transform: skewX(140deg);
    border-right: 0;
    margin: 0;
    padding: 0;
    width: 30px;
    border-radius: 5px 0 0 0;
  box-shadow: inset 1px 1px 0 rgba(255,255,255,.5);
}
.tabs li img {
    z-index: 9;
    position: absolute;
    left: -6px;
    top: 6px;
    width: 16px;
    height: 16px;
    transform: skewX(-25deg);
    border-radius: 3px;
}
.tabs li a {
    z-index: 3;
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 18px;
    color: #777;
    width: 15px;
    height: 15px;
    line-height: 16px;
    text-align: center;
    transform: skewX(-25deg);
    border-radius: 100%;
}
.tabs li a:hover {
    color: #fff;
    background-color: #e05d68;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.4);
}
.tabs li a:active { background-color: #d83240 }
.tabs li span {
    display: block;
    width: 98%;
    line-height: 30px;
    transform: skewX(-25deg);
    white-space: nowrap;
    overflow: hidden;
}
.tabs li span:after {
    content: '';
    width: 25px;
    height: 28px;
    position: absolute;
    right: 0;
    top: 1px;
    background: -webkit-linear-gradient(left, hsla(0,0%,87%,0) 0%,hsla(0,0%,87%,1) 77%,hsla(0,0%,87%,1) 100%);
}
.tabs li.active span:after { background: -webkit-linear-gradient(left,  hsla(0,0%,93%,0) 0%,hsla(0,0%,93%,1) 77%,hsla(0,0%,93%,1) 100%) }

.add {
    text-align: center;
    font-weight: bold;
    color: #ccc;
    line-height: 17px;
    font-size: 15px;
    float: left;
    margin: 16px 8px 0;
    width: 23px;
    height: 16px;
    background: #ddd;
    border-radius: 5px;
    border: 1px solid #aaa;
    transform: skewX(25deg);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
}
.add:hover {
    box-shadow: inset 0 1px 0 rgba(255,255,255,1);
    background: #f8f8f8;
}
.add:active {
    box-shadow: inset 0 1px 2px rgba(0,0,0,.2);
    background: #ccc;
    color: #555;
}


.bar {
  z-index: 3;
  position: relative;
    clear: both;
    padding: 6px;
    background: #eee;
    border-top: 1px solid #aaa;
}

.bar ul {
  float: left;}

.bar > ul > li {
  position: relative;
    float: left;
    margin: 0 2px;
}
.bar > ul > li > a,
.bar ul li label{
    display: block;
    width: 26px;
    height: 26px;
    color: #444;
    text-align: center;
    line-height: 26px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid #eee;
}
.bar > ul > li > a:hover,
.bar ul li label:hover {
    border: 1px solid #ccc;
    background: #eee;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 1px 1px rgba(0,0,0,.1);
}
.bar > ul > li > a:active ,
.bar ul li label:active,
.bar ul.drop li input:checked ~ label {
    border: 1px solid #bbb;
    background: #ccc;
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}

.bar .favorite {
  z-index: 5;
  position: absolute;
  right:48px;
  top: 8px;
    width: 26px;
    height: 26px;
    color: #888;
    text-align: center;
    line-height: 26px;
    font-size: 24px;
}


.bar input:checked  ~ .favorite {
    color: #e8bc02;
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
}

.bar input:checked  ~ .icon-star-empty:before { 
  content: "\f005";
  display: none;

}
  .fa-plus{
      transform: skewX(-24deg);
  }
.bar input {
      width: 82%;
    display:block;
    float:left;
    left: 130px;
    right: 45px;
    position: absolute;
    margin-left: 10px;
    border: 1px solid #bbb;
    height: 26px;
    font-size: 13px;
    line-height: 26px;
    border-radius: 5px;
    padding: 0 10px;
    box-shadow: inset 0 1px 0 rgba(0,0,0,.08), 0 1px 0 rgba(255,255,255,1);
}
.bar ul.drop {
  float: right;
}
.bar ul.drop li input {
  display: none;
}
.bar ul.drop li ul { 
  display: none; 
  position: absolute;
  right: 0;
  top: 30px;
  width: 230px;
  padding: 5px 0;
  background-color: rgba(255,255,255,.94);
  box-shadow: 0 1px 7px rgba(0,0,0,.4);
  border-radius: 5px;
  border-top: 1px solid #ddd;
}

.bar ul.drop li input:checked ~ ul {
  display: block; 
}

.bar ul.drop li ul li.slice {
  margin: 6px 0;
  height: 2px;
  border-top: 1px solid #ddd;
}

.bar ul.drop li ul li a {
  display: block;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  font-size: 13px;
  color: #222;
}

.bar ul.drop li ul li a:hover,
.bar ul.drop li ul li a:hover span{
  background: -webkit-linear-gradient(top, #5da4ea 0%,#4096ee 100%);
  color: #fff;
}

.bar ul.drop li ul li a span {
  float: right;
  margin-right: 10px;
  color: #999;
}

.bookmark {
    position: relative;
    z-index: 2;
    clear: both;
    background: #eee;
    border-bottom: 1px solid #bbb;
}
.bookmark ul {
    overflow: hidden;
    margin: 0 5px;
    height: 32px;
}
.bookmark ul li {
    float: left;
    margin: 0 0 5px;
}
.bookmark ul li a {
    position: relative;
    display: block;
    max-width: 130px;
    padding: 0 8px 0 28px;
    height: 25px;
    line-height: 25px;
    background: #eee;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #444;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: all .2s ease;
}
.bookmark ul li a:hover {
    border: 1px solid #ccc;
    background: #eee;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.8), 0 1px 1px rgba(0,0,0,.1);
}
.bookmark ul li a:active {
    border: 1px solid #bbb;
    background: #ddd;
    box-shadow: inset 0 1px 0 rgba(0,0,0,.1);
}
.bookmark ul li a img {
    width: 16px;
    position: absolute;
    left: 7px;
    top: 4px;
    border-radius: 3px;
}
.bookmark ul li a span { }

.page {
    clear: both;
    height: 550px;
    background: #c5c5c5;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
}
