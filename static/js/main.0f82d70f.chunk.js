(this.webpackJsonpstockapp=this.webpackJsonpstockapp||[]).push([[0],{180:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(65),n=a.n(c),l=(a(180),a(15)),i=a(18),d=a(1),j=function(){var e=Object(i.f)(),t=Object(r.useState)(""),a=Object(l.a)(t,2),s=a[0],c=a[1];return Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),c(""),e.push("/stockapp/".concat(s))},children:Object(d.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 shadow flex rounded",children:[Object(d.jsx)("input",{onChange:function(e){e.preventDefault(),c(e.target.value)},className:"w-full bg-gray-100 rounded p-4 dark:bg-gray-800 dark:text-gray-100",type:"text",placeholder:"Search..."}),Object(d.jsx)("button",{type:"submit",className:"w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400 dark:bg-gray-800",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})})},o=function(){return Object(d.jsxs)("div",{className:"mt-20 h-full ",children:[Object(d.jsx)("h1",{className:"mb-5 text-gray-800 dark:text-white font-bold text-3xl sm:text-5xl",children:"Welcome to the Stock Visualizer Tool"}),Object(d.jsx)("p",{className:"mb-10 text-gray-500 dark:text-gray-300 font-med text-xl sm:text-2xl",children:"Search for a stock ticker and get results about the current stock price, company info, market info, and much more."})]})},x=a(55),b=s.a.createContext(),m=function(e){var t=e.initialTheme,a=e.children,r=s.a.useState(localStorage.getItem("color-theme")||"light"),c=Object(l.a)(r,2),n=c[0],i=c[1],j=function(e){var t=window.document.documentElement,a="dark"===e;t.classList.remove(a?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&j(t),s.a.useEffect((function(){j(n)}),[n]),Object(d.jsx)(b.Provider,{value:{theme:n,setTheme:i},children:a})},h=a(114),g=function(){var e=Object(r.useContext)(b),t=e.theme,a=e.setTheme,s=function(){a("light"===t?"dark":"light")};return"dark"===t?Object(d.jsx)("button",{onClick:s,children:Object(d.jsx)(h.b,{className:"text-gray-500 text-2xl"})}):Object(d.jsx)("button",{onClick:s,children:Object(d.jsx)(h.a,{className:"text-gray-500 text-2xl"})})},p=function(){return Object(d.jsx)("nav",{className:"bg-white   dark:bg-gray-900",children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"flex mx-5 md:max-w-7xl md:mx-auto justify-between py-2",children:[Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)(x.b,{to:"/stockapp",children:Object(d.jsx)("img",{className:"h-8 w-8",src:"https://img.icons8.com/color/48/000000/line-chart--v2.png",alt:"Workflow"})}),Object(d.jsx)("h1",{className:"text-gray-500 dark:hover:bg-gray-700 dark:text-white px-3 py-2 rounded-md text-m font-medium",children:Object(d.jsx)(x.b,{to:"/stockapp",children:"Stock Finder"})})]}),Object(d.jsx)("div",{className:"flex",children:Object(d.jsx)(g,{})})]})})})},u=function(e){var t=e.children;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("main",{className:"dark:bg-gray-900",children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"mx-5 md:max-w-7xl md:mx-auto ",children:Object(d.jsx)("div",{children:t})})]})})},O=function(e){var t=e.title,a=e.summary,r=e.author,s=e.image,c=e.link;return Object(d.jsxs)("div",{className:"sm:flex mt-10 p-2 sm:p-10 rounded shadow bg-gray-100 dark:bg-gray-800",children:[Object(d.jsx)("div",{className:"self-center sm:w-1/4 sm:max-w-1/2",children:null===s?Object(d.jsx)("img",{src:"public/logo192.png",alt:"article"}):Object(d.jsx)("img",{src:s.original_url,alt:"article"})}),Object(d.jsxs)("div",{className:"sm:pl-10 sm:w-3/4",children:[Object(d.jsx)("a",{href:c,children:Object(d.jsx)("h1",{className:"mb-10 text-indigo-800 dark:text-white font-bold text-lg sm:text-lg inline",children:t})}),Object(d.jsxs)("p",{className:"text-gray-500 dark:text-gray-300 font-med",children:["by ",r]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{className:"dark:text-gray-300 font-med",children:a})]})]})},f=function(){return Object(d.jsx)("div",{className:"p-10 mt-10 border rounded shadow max-w-7xl w-full mx-auto bg-gray-100 dark:bg-gray-800",children:Object(d.jsx)("div",{className:"animate-pulse flex space-x-4",children:Object(d.jsx)("div",{className:"flex-1 justify-between space-y-4 py-1",children:Object(d.jsxs)("div",{className:"space-y-2",children:[Object(d.jsx)("div",{className:"h-4 bg-gray-400 "}),Object(d.jsx)("div",{className:"h-4 bg-gray-400 "}),Object(d.jsx)("div",{className:"h-4 bg-gray-400 "})]})})})})},y=function(e){var t=e.articleList;return t.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"mt-80 h-full ",children:Object(d.jsx)("h1",{className:"text-gray-800 dark:text-white dark:border-gray-300 font-bold text-xl inline border-b-2 border-gray-800",children:"Stories "})}),t.map((function(e){return Object(d.jsx)(O,{title:e.title,link:e.link,summary:e.summary,author:e.author,image:e.main_image})}))]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{})]})},k=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-newsfeed",{method:"GET",headers:{"x-rapidapi-key":"db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c","x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){return s(e.items.result)})).catch((function(e){console.error(e)}))}),[]),Object(d.jsxs)(u,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(j,{}),Object(d.jsx)(y,{articleList:a.slice(0,10)})]})},v=function(){return Object(d.jsx)("div",{className:"py-10 mt-10 max-w-7xl w-full mx-auto",children:Object(d.jsx)("div",{className:"animate-pulse flex space-x-4",children:Object(d.jsxs)("div",{className:"flex-1 space-y-4 py-1",children:[Object(d.jsx)("div",{className:"h-4 bg-gray-600 rounded w-1/6"}),Object(d.jsx)("div",{className:"h-4 bg-gray-500 rounded w-1/4"}),Object(d.jsxs)("div",{className:"space-y-2",children:[Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded w-5/6"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded w-4/6"})]}),Object(d.jsxs)("div",{className:"space-y-2",children:[Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded w-5/6"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded w-5/6"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded"}),Object(d.jsx)("div",{className:"h-4 bg-gray-300 rounded w-5/6"})]})]})})})},N=function(e){var t=e.quoteType,a=e.summaryProfile,s=e.price,c=(e.ticker,t||{}),n=a||{},i=s||{},j=Object(r.useState)({}),o=Object(l.a)(j,2);o[0],o[1];return 0!==Object.entries(c).length?Object(d.jsxs)("div",{className:"mt-10 py-10 ",children:[Object(d.jsxs)("div",{className:"flex md:flex-row sm: flex-col justify-between",children:[Object(d.jsxs)("div",{className:"mb-5 sm:mb-0",children:[Object(d.jsxs)("h1",{className:"text-gray-900 dark:text-white font-bold text-3xl",children:[c.longName," (",c.symbol,") "]}),Object(d.jsx)("h2",{className:"text-gray-900 dark:text-gray-300 font-bold inline",children:c.exchangeTimezoneName}),Object(d.jsx)("p",{className:"text-xs sm:text-sm inline rounded font-bold p-0.5 px-2 ml-1 text-gray-100 ".concat((i.marketState,"bg-green-500")),children:i.marketState})]}),Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)("p",{className:"text-gray-900  text-3xl md:text-5xl dark:text-white font-bold ",children:parseFloat(i.regularMarketPrice.raw).toFixed(2)}),Object(d.jsx)("p",{className:"text.gray-900 text-xl dark:text-gray-300 md:text-3xl",children:i.currency}),Object(d.jsxs)("p",{className:"text-xs sm:text-sm rounded font-bold  p-1 px-2 ml-1 text-gray-100 ".concat(i.regularMarketChange.raw>0?"bg-green-500":"bg-red-500"),children:[i.regularMarketChange.raw>0?"+":"",parseFloat(i.regularMarketChange.raw).toFixed(2)," ("+i.regularMarketChangePercent.fmt+")"]})]})]}),Object(d.jsx)("p",{className:"text-gray-500 mt-10 dark:text-gray-400 font-regular",children:n.longBusinessSummary})]}):Object(d.jsx)(v,{})},w=function(e){var t=e.prices||{};return 0!==Object.entries(t).length?Object(d.jsxs)("div",{className:"sm:flex sm:justify-between mt-10 p-10 rounded shadow bg-gray-100 dark:bg-gray-800",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Open"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"High"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Low"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.regularMarketOpen.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.regularMarketDayHigh.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.regularMarketDayLow.fmt})]})]}),Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Prev. Close"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Volume"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Average Volume"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.regularMarketPreviousClose.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.regularMarketVolume.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.averageDailyVolume10Day.fmt})]})]})]}):Object(d.jsx)(f,{})},S=function(e){var t=e.summaryDetail||{};return 0!==Object.entries(t).length?Object(d.jsxs)("div",{className:"sm:flex sm:justify-between mt-10 p-10 rounded shadow bg-gray-100 dark:bg-gray-800",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Market Cap"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Trailing P/E"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Forward P/E"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.marketCap.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.trailingPE.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.forwardPE.fmt})]})]}),Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Price To Sales (TTM)"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Beta (5Y Monthly)"}),Object(d.jsx)("p",{className:"mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300",children:"Dividend"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.priceToSalesTrailing12Months.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.beta.fmt}),Object(d.jsx)("p",{className:"mb-2 font-bold text-right text-gray-600 dark:text-white",children:t.dividendYield.fmt||"N/A"})]})]})]}):Object(d.jsx)(f,{})},D=a(323),C=a(324),P=a(168),T=a(169),M=a(74),E=a(171);function F(e){var t=e.payload;e.label;return e.active&&t?Object(d.jsxs)("div",{className:"custom-tooltip bg-blue-200 rounded p-2",children:[Object(d.jsx)("p",{className:"open",children:"Open: ".concat(t[0].value)}),Object(d.jsxs)("p",{className:"high",children:["High: ",t[0].payload.high]}),Object(d.jsxs)("p",{className:"close",children:["Close: ",t[0].payload.close]})]}):null}var L=function(e){var t=e.dataPoints;return Object(d.jsx)(D.a,{className:"mt-10",width:"100%",aspect:16/9,children:Object(d.jsxs)(C.a,{width:100,margin:{top:0,bottom:0,left:0,right:0},data:t,children:[Object(d.jsx)("defs",{children:Object(d.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(d.jsx)("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:1}),Object(d.jsx)("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:.1})]})}),Object(d.jsx)(P.a,{dataKey:"date"}),Object(d.jsx)(T.a,{tickCount:20}),Object(d.jsx)(M.a,{content:Object(d.jsx)(F,{})}),Object(d.jsx)(E.a,{type:"monotone",dataKey:"open",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorPv)"})]})})},V=function(e){var t=e.map((function(e){var t=parseInt(e.date,10),a=Object.assign({},e);return a.date=new Date(1e3*t).toLocaleDateString("en-US"),a}));return console.log(t),t},B=function(){var e=Object(i.g)().ticker,t="https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=".concat(e,"&region=US"),a="https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=".concat(e,"&region=US"),s=Object(r.useState)({stockData:{},lineChartData:[]}),c=Object(l.a)(s,2),n=c[0],o=c[1];return Object(r.useEffect)((function(){Promise.all([fetch(t,{method:"GET",headers:{"x-rapidapi-key":"db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c","x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com"}}).then((function(e){return e.json()})),fetch(a,{method:"GET",headers:{"x-rapidapi-key":"db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c","x-rapidapi-host":"yh-finance.p.rapidapi.com"}}).then((function(e){return e.json()}))]).then((function(e){var t=Object(l.a)(e,2),a=t[0],r=t[1];console.log(r.prices),o({stockData:a,lineChartData:r.prices})}))}),[t,a]),Object(d.jsx)(u,{children:Object(d.jsxs)("div",{className:"mt-10",children:[Object(d.jsx)(j,{}),Object(d.jsx)(N,{quoteType:n.stockData.quoteType,summaryProfile:n.stockData.summaryProfile,ticker:e,price:n.stockData.price}),Object(d.jsx)(w,{prices:n.stockData.price}),Object(d.jsx)(S,{summaryDetail:n.stockData.summaryDetail}),Object(d.jsx)(L,{dataPoints:V(n.lineChartData)})]})})},G=function(){return Object(d.jsx)(x.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/stockapp",children:Object(d.jsx)(k,{})}),Object(d.jsx)(i.a,{path:"/stockapp/:ticker",children:Object(d.jsx)(B,{})})]})})};var I=function(){return Object(d.jsx)(G,{})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{children:Object(d.jsx)(I,{})})}),document.getElementById("root"))}},[[321,1,2]]]);
//# sourceMappingURL=main.0f82d70f.chunk.js.map