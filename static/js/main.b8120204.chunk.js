(this["webpackJsonpproject-1"]=this["webpackJsonpproject-1"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(4),b=n.n(r),l=n(5),d=n(6),s=n(8),o=n(7),h=n(2),j=n.n(h),f=function(e){var t=e.itemsCount,n=e.pageSize,a=e.onPageChange,i=e.currentPage,r=Math.ceil(t/n);if(1===r)return null;var b=j.a.range(1,r+1);return Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{className:"pagination",children:b.map((function(e){return Object(c.jsx)("li",{className:e===i?"page-item active":"page-item",children:Object(c.jsx)("a",{href:"/#",className:"page-link",onClick:function(){return a(e)},children:e})},e)}))})})};var u=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];function m(){return u}var g=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={currentPage:1,pageSize:4,movies:m()},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=0===this.state.movies.length?"There are no movies in the database.":"Showing ".concat(this.state.movies.length," movies in the database"),n=this.state,a=n.pageSize,r=n.currentPage,b=function(e,t,n){var c=(t-1)*n;return j()(e).slice(c).take(n).value()}(n.movies,r,a);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)("p",{children:t}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Title"}),Object(c.jsx)("th",{children:"Genre"}),Object(c.jsx)("th",{children:"Stock"}),Object(c.jsx)("th",{children:"Rate"}),Object(c.jsx)("th",{})]})}),Object(c.jsx)("tbody",{children:b.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.title}),Object(c.jsx)("td",{children:t.genre.name}),Object(c.jsx)("td",{children:t.numberInStock}),Object(c.jsx)("td",{children:t.dailyRentalRate}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{onClick:function(){return e.handleDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})})]},t._id)}))})]}),Object(c.jsx)(f,{itemsCount:this.state.movies.length,pageSize:a,currentPage:r,onPageChange:this.handlePageChange})]})}}]),n}(a.Component),O=function(){return Object(c.jsx)("main",{className:"container",children:Object(c.jsx)(g,{})})};n(16),n(17),n(18);b.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b8120204.chunk.js.map