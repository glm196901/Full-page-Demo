/**
 * Created by mac on 2017/6/25.
 */
const http = require('http');
const url = require('url');
const cheerio = require('cheerio'); //引用cheerio模块,使在服务器端像在客户端上操作DOM,不用正则表达式
const iconv = require('iconv-lite'); //解决编码转换模块
const BufferHelper = require('bufferhelper');
/*
  *最后我需要达到的效果是，给予一个访问地址，
  * 形如：http://www.mynode.com?link=www.abc.com&callback=cb
  *我希望可以返回json，也可返回jsonp
*/
http.createServer((req,res)=>{
    "use strict";
    let arg = url.parse(req.url,true).query; //通过调用url模块，获取查询字符串参数集合
    let link = url.link; //获取抓取的link
    let callback = arg.callback;
    let protocol = 'http'; //若没有对link加上http，则补全
    if(link.indexOf('http')<0){
        link = protocol + '://' +link ;
    }
    //抓取页面
    download(link,(data)=>{
        res.writeHead(200,{
            'Content-Type' : 'text/html;charset=utf-8'  ,
            "Transfer-Encoding": "chunked"
        });
        let doc = data.toString();
        let $ = cheerio.load(doc);
        let list = [ ];
        $('.e2 li .title').each((i,e)=>{
            let item = $(e).chlidren('a').last();
            let title = item.text();
            let link = item.attr('href');
            list.push({'title':title,'link':link});
        });
        let jsonText = JSON.stringify(list);
        if(callback){
            res.write(callback + '('+ jsonText +')')
        }
        else{
            res.write(jsonText);
        }
        res.end();
    })
}).listen(process.env.PORT);

//家在第三方页面
function download(url,callback) {
    http.get('https://www.apiopen.top/journalismApi',(res)=>{
        "use strict";
        let bufferHelper = new BufferHelper(); //解决中文编码问题
        res.on('data',(chunk)=>{
            bufferHelper.concat(chunk);
        });
        res.on('end',()=>{
            let val = iconv.decode(bufferHelper.toBuffer(),'gb2312');
            callback(val);
        });
    }).on('error',()=>{
        "use strict";
        callback(null);
    })
}






