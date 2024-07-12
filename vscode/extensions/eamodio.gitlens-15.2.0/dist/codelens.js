exports.id=624,exports.ids=[624],exports.modules={4416:(e,n,t)=>{t.d(n,{GitCodeLensProvider:()=>GitCodeLensProvider});var i=t(1398),s=t(2434),o=t(3807),a=t(2124),r=t(7899),l=t(4832),c=t(560),m=t(4026),u=t(3916),d=t(3166),g=t(2471);let GitRecentChangeCodeLens=class GitRecentChangeCodeLens extends i.CodeLens{constructor(e,n,t,i,s,o,a,r,l,c){super(r,c),this.languageId=e,this.symbol=n,this.uri=t,this.dateFormat=i,this.blame=s,this.blameRange=o,this.isFullRange=a,this.desiredCommand=l}getBlame(){return this.blame?.()}};let GitAuthorsCodeLens=class GitAuthorsCodeLens extends i.CodeLens{constructor(e,n,t,i,s,o,a,r){super(a),this.languageId=e,this.symbol=n,this.uri=t,this.blame=i,this.blameRange=s,this.isFullRange=o,this.desiredCommand=r}getBlame(){return this.blame()}};let GitCodeLensProvider=class GitCodeLensProvider{constructor(e){this.container=e}static selector=[{scheme:o.xB.File},{scheme:o.xB.Git},{scheme:o.xB.GitLens},{scheme:o.xB.PRs},{scheme:o.xB.Vsls},{scheme:o.xB.VslsScc},{scheme:o.xB.Virtual},{scheme:o.xB.GitHub}];_onDidChangeCodeLenses=new i.EventEmitter;get onDidChangeCodeLenses(){return this._onDidChangeCodeLenses.event}reset(){this._onDidChangeCodeLenses.fire()}async provideCodeLenses(e,n){let t,s;if(e.isDirty&&(0,g.QK)(e.uri))return[];let o=await this.container.documentTracker.getOrAdd(e);if(!o.isBlameable)return[];let a=!1;e.isDirty&&!o.isDirtyIdle&&(a=!0);let m=l.H.get("codeLens",e),d={...m.scopesByLanguage?.find(n=>n.language?.toLowerCase()===e.languageId)};null==d&&(d={language:e.languageId}),null==d.scopes&&(d.scopes=m.scopes),null==d.symbolScopes&&(d.symbolScopes=m.symbolScopes),d.symbolScopes=null!=d.symbolScopes?d.symbolScopes=d.symbolScopes.map(e=>e.toLowerCase()):[];let h=[],b=o.uri;if(a){if(1!==d.scopes.length||!d.scopes.includes("document")){let n;if([n,s]=await Promise.all([this.container.git.isTracked(b),(0,r.S4)("vscode.executeDocumentSymbolProvider",e.uri)]),!n)return h}}else if(n.isCancellationRequested||(1===d.scopes.length&&d.scopes.includes("document")?t=await this.container.git.getBlame(b,e):[t,s]=await Promise.all([this.container.git.getBlame(b,e),(0,r.S4)("vscode.executeDocumentSymbolProvider",e.uri)]),null==t||t?.lines.length===0))return h;if(n.isCancellationRequested)return h;let y=(0,c.Oo)(()=>e.validateRange(new i.Range(0,0,1e6,1e6))),C=a?{command:void 0,title:this.getDirtyTitle(m)}:void 0;if(void 0!==s)for(let n of(u.Vy.log("GitCodeLensProvider.provideCodeLenses:",`${s.length} symbol(s) found`),s))this.provideCodeLens(h,e,n,d,y,t,b,m,a,C);if((d.scopes.includes("document")||d.symbolScopes.includes("file"))&&!d.symbolScopes.includes("!file")&&null==h.find(e=>0===e.range.start.line&&0===e.range.end.line)){let n;let s=y();if(a||m.recentChange.enabled){a||(n=(0,c.Oo)(()=>this.container.git.getBlameRange(t,b,s)));let o=new i.SymbolInformation(b.fileName,i.SymbolKind.File,"",new i.Location(b.documentUri(),new i.Range(0,0,0,s.start.character)));h.push(new GitRecentChangeCodeLens(e.languageId,o,b,m.dateFormat,n,s,!0,U(o),m.recentChange.command,C))}if(!a&&m.authors.enabled){void 0===n&&(n=(0,c.Oo)(()=>this.container.git.getBlameRange(t,b,s)));let o=new i.SymbolInformation(b.fileName,i.SymbolKind.File,"",new i.Location(b.documentUri(),new i.Range(0,1,0,s.start.character)));h.push(new GitAuthorsCodeLens(e.languageId,o,b,n,s,!0,U(o),m.authors.command))}}return h}getValidateSymbolRange(e,n,t,s){let o,a=!1,r=i.SymbolKind[e.kind].toLowerCase();switch(e.kind){case i.SymbolKind.File:(n.scopes.includes("containers")||n.symbolScopes.includes(r))&&(a=!n.symbolScopes.includes(`!${r}`)),a&&(o=t());break;case i.SymbolKind.Package:(n.scopes.includes("containers")||n.symbolScopes.includes(r))&&(a=!n.symbolScopes.includes(`!${r}`)),a&&0===(o=U(e)).start.line&&0===o.end.line&&(o=t());break;case i.SymbolKind.Class:case i.SymbolKind.Interface:case i.SymbolKind.Module:case i.SymbolKind.Namespace:case i.SymbolKind.Struct:(n.scopes.includes("containers")||n.symbolScopes.includes(r))&&(o=U(e),a=!n.symbolScopes.includes(`!${r}`)&&(s||!o.isSingleLine));break;case i.SymbolKind.Constructor:case i.SymbolKind.Enum:case i.SymbolKind.Function:case i.SymbolKind.Method:case i.SymbolKind.Property:(n.scopes.includes("blocks")||n.symbolScopes.includes(r))&&(o=U(e),a=!n.symbolScopes.includes(`!${r}`)&&(s||!o.isSingleLine));break;case i.SymbolKind.String:(n.symbolScopes.includes(r)||"markdown"===n.language&&n.scopes.includes("containers"))&&(o=U(e),a=!n.symbolScopes.includes(`!${r}`)&&(s||!o.isSingleLine));break;default:n.symbolScopes.includes(r)&&(o=U(e),a=!n.symbolScopes.includes(`!${r}`)&&(s||!o.isSingleLine))}return a?o??U(e):void 0}provideCodeLens(e,n,t,s,o,a,r,l,m,u){try{let d;let g=this.getValidateSymbolRange(t,s,o,l.includeSingleLineSymbols);if(void 0===g)return;let h=n.lineAt(U(t).start);if(e.length&&e[e.length-1].range.start.line===h.lineNumber)return;let b=0;if((m||l.recentChange.enabled)&&(m||(d=(0,c.Oo)(()=>this.container.git.getBlameRange(a,r,g))),e.push(new GitRecentChangeCodeLens(n.languageId,t,r,l.dateFormat,d,g,!1,h.range.with(new i.Position(h.range.start.line,b)),l.recentChange.command,u)),b++),l.authors.enabled){let s=!g.isSingleLine;if(!s&&"csharp"===n.languageId)switch(t.kind){case i.SymbolKind.File:break;case i.SymbolKind.Package:case i.SymbolKind.Module:case i.SymbolKind.Namespace:case i.SymbolKind.Class:case i.SymbolKind.Interface:case i.SymbolKind.Constructor:case i.SymbolKind.Method:case i.SymbolKind.Function:case i.SymbolKind.Enum:s=!0}s&&!m&&(void 0===d&&(d=(0,c.Oo)(()=>this.container.git.getBlameRange(a,r,g))),e.push(new GitAuthorsCodeLens(n.languageId,t,r,d,g,!1,h.range.with(new i.Position(h.range.start.line,b)),l.authors.command)))}}finally{if($(t))for(let i of t.children)this.provideCodeLens(e,n,i,s,o,a,r,l,m,u)}}resolveCodeLens(e,n){return e instanceof GitRecentChangeCodeLens?this.resolveGitRecentChangeCodeLens(e,n):e instanceof GitAuthorsCodeLens?this.resolveGitAuthorsCodeLens(e,n):Promise.reject(void 0)}resolveGitRecentChangeCodeLens(e,n){let t=e.getBlame();if(null==t)return R("Unknown, (Blame failed)",e);let o=(0,m.$1)(t.commits.values());if(null==o)return R("Unknown, (Blame failed)",e);let a=`${o.author.name}, ${null==e.dateFormat?o.formattedDate:o.formatDate(e.dateFormat)}`;if(l.H.get("debug")&&(a+=` [${e.languageId}: ${i.SymbolKind[e.symbol.kind]}(${e.range.start.character}-${e.range.end.character}${e.symbol.containerName?`|${e.symbol.containerName}`:""}), Lines (${e.blameRange.start.line+1}-${e.blameRange.end.line+1}), Commit (${o.shortSha})]`),!1===e.desiredCommand)return R(a,e);switch(e.desiredCommand){case s.Vg.CopyRemoteCommitUrl:return b(a,e,o,!0);case s.Vg.CopyRemoteFileUrl:return y(a,e,o,!0);case s.Vg.DiffWithPrevious:return h(a,e,o);case s.Vg.OpenCommitOnRemote:return b(a,e,o);case s.Vg.OpenFileOnRemote:return y(a,e,o);case s.Vg.RevealCommitInView:return C(a,e,o);case s.Vg.ShowCommitsInView:return S(a,e,t,o);case s.Vg.ShowQuickCommitDetails:return p(a,e,o);case s.Vg.ShowQuickCommitFileDetails:return f(a,e,o);case s.Vg.ShowQuickCurrentBranchHistory:return v(a,e);case s.Vg.ShowQuickFileHistory:return w(a,e);case s.Vg.ToggleFileBlame:return L(a,e);case s.Vg.ToggleFileChanges:return V(a,e,o);case s.Vg.ToggleFileChangesOnly:return V(a,e,o,!0);case s.Vg.ToggleFileHeatmap:return F(a,e);default:return e}}resolveGitAuthorsCodeLens(e,n){let t=e.getBlame();if(null==t)return R("? authors (Blame failed)",e);let o=t.authors.size,a=m.$1(t.authors.values())?.name??"Unknown",r=o>1?` and ${(0,d.td)("one other",o-1,{only:!0,plural:"others"})}`:"",c=`${(0,d.td)("author",o,{zero:"?"})} (${a}${r})`;if(l.H.get("debug")&&(c+=` [${e.languageId}: ${i.SymbolKind[e.symbol.kind]}(${e.range.start.character}-${e.range.end.character}${e.symbol.containerName?`|${e.symbol.containerName}`:""}), Lines (${e.blameRange.start.line+1}-${e.blameRange.end.line+1}), Authors (${(0,m.fj)((0,m.Tj)(t.authors.values(),e=>e.name),", ")})]`),!1===e.desiredCommand)return R(c,e);let u=(0,m.I6)(t.commits.values(),e=>e.author.name===a)??(0,m.$1)(t.commits.values());if(null==u)return R(c,e);switch(e.desiredCommand){case s.Vg.CopyRemoteCommitUrl:return b(c,e,u,!0);case s.Vg.CopyRemoteFileUrl:return y(c,e,u,!0);case s.Vg.DiffWithPrevious:return h(c,e,u);case s.Vg.OpenCommitOnRemote:return b(c,e,u);case s.Vg.OpenFileOnRemote:return y(c,e,u);case s.Vg.RevealCommitInView:return C(c,e,u);case s.Vg.ShowCommitsInView:return S(c,e,t);case s.Vg.ShowQuickCommitDetails:return p(c,e,u);case s.Vg.ShowQuickCommitFileDetails:return f(c,e,u);case s.Vg.ShowQuickCurrentBranchHistory:return v(c,e);case s.Vg.ShowQuickFileHistory:return w(c,e);case s.Vg.ToggleFileBlame:return L(c,e);case s.Vg.ToggleFileChanges:return V(c,e,u);case s.Vg.ToggleFileChangesOnly:return V(c,e,u,!0);case s.Vg.ToggleFileHeatmap:return F(c,e);default:return e}}getDirtyTitle(e){return e.recentChange.enabled&&e.authors.enabled?l.H.get("strings.codeLens.unsavedChanges.recentChangeAndAuthors"):e.recentChange.enabled?l.H.get("strings.codeLens.unsavedChanges.recentChangeOnly"):l.H.get("strings.codeLens.unsavedChanges.authorsOnly")}};function h(e,n,t){return n.command=(0,r.AU)({title:e,command:o.Ts.DiffWithPrevious,arguments:[void 0,{commit:t,uri:n.uri.toFileUri()}]}),n}function b(e,n,t,i=!1){return n.command=(0,r.AU)({title:e,command:o.Ts.OpenOnRemote,arguments:[{resource:{type:a.J.Commit,sha:t.sha},repoPath:t.repoPath,clipboard:i}]}),n}function y(e,n,t,i=!1){return n.command=(0,r.AU)({title:e,command:o.Ts.OpenOnRemote,arguments:[{resource:{type:a.J.Revision,fileName:t.file?.path??"",sha:t.sha},repoPath:t.repoPath,clipboard:i}]}),n}function C(e,n,t){return n.command=(0,r.AU)({title:e,command:t?.isUncommitted?"":s.Vg.RevealCommitInView,arguments:[n.uri.toFileUri(),{commit:t,sha:void 0===t?void 0:t.sha}]}),n}function S(e,n,t,i){let s;return s=void 0===i?[...(0,m.x1)(t.commits.values(),e=>e.isUncommitted?void 0:e.ref)]:[i.ref],n.command=(0,r.AU)({title:e,command:0===s.length?"":o.Ts.ShowCommitsInView,arguments:[{repoPath:t.repoPath,refs:s}]}),n}function p(e,n,t){return n.command=(0,r.AU)({title:e,command:t?.isUncommitted?"":s.Vg.ShowQuickCommitDetails,arguments:[n.uri.toFileUri(),{commit:t,sha:void 0===t?void 0:t.sha}]}),n}function f(e,n,t){return n.command=(0,r.AU)({title:e,command:t?.isUncommitted?"":s.Vg.ShowQuickCommitFileDetails,arguments:[n.uri.toFileUri(),{commit:t,sha:void 0===t?void 0:t.sha}]}),n}function v(e,n){return n.command=(0,r.AU)({title:e,command:s.Vg.ShowQuickCurrentBranchHistory,arguments:[n.uri.toFileUri()]}),n}function w(e,n){return n.command=(0,r.AU)({title:e,command:s.Vg.ShowQuickFileHistory,arguments:[n.uri.toFileUri(),{range:n.isFullRange?void 0:n.blameRange}]}),n}function L(e,n){return n.command=(0,r.AU)({title:e,command:o.Ts.ToggleFileBlame,arguments:[n.uri.toFileUri()]}),n}function V(e,n,t,i){return n.command=(0,r.AU)({title:e,command:o.Ts.ToggleFileChanges,arguments:[n.uri.toFileUri(),{type:"changes",context:{sha:t.sha,only:i,selection:!1}}]}),n}function F(e,n){return n.command=(0,r.AU)({title:e,command:o.Ts.ToggleFileHeatmap,arguments:[n.uri.toFileUri()]}),n}function R(e,n){return n.command={title:e,command:""},n}function U(e){return $(e)?e.range:e.location.range}function $(e){return(0,c.is)(e,"children")}}};