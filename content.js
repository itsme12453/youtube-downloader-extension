// document.body.addEventListener("click", () => {
    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // chrome.scripting.insertCSS({
    //     target: { tabId: tab.id },
    //     func: test,
    // });

    // console.log("a");
// });

function test(){
    document.body.style.backgroundColor = "#ffffff";
}