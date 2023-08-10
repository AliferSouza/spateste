 async function teste(props) {


  const state = () => {
    const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}
 
  }

  const html = () =>  ` <div class="wrapper">
  <header>
    <h1>File Downloader</h1>
    <p>Paste url of image, video, or pdf to download. This tool is made with vanilla javascript.</p>
  </header>
  <form action="#">
    <input type="url" placeholder="Paste file url" required>
    <button>Download File</button>
  </form>
</div>`
  

  return { html, state };
}
