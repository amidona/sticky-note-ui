(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=n(6),i=n(3),l=n(4),u=n(7),d=n(5),h=n(8),p=function(e){return o.a.createElement("header",null,o.a.createElement("h1",{className:"app-header__title"},"Super Sticky Notes"),o.a.createElement("aside",{className:"app-header__controls"},o.a.createElement("button",{className:"add-new",onClick:e.addNote},"+ New Note"),o.a.createElement("input",{className:"search",type:"text",placeholder:"Type here to search...",value:e.searchText,onChange:function(t){e.onSearch(t.target.value)}})))},m=function(e){return o.a.createElement("li",{className:"note"},o.a.createElement("input",{className:"note__title",type:"text",placeholder:"Title",value:e.note.title,onChange:function(t){var n=t.target.value,a=e.note.id;e.onType(a,"title",n)}}),o.a.createElement("textarea",{className:"note__description",placeholder:"Description...",value:e.note.description,onChange:function(t){var n=t.target.value,a=e.note.id;e.onType(a,"description",n)}}),o.a.createElement("span",{className:"note__delete",onClick:function(){e.removeNote(e.note.id)}},"X"))},v=function(e){var t=e.notes.filter(function(e){return!0===e.doesMatchSearch}).map(function(t){return o.a.createElement(m,{removeNote:e.removeNote,onType:e.onType,note:t,key:t.id})});return o.a.createElement("ul",{className:"notes-list"},t)},f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}],searchText:""},n.addNote=function(){var e={id:Date.now(),title:"",description:"",doesMatchSearch:!0};n.setState({notes:[e].concat(Object(s.a)(n.state.notes))})},n.onType=function(e,t,a){var o=n.state.notes.map(function(n){return n.id!==e?n:"title"===t?(n.title=a,n):(n.description=a,n)});n.setState({notes:o})},n.onSearch=function(e){var t=e.toLowerCase(),a=n.state.notes.map(function(e){if(t){var n=e.title.toLowerCase(),a=e.description.toLowerCase(),o=n.includes(t),r=a.includes(t),c=o||r;return e.doesMatchSearch=c,e}return e.doesMatchSearch=!0,e});n.setState({notes:a,searchText:t})},n.removeNote=function(e){var t=n.state.notes.filter(function(t){return t.id!==e});n.setState({notes:t})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.notes);localStorage.setItem("savedNotes",e)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("savedNotes");if(e){var t=JSON.parse(e);this.setState({notes:t})}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,{onSearch:this.onSearch,addNote:this.addNote,searchText:this.state.searchText}),o.a.createElement(v,{removeNote:this.removeNote,onType:this.onType,notes:this.state.notes}))}}]),t}(a.Component),N=(n(15),document.getElementById("root"));c.a.render(o.a.createElement(f,null),N)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a40f148d.chunk.js.map