define("node_modules/monaco-editor/esm/vs/language/json/jsonWorker",function(e,t){"use strict";function n(e,t){return new u(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var r,o=e("node_modules/tslib/tslib"),i=o.__importStar(e("node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-json-languageservice/jsonLanguageService")),a=o.__importStar(e("node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-languageserver-types/main"));"undefined"!=typeof fetch&&(r=function(e){return fetch(e).then(function(e){return e.text()})});var s=function(){function e(e){this.wrapped=new Promise(e)}return e.prototype.then=function(e,t){var n=this.wrapped;return n.then(e,t)},e.prototype.getWrapped=function(){return this.wrapped},e.resolve=function(e){return Promise.resolve(e)},e.reject=function(e){return Promise.reject(e)},e.all=function(e){return Promise.all(e)},e}(),u=function(){function e(e,t){this._ctx=e,this._languageSettings=t.languageSettings,this._languageId=t.languageId,this._languageService=i.getLanguageService({schemaRequestService:t.enableSchemaRequest&&r,promiseConstructor:s}),this._languageService.configure(this._languageSettings)}return e.prototype.doValidation=function(e){var t=this._getTextDocument(e);if(t){var n=this._languageService.parseJSONDocument(t);return this._languageService.doValidation(t,n)}return Promise.resolve([])},e.prototype.doComplete=function(e,t){var n=this._getTextDocument(e),r=this._languageService.parseJSONDocument(n);return this._languageService.doComplete(n,t,r)},e.prototype.doResolve=function(e){return this._languageService.doResolve(e)},e.prototype.doHover=function(e,t){var n=this._getTextDocument(e),r=this._languageService.parseJSONDocument(n);return this._languageService.doHover(n,t,r)},e.prototype.format=function(e,t,n){var r=this._getTextDocument(e),o=this._languageService.format(r,t,n);return Promise.resolve(o)},e.prototype.resetSchema=function(e){return Promise.resolve(this._languageService.resetSchema(e))},e.prototype.findDocumentSymbols=function(e){var t=this._getTextDocument(e),n=this._languageService.parseJSONDocument(t),r=this._languageService.findDocumentSymbols(t,n);return Promise.resolve(r)},e.prototype.findDocumentColors=function(e){var t=this._getTextDocument(e),n=this._languageService.parseJSONDocument(t),r=this._languageService.findDocumentColors(t,n);return Promise.resolve(r)},e.prototype.getColorPresentations=function(e,t,n){var r=this._getTextDocument(e),o=this._languageService.parseJSONDocument(r),i=this._languageService.getColorPresentations(r,o,t,n);return Promise.resolve(i)},e.prototype.provideFoldingRanges=function(e,t){var n=this._getTextDocument(e),r=this._languageService.getFoldingRanges(n,t);return Promise.resolve(r)},e.prototype._getTextDocument=function(e){for(var t=this._ctx.getMirrorModels(),n=0,r=t;n<r.length;n++){var o=r[n];if(o.uri.toString()===e)return a.TextDocument.create(e,this._languageId,o.version,o.getValue())}return null},e}();t.JSONWorker=u,t.create=n});