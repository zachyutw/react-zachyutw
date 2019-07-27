const snapVideo = (videoNode) => {
    var el = document.createElement('canvas');
    el.setAttribute('width', videoNode.videoWidth);
    el.setAttribute('height', videoNode.videoHeight);
    document.body.appendChild(el);

    el.getContext('2d').drawImage(videoNode, 0, 0, videoNode.videoWidth, videoNode.videoHeight);
    var base64Url = el.toDataURL('image/png');
    document.body.removeChild(el);
    return base64Url;
};
export default snapVideo;
