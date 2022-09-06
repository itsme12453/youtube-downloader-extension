chrome.runtime.onInstalled.addListener(() => {
    console.log("Started");
});

chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab){
    if (changeInfo.status == "complete"){
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: testF,
        });

        console.log("done");
    }
})

function testF(){
    imgSrc = "https://i.imgur.com/quiWyXQ.png";

    let button = `
        <button draggable="false" id="downloadVideoExtension" class="playerButton ytp-button" title="Download This Video" style="display: unset;"><img id="downloadVideoExtensionImg" class="playerButtonImage" style="filter: invert(1);" src=${imgSrc}></button>`
    document.querySelector(".ytp-right-controls").insertAdjacentHTML("beforebegin", button);
}