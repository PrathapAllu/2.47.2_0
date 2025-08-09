const a=(e,s={})=>chrome.runtime.sendMessage({messageType:"trackMixpanelEvent",name:e,details:s});export{a as t};
