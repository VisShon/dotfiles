exports.id=53,exports.ids=[53],exports.modules={3915:(e,t,n)=>{n.r(t),n.d(t,{AIProviderService:()=>AIProviderService,extractDraftMessage:()=>D,getApiKey:()=>U,getMaxCharacters:()=>N});var a=n(1398),o=n(5287),i=n(5313),s=n(9634),r=n(3807),d=n(7899),l=n(2471);async function c(e,t){let n;let o=await (await e.ai)?.getModels()??[],i=[];for(let e of o){if(e.hidden)continue;n!==e.provider.id&&(n=e.provider.id,i.push({label:e.provider.name,kind:a.QuickPickItemKind.Separator}));let o=e.provider.id===t?.provider&&e.id===t?.model;i.push({label:e.name,iconPath:new a.ThemeIcon(o?"check":"blank"),model:e,picked:o})}let s=a.window.createQuickPick();s.ignoreFocusOut=(0,l.dW)();let c=[],h={iconPath:new a.ThemeIcon("clear-all"),tooltip:"Reset AI Keys..."};try{return await new Promise(e=>{c.push(s.onDidHide(()=>e(void 0)),s.onDidAccept(()=>{0!==s.activeItems.length&&e(s.activeItems[0])}),s.onDidTriggerButton(e=>{e===h&&(0,d.RS)(r.Ts.ResetAIKey)})),s.title="Choose AI Model",s.placeholder="Select an AI model to use for experimental AI features",s.matchOnDescription=!0,s.matchOnDetail=!0,s.buttons=[h],s.items=i,s.show()})}finally{s.dispose(),c.forEach(e=>void e.dispose())}}var h=n(4832),g=n(3131),m=n(3459),u=n(8803);let p=`You are an advanced AI programming assistant tasked with summarizing code changes into a concise and meaningful commit message. Compose a commit message that:
- Strictly synthesizes meaningful information from the provided code diff
- Utilizes any additional user-provided context to comprehend the rationale behind the code changes
- Is clear and brief, with an informal yet professional tone, and without superfluous descriptions
- Avoids unnecessary phrases such as "this commit", "this change", and the like
- Avoids direct mention of specific code identifiers, names, or file names, unless they are crucial for understanding the purpose of the changes
- Most importantly emphasizes the 'why' of the change, its benefits, or the problem it addresses rather than only the 'what' that changed

Follow the user's instructions carefully, don't repeat yourself, don't include the code in the output, or make anything up!`,f=`You are an advanced AI programming assistant tasked with summarizing code changes into a concise and meaningful title with an optional description. Compose a title with an optional description that:
- Strictly synthesizes meaningful information from the provided code diff
- Utilizes any additional user-provided context to comprehend the rationale behind the code changes
- Is clear and brief, with an informal yet professional tone, and without superfluous descriptions
- Avoids unnecessary phrases such as "this commit", "this change", and the like
- Avoids direct mention of specific code identifiers, names, or file names, unless they are crucial for understanding the purpose of the changes
- Most importantly emphasizes the 'why' of the change, its benefits, or the problem it addresses rather than only the 'what' that changed

Follow the user's instructions carefully, don't repeat yourself, don't include the code in the output, or make anything up!`,w=`You are an advanced AI programming assistant tasked with summarizing code changes into a concise and meaningful code review title with an optional description. Compose a code review title with an optional description that:
- Strictly synthesizes meaningful information from the provided code diff
- Utilizes any additional user-provided context to comprehend the rationale behind the code changes
- Is clear and brief, with an informal yet professional tone, and without superfluous descriptions
- Avoids unnecessary phrases such as "this commit", "this change", and the like
- Avoids direct mention of specific code identifiers, names, or file names, unless they are crucial for understanding the purpose of the changes
- Most importantly emphasizes the 'why' of the change, its benefits, or the problem it addresses rather than only the 'what' that changed

Follow the user's instructions carefully, don't repeat yourself, don't include the code in the output, or make anything up!`,y={id:"anthropic",name:"Anthropic"};function x(e){return"claude-instant-1"===e.id||"claude-2"===e.id}let v=[{id:"claude-3-opus-20240229",name:"Claude 3 Opus",maxTokens:2e5,provider:y},{id:"claude-3-5-sonnet-20240620",name:"Claude 3.5 Sonnet",maxTokens:2e5,provider:y},{id:"claude-3-sonnet-20240229",name:"Claude 3 Sonnet",maxTokens:2e5,provider:y},{id:"claude-3-haiku-20240307",name:"Claude 3 Haiku",maxTokens:2e5,provider:y,default:!0},{id:"claude-2.1",name:"Claude 2.1",maxTokens:2e5,provider:y},{id:"claude-2",name:"Claude 2.0",maxTokens:1e5,provider:y},{id:"claude-instant-1",name:"Claude Instant",maxTokens:1e5,provider:y}];let AnthropicProvider=class AnthropicProvider{constructor(e){this.container=e}id=y.id;name=y.name;dispose(){}getModels(){return Promise.resolve(v)}async generateMessage(e,t,n,o){let i=await b(this.container.storage);if(null!=i)try{let s,r;return x(e)?[s,r]=await this.makeLegacyRequest(e,i,e=>{let a=t.substring(0,e),i=`

Human: ${n.systemPrompt}

Human: Here is the code diff to use to generate the ${n.contextName}:

${a}
`;return o?.context&&(i+=`
Human: Here is additional context which should be taken into account when generating the ${n.contextName}:

${o.context}
`),n.customPrompt&&(i+=`
Human: ${n.customPrompt}
`),i+="\nAssistant:"},4096,o?.cancellation):[s,r]=await this.makeRequest(e,i,n.systemPrompt,e=>{let a=t.substring(0,e),i={role:"user",content:[{type:"text",text:`Here is the code diff to use to generate the ${n.contextName}:`},{type:"text",text:a}]};return o?.context&&i.content.push({type:"text",text:`Here is additional context which should be taken into account when generating the ${n.contextName}:`},{type:"text",text:o.context}),n.customPrompt&&i.content.push({type:"text",text:n.customPrompt}),[i]},4096,o?.cancellation),t.length>r&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${r} characters to fit within the Anthropic's limits.`),s}catch(e){throw Error(`Unable to generate ${n.contextName}: ${e.message}`)}}async generateDraftMessage(e,t,n){let a=n?.codeSuggestion===!0?h.H.get("experimental.generateCodeSuggestionMessagePrompt"):h.H.get("experimental.generateCloudPatchMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:n?.codeSuggestion===!0?w:f,customPrompt:a,contextName:n?.codeSuggestion===!0?"code suggestion title and description":"cloud patch title and description"},n)}async generateCommitMessage(e,t,n){let a=h.H.get("experimental.generateCommitMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:p,customPrompt:a,contextName:"commit message"},n)}async explainChanges(e,t,n,o){let i=await b(this.container.storage);if(null==i)return;let s=`You are an advanced AI programming assistant tasked with summarizing code changes into an explanation that is both easy to understand and meaningful. Construct an explanation that:
- Concisely synthesizes meaningful information from the provided code diff
- Incorporates any additional context provided by the user to understand the rationale behind the code changes
- Places the emphasis on the 'why' of the change, clarifying its benefits or addressing the problem that necessitated the change, beyond just detailing the 'what' has changed

Do not make any assumptions or invent details that are not supported by the code diff or the user-provided context.`;try{let r,d;return x(e)?[r,d]=await this.makeLegacyRequest(e,i,e=>{let a=n.substring(0,e);return`

Human: ${s}

Human: Here is additional context provided by the author of the changes, which should provide some explanation to why these changes where made. Please strongly consider this information when generating your explanation:

${t}

Human: Now, kindly explain the following code diff in a way that would be clear to someone reviewing or trying to understand these changes:

${a}

Human: Remember to frame your explanation in a way that is suitable for a reviewer to quickly grasp the essence of the changes, the issues they resolve, and their implications on the codebase. And please don't explain how you arrived at the explanation, just provide the explanation.
Assistant:`},4096,o?.cancellation):[r,d]=await this.makeRequest(e,i,s,e=>{let a=n.substring(0,e);return[{role:"user",content:[{type:"text",text:"Here is additional context provided by the author of the changes, which should provide some explanation to why these changes where made. Please strongly consider this information when generating your explanation:"},{type:"text",text:t},{type:"text",text:"Now, kindly explain the following code diff in a way that would be clear to someone reviewing or trying to understand these changes:"},{type:"text",text:a},{type:"text",text:"Remember to frame your explanation in a way that is suitable for a reviewer to quickly grasp the essence of the changes, the issues they resolve, and their implications on the codebase. And please don't explain how you arrived at the explanation, just provide the explanation"}]}]},4096,o?.cancellation),n.length>d&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${d} characters to fit within the Anthropic's limits.`),r}catch(e){throw Error(`Unable to explain changes: ${e.message}`)}}async fetch(e,t,n,a){let o;null!=a&&(o=new AbortController,a.onCancellationRequested(()=>o?.abort()));try{return await (0,m.hd)(x(e)?"https://api.anthropic.com/v1/complete":"https://api.anthropic.com/v1/messages",{headers:{Accept:"application/json",Authorization:`Bearer ${t}`,"Content-Type":"application/json","X-API-Key":t,"anthropic-version":"2023-06-01"},method:"POST",body:JSON.stringify(n)})}catch(e){if("AbortError"===e.name)throw new u.AL(e);throw e}}async makeRequest(e,t,n,a,o,i){let s=0,r=N(e,2600);for(;;){let d={model:e.id,messages:a(r),system:n,stream:!1,max_tokens:o},l=await this.fetch(e,t,d,i);if(!l.ok){let e;try{e=await l.json()}catch{}if(s++<2&&e?.error?.type==="invalid_request_error"&&e?.error?.message?.includes("prompt is too long")){r-=500*s;continue}throw Error(`(${this.name}:${l.status}) ${e?.error?.message||l.statusText})`)}return[(await l.json()).content.map(e=>e.text).join("\n").trim(),r]}}async makeLegacyRequest(e,t,n,a,o){let i=0,s=N(e,2600);for(;;){let r={model:e.id,prompt:n(s),stream:!1,max_tokens_to_sample:a},d=await this.fetch(e,t,r,o);if(!d.ok){let e;try{e=await d.json()}catch{}if(i++<2&&e?.error?.type==="invalid_request_error"&&e?.error?.message?.includes("prompt is too long")){s-=500*i;continue}throw Error(`(${this.name}:${d.status}) ${e?.error?.message||d.statusText})`)}return[(await d.json()).completion.trim(),s]}}};async function b(e){return U(e,{id:y.id,name:y.name,validator:e=>/(?:sk-)?[a-zA-Z0-9-_]{32,}/.test(e),url:"https://console.anthropic.com/account/keys"})}let k={id:"gemini",name:"Google"},P=[{id:"gemini-1.5-pro-latest",name:"Gemini 1.5 Pro",maxTokens:1048576,provider:k,default:!0},{id:"gemini-1.5-flash-latest",name:"Gemini 1.5 Flash",maxTokens:1048576,provider:k},{id:"gemini-1.0-pro",name:"Gemini 1.0 Pro",maxTokens:30720,provider:k}];let GeminiProvider=class GeminiProvider{constructor(e){this.container=e}id=k.id;name=k.name;dispose(){}getModels(){return Promise.resolve(P)}async generateMessage(e,t,n,o){let i=await $(this.container.storage);if(null==i)return;let s=N(e,2600);for(;;){let r=t.substring(0,s),d={systemInstruction:{parts:[{text:n.systemPrompt}]},contents:[{role:"user",parts:[{text:`Here is the code diff to use to generate the ${n.contextName}:

${r}`},...o?.context?[{text:`Here is additional context which should be taken into account when generating the ${n.contextName}:

${o.context}`}]:[],{text:n.customPrompt}]}]},l=await this.fetch(e.id,i,d,o?.cancellation);if(!l.ok){let e;try{e=await l.json()}catch{}throw Error(`Unable to generate ${n.contextName}: (${this.name}:${l.status}) ${e?.error?.message||l.statusText}`)}return t.length>s&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${s} characters to fit within the Gemini's limits.`),(await l.json()).candidates[0].content.parts[0].text.trim()}}async generateDraftMessage(e,t,n){let a=n?.codeSuggestion===!0?h.H.get("experimental.generateCodeSuggestionMessagePrompt"):h.H.get("experimental.generateCloudPatchMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:n?.codeSuggestion===!0?w:f,customPrompt:a,contextName:n?.codeSuggestion===!0?"code suggestion title and description":"cloud patch title and description"},n)}async generateCommitMessage(e,t,n){let a=h.H.get("experimental.generateCommitMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:p,customPrompt:a,contextName:"commit message"},n)}async explainChanges(e,t,n,o){let i=await $(this.container.storage);if(null==i)return;let s=N(e,3e3);for(;;){let r=n.substring(0,s),d={systemInstruction:{parts:[{text:`You are an advanced AI programming assistant tasked with summarizing code changes into an explanation that is both easy to understand and meaningful. Construct an explanation that:
- Concisely synthesizes meaningful information from the provided code diff
- Incorporates any additional context provided by the user to understand the rationale behind the code changes
- Places the emphasis on the 'why' of the change, clarifying its benefits or addressing the problem that necessitated the change, beyond just detailing the 'what' has changed

Do not make any assumptions or invent details that are not supported by the code diff or the user-provided context.`}]},contents:[{role:"user",parts:[{text:`Here is additional context provided by the author of the changes, which should provide some explanation to why these changes where made. Please strongly consider this information when generating your explanation:

${t}`},{text:`Now, kindly explain the following code diff in a way that would be clear to someone reviewing or trying to understand these changes:

${r}`},{text:"Remember to frame your explanation in a way that is suitable for a reviewer to quickly grasp the essence of the changes, the issues they resolve, and their implications on the codebase."}]}]},l=await this.fetch(e.id,i,d,o?.cancellation);if(!l.ok){let e;try{e=await l.json()}catch{}throw Error(`Unable to explain changes: (${this.name}:${l.status}) ${e?.error?.message||l.statusText}`)}return n.length>s&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${s} characters to fit within the Gemini's limits.`),(await l.json()).candidates[0].content.parts[0].text.trim()}}async fetch(e,t,n,a){let o;null!=a&&(o=new AbortController,a.onCancellationRequested(()=>o?.abort()));try{return await (0,m.hd)(`https://generativelanguage.googleapis.com/v1beta/models/${e}:generateContent`,{headers:{Accept:"application/json","Content-Type":"application/json","x-goog-api-key":t},method:"POST",body:JSON.stringify(n),signal:o?.signal})}catch(e){if("AbortError"===e.name)throw new u.AL(e);throw e}}};async function $(e){return U(e,{id:k.id,name:k.name,validator:()=>!0,url:"https://aistudio.google.com/app/apikey"})}let M={id:"openai",name:"OpenAI"},C=[{id:"gpt-4o",name:"GPT-4 Omni",maxTokens:128e3,provider:M,default:!0},{id:"gpt-4-turbo",name:"GPT-4 Turbo with Vision",maxTokens:128e3,provider:M},{id:"gpt-4-turbo-2024-04-09",name:"GPT-4 Turbo Preview (2024-04-09)",maxTokens:128e3,provider:M,hidden:!0},{id:"gpt-4-turbo-preview",name:"GPT-4 Turbo Preview",maxTokens:128e3,provider:M},{id:"gpt-4-0125-preview",name:"GPT-4 0125 Preview",maxTokens:128e3,provider:M,hidden:!0},{id:"gpt-4-1106-preview",name:"GPT-4 1106 Preview",maxTokens:128e3,provider:M,hidden:!0},{id:"gpt-4",name:"GPT-4",maxTokens:8192,provider:M},{id:"gpt-4-0613",name:"GPT-4 0613",maxTokens:8192,provider:M,hidden:!0},{id:"gpt-4-32k",name:"GPT-4 32k",maxTokens:32768,provider:M},{id:"gpt-4-32k-0613",name:"GPT-4 32k 0613",maxTokens:32768,provider:M,hidden:!0},{id:"gpt-3.5-turbo",name:"GPT-3.5 Turbo",maxTokens:16385,provider:M},{id:"gpt-3.5-turbo-0125",name:"GPT-3.5 Turbo 0125",maxTokens:16385,provider:M,hidden:!0},{id:"gpt-3.5-turbo-1106",name:"GPT-3.5 Turbo 1106",maxTokens:16385,provider:M,hidden:!0},{id:"gpt-3.5-turbo-16k",name:"GPT-3.5 Turbo 16k",maxTokens:16385,provider:M,hidden:!0}];let OpenAIProvider=class OpenAIProvider{constructor(e){this.container=e}id=M.id;name=M.name;dispose(){}getModels(){return Promise.resolve(C)}get url(){return h.H.get("ai.experimental.openai.url")||"https://api.openai.com/v1/chat/completions"}async generateMessage(e,t,n,o){let i=await T(this.container.storage);if(null==i)return;let s=0,r=N(e,2600);for(;;){let d=t.substring(0,r),l={model:e.id,messages:[{role:"system",content:n.systemPrompt},{role:"user",content:`Here is the code diff to use to generate the ${n.contextName}:

${d}`},...o?.context?[{role:"user",content:`Here is additional context which should be taken into account when generating the ${n.contextName}:

${o.context}`}]:[],{role:"user",content:n.customPrompt}]},c=await this.fetch(i,l,o?.cancellation);if(!c.ok){let t;if(404===c.status)throw Error(`Unable to generate ${n.contextName}: Your API key doesn't seem to have access to the selected '${e.id}' model`);if(429===c.status)throw Error(`Unable to generate ${n.contextName}: (${this.name}:${c.status}) Too many requests (rate limit exceeded) or your API key is associated with an expired trial`);try{t=await c.json()}catch{}if(s++<2&&t?.error?.code==="context_length_exceeded"){r-=500*s;continue}throw Error(`Unable to generate ${n.contextName}: (${this.name}:${c.status}) ${t?.error?.message||c.statusText}`)}return t.length>r&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${r} characters to fit within the OpenAI's limits.`),(await c.json()).choices[0].message.content.trim()}}async generateDraftMessage(e,t,n){let a=n?.codeSuggestion===!0?h.H.get("experimental.generateCodeSuggestionMessagePrompt"):h.H.get("experimental.generateCloudPatchMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:n?.codeSuggestion===!0?w:f,customPrompt:a,contextName:n?.codeSuggestion===!0?"code suggestion title and description":"cloud patch title and description"},n)}async generateCommitMessage(e,t,n){let a=h.H.get("experimental.generateCommitMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:p,customPrompt:a,contextName:"commit message"},n)}async explainChanges(e,t,n,o){let i=await T(this.container.storage);if(null==i)return;let s=0,r=N(e,3e3);for(;;){let d=n.substring(0,r),l={model:e.id,messages:[{role:"system",content:`You are an advanced AI programming assistant tasked with summarizing code changes into an explanation that is both easy to understand and meaningful. Construct an explanation that:
- Concisely synthesizes meaningful information from the provided code diff
- Incorporates any additional context provided by the user to understand the rationale behind the code changes
- Places the emphasis on the 'why' of the change, clarifying its benefits or addressing the problem that necessitated the change, beyond just detailing the 'what' has changed

Do not make any assumptions or invent details that are not supported by the code diff or the user-provided context.`},{role:"user",content:`Here is additional context provided by the author of the changes, which should provide some explanation to why these changes where made. Please strongly consider this information when generating your explanation:

${t}`},{role:"user",content:`Now, kindly explain the following code diff in a way that would be clear to someone reviewing or trying to understand these changes:

${d}`},{role:"user",content:"Remember to frame your explanation in a way that is suitable for a reviewer to quickly grasp the essence of the changes, the issues they resolve, and their implications on the codebase."}]},c=await this.fetch(i,l,o?.cancellation);if(!c.ok){let t;if(404===c.status)throw Error(`Unable to explain changes: Your API key doesn't seem to have access to the selected '${e.id}' model`);if(429===c.status)throw Error(`Unable to explain changes: (${this.name}:${c.status}) Too many requests (rate limit exceeded) or your API key is associated with an expired trial`);try{t=await c.json()}catch{}if(s++<2&&t?.error?.code==="context_length_exceeded"){r-=500*s;continue}throw Error(`Unable to explain changes: (${this.name}:${c.status}) ${t?.error?.message||c.statusText}`)}return n.length>r&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${r} characters to fit within the OpenAI's limits.`),(await c.json()).choices[0].message.content.trim()}}async fetch(e,t,n){let a;let o=this.url,i=o.includes(".azure.com");null!=n&&(a=new AbortController,n.onCancellationRequested(()=>a?.abort()));try{return(0,m.hd)(o,{headers:{Accept:"application/json","Content-Type":"application/json",...i?{"api-key":e}:{Authorization:`Bearer ${e}`}},method:"POST",body:JSON.stringify(t),signal:a?.signal})}catch(e){if("AbortError"===e.name)throw new u.AL(e);throw e}}};async function T(e){return U(e,{id:M.id,name:M.name,validator:e=>/(?:sk-)?[a-zA-Z0-9]{32,}/.test(e),url:"https://platform.openai.com/account/api-keys"})}var A=n(3166);let I={id:"vscode",name:"VS Code Provided"};let VSCodeAIProvider=class VSCodeAIProvider{constructor(e){this.container=e}id=I.id;_name;get name(){return this._name??I.name}dispose(){}async getModels(){return(await a.lm.selectChatModels()).map(S)}async getChatModel(e){let t=await a.lm.selectChatModels(e.selector);return t?.[0]}async generateMessage(e,t,n,o){let i,s;let r=await this.getChatModel(e);if(null==r)return;i=o?.cancellation==null?(s=new a.CancellationTokenSource).token:o.cancellation;let d=0,l=N(e,2600)-1e3;try{for(;;){let s=t.substring(0,l),c=[a.LanguageModelChatMessage.User(n.systemPrompt),a.LanguageModelChatMessage.User(`Here is the code diff to use to generate the ${n.contextName}:

${s}`),...o?.context?[a.LanguageModelChatMessage.User(`Here is additional context which should be taken into account when generating the ${n.contextName}:

${o.context}`)]:[],a.LanguageModelChatMessage.User(n.customPrompt)];try{let n=await r.sendRequest(c,{},i);t.length>l&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${l} characters to fit within ${H(e.provider.name)} limits.`);let o="";for await(let e of n.text)o+=e;return o.trim()}catch(n){let t=n instanceof Error?n.message:String(n);if(n instanceof Error&&"cause"in n&&n.cause instanceof Error&&(t+=`
${n.cause.message}`,d++<2&&n.cause.message.includes("exceeds token limit"))){l-=500*d;continue}throw Error(`Unable to generate commit message: (${H(e.provider.name)}:${n.code}) ${t}`)}}}finally{s?.dispose()}}async generateDraftMessage(e,t,n){let a=n?.codeSuggestion===!0?h.H.get("experimental.generateCodeSuggestionMessagePrompt"):h.H.get("experimental.generateCloudPatchMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:n?.codeSuggestion===!0?w:f,customPrompt:a,contextName:n?.codeSuggestion===!0?"code suggestion title and description":"cloud patch title and description"},null!=n?{cancellation:n.cancellation,context:n.context}:void 0)}async generateCommitMessage(e,t,n){let a=h.H.get("experimental.generateCommitMessagePrompt");return a.endsWith(".")||(a+="."),this.generateMessage(e,t,{systemPrompt:p,customPrompt:a,contextName:"commit message"},n)}async explainChanges(e,t,n,o){let i,s;let r=await this.getChatModel(e);if(null==r)return;i=o?.cancellation==null?(s=new a.CancellationTokenSource).token:o.cancellation;let d=0,l=N(e,3e3)-1e3;try{for(;;){let o=n.substring(0,l),s=[a.LanguageModelChatMessage.User(`You are an advanced AI programming assistant tasked with summarizing code changes into an explanation that is both easy to understand and meaningful. Construct an explanation that:
- Concisely synthesizes meaningful information from the provided code diff
- Incorporates any additional context provided by the user to understand the rationale behind the code changes
- Places the emphasis on the 'why' of the change, clarifying its benefits or addressing the problem that necessitated the change, beyond just detailing the 'what' has changed

Do not make any assumptions or invent details that are not supported by the code diff or the user-provided context.`),a.LanguageModelChatMessage.User(`Here is additional context provided by the author of the changes, which should provide some explanation to why these changes where made. Please strongly consider this information when generating your explanation:

${t}`),a.LanguageModelChatMessage.User(`Now, kindly explain the following code diff in a way that would be clear to someone reviewing or trying to understand these changes:

${o}`),a.LanguageModelChatMessage.User("Remember to frame your explanation in a way that is suitable for a reviewer to quickly grasp the essence of the changes, the issues they resolve, and their implications on the codebase.")];try{let t=await r.sendRequest(s,{},i);n.length>l&&a.window.showWarningMessage(`The diff of the changes had to be truncated to ${l} characters to fit within ${H(e.provider.name)} limits.`);let o="";for await(let e of t.text)o+=e;return o.trim()}catch(n){let t=n instanceof Error?n.message:String(n);if(n instanceof Error&&"cause"in n&&n.cause instanceof Error&&(t+=`
${n.cause.message}`,d++<2&&n.cause.message.includes("exceeds token limit"))){l-=500*d;continue}throw Error(`Unable to explain changes: (${H(e.provider.name)}:${n.code}) ${t}`)}}}finally{s?.dispose()}}};function S(e){return{id:`${e.vendor}:${e.family}`,name:`${(0,A.ZH)(e.vendor)} ${e.name}`,vendor:e.vendor,selector:{vendor:e.vendor,family:e.family},maxTokens:e.maxInputTokens,provider:{id:I.id,name:(0,A.ZH)(e.vendor)}}}function H(e){return e.endsWith("s")?`${e}'`:`${e}'s`}let E=new Map([["openai",OpenAIProvider],["anthropic",AnthropicProvider],["gemini",GeminiProvider]]);(0,l.Av)("language-models")&&E.set("vscode",VSCodeAIProvider);let AIProviderService=class AIProviderService{constructor(e){this.container=e}_provider;_model;dispose(){this._provider?.dispose()}get currentProviderId(){return this._provider?.id}getConfiguredModel(){let e=h.H.get("ai.experimental.model")??void 0;if(null!=e){let[t,n]=e.split(":");if(null!=t&&this.supports(t)&&(null!=n||"vscode"===t&&null!=(n=h.H.get("ai.experimental.vscode.model"))&&/^(.+):(.+)$/.test(n)))return{provider:t,model:n}}}async getModels(){let e=[...E.values()].map(e=>new e(this.container));return(await Promise.allSettled(e.map(e=>e.getModels()))).flatMap(e=>(0,g.Ro)(e,[]))}async getModel(e){let t=this.getConfiguredModel();if(!e?.force&&t?.provider!=null&&t?.model!=null){let e=await this.getOrUpdateModel(t.provider,t.model);if(null!=e)return e}if(e?.silent)return;let n=await c(this.container,t);if(null!=n)return this.getOrUpdateModel(n.model)}async getOrUpdateModel(e,t){let n,a;n="string"==typeof e?e:(a=e).provider.id;let o=!1;if(n!==this._provider?.id){o=!0,this._provider?.dispose();let e=E.get(n);if(null==e){this._provider=void 0,this._model=void 0;return}this._provider=new e(this.container)}if(null==a){if(null!=t&&t===this._model?.id)a=this._model;else if(o=!0,null==(a=(await this._provider.getModels())?.find(e=>e.id===t))){this._model=void 0;return}}else a.id!==this._model?.id&&(o=!0);return o&&(a.provider.id===I.id?(await h.H.updateEffective("ai.experimental.model","vscode"),await h.H.updateEffective("ai.experimental.vscode.model",a.id)):await h.H.updateEffective("ai.experimental.model",`${a.provider.id}:${a.id}`)),this._model=a,a}async generateCommitMessage(e,t){let n=await this.getChanges(e);if(null==n)return;let o=await this.getModel();if(null==o)return;let i=this._provider;if(await _(o,this.container.storage)&&!t?.cancellation?.isCancellationRequested)return t?.progress!=null?a.window.withProgress(t.progress,async()=>i.generateCommitMessage(o,n,{cancellation:t?.cancellation,context:t?.context})):i.generateCommitMessage(o,n,{cancellation:t?.cancellation,context:t?.context})}async generateDraftMessage(e,t){let n=await this.getChanges(e);if(null==n)return;let o=await this.getModel();if(null==o)return;let i=this._provider;if(await _(o,this.container.storage)&&!t?.cancellation?.isCancellationRequested)return t?.progress!=null?a.window.withProgress(t.progress,async()=>i.generateDraftMessage(o,n,{cancellation:t?.cancellation,context:t?.context,codeSuggestion:t?.codeSuggestion})):i.generateDraftMessage(o,n,{cancellation:t?.cancellation,context:t?.context,codeSuggestion:t?.codeSuggestion})}async getChanges(e,t){let n;if(Array.isArray(e))n=e.join("\n");else{let a=(0,s.Z6)(e)?e:this.container.git.getRepository(e);if(null==a)throw Error("Unable to find repository");let o=await this.container.git.getDiff(a.uri,i.id);if(!o?.contents&&(o=await this.container.git.getDiff(a.uri,i.SU),!o?.contents))throw Error("No changes to generate a commit message from.");if(t?.cancellation?.isCancellationRequested)return;n=o.contents}return n}async explainCommit(e,t,n){let i;if("string"==typeof e||e instanceof a.Uri){if("string"!=typeof t||!t)throw Error("Invalid arguments provided");i=await this.container.git.getCommit(e,t)}else{if("string"==typeof t)throw Error("Invalid arguments provided");i=(0,o.WM)(e)?e:await this.container.git.getCommit(e.repoPath,e.ref),n=t}if(null==i)throw Error("Unable to find commit");let s=await this.container.git.getDiff(i.repoPath,i.sha);if(!s?.contents)throw Error("No changes found to explain.");let r=await this.getModel();if(null==r)return;let d=this._provider;if(await _(r,this.container.storage))return(i.hasFullDetails()||(await i.ensureFullDetails(),(0,o.aQ)(i)),n?.progress!=null)?a.window.withProgress(n.progress,async()=>d.explainChanges(r,i.message,s.contents,{cancellation:n?.cancellation})):d.explainChanges(r,i.message,s.contents,{cancellation:n?.cancellation})}async reset(e){let t,{_provider:n}=this;null==n&&(await this.getModel({silent:!0}),n=this._provider);let o={title:"Reset Current"},i={title:"Reset All"},s={title:"Cancel",isCloseAffordance:!0};if(t=e?i:null==n?await a.window.showInformationMessage("Do you want to reset all of the stored AI keys?",{modal:!0},i,s):await a.window.showInformationMessage(`Do you want to reset the stored key for the current provider (${n.name}) or reset all of the stored AI keys?`,{modal:!0},o,i,s),null!=n&&t===o)a.env.clipboard.writeText(await this.container.storage.getSecret(`gitlens.${n.id}.key`)??""),this.container.storage.deleteSecret(`gitlens.${n.id}.key`),this.container.storage.delete(`confirm:ai:tos:${n.id}`),this.container.storage.deleteWorkspace(`confirm:ai:tos:${n.id}`);else if(t===i){let e=[];for(let[t]of E)e.push(await this.container.storage.getSecret(`gitlens.${t}.key`));for(let[t]of(a.env.clipboard.writeText(e.join("\n")),E))this.container.storage.deleteSecret(`gitlens.${t}.key`);this.container.storage.deleteWithPrefix("confirm:ai:tos"),this.container.storage.deleteWorkspaceWithPrefix("confirm:ai:tos")}}supports(e){return E.has(e)}async switchModel(){await this.getModel({force:!0})}};async function _(e,t){if(t.get(`confirm:ai:tos:${e.provider.id}`,!1)||t.getWorkspace(`confirm:ai:tos:${e.provider.id}`,!1))return!0;let n={title:"Continue"},o={title:"Always for this Workspace"},i={title:"Always"},s=await a.window.showInformationMessage(`GitLens experimental AI features require sending a diff of the code changes to ${e.provider.name} for analysis. This may contain sensitive information.

Do you want to continue?`,{modal:!0},n,o,i,{title:"Cancel",isCloseAffordance:!0});return s===n||(s===o?(t.storeWorkspace(`confirm:ai:tos:${e.provider.id}`,!0),!0):s===i&&(t.store(`confirm:ai:tos:${e.provider.id}`,!0),!0))}function N(e,t){let n=3.1*e.maxTokens-t/3.1;return Math.floor(n-.1*n)}async function U(e,t){let n=await e.getSecret(`gitlens.${t.id}.key`);if(!n){let o=a.window.createInputBox();o.ignoreFocusOut=!0;let i=[];try{let e={iconPath:new a.ThemeIcon("link-external"),tooltip:`Open the ${t.name} API Key Page`};n=await new Promise(n=>{i.push(o.onDidHide(()=>n(void 0)),o.onDidChangeValue(e=>{if(e&&!t.validator(e)){o.validationMessage=`Please enter a valid ${t.name} API key`;return}o.validationMessage=void 0}),o.onDidAccept(()=>{let e=o.value.trim();if(!e||!t.validator(e)){o.validationMessage=`Please enter a valid ${t.name} API key`;return}n(e)}),o.onDidTriggerButton(n=>{n===e&&a.env.openExternal(a.Uri.parse(t.url))})),o.password=!0,o.title=`Connect to ${t.name}`,o.placeholder=`Please enter your ${t.name} API key to use this feature`,o.prompt=`Enter your [${t.name} API Key](${t.url} "Get your ${t.name} API key")`,o.buttons=[e],o.show()})}finally{o.dispose(),i.forEach(e=>void e.dispose())}if(!n)return;e.storeSecret(`gitlens.${t.id}.key`,n)}return n}function D(e,t="\n\n"){let n=e.indexOf(t)??0;return{title:n>-1?e.substring(0,n):e,description:n>-1?e.substring(n+t.length):void 0}}}};