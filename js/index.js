var eventFormLinks = [
    "https://docs.google.com/forms/d/e/1FAIpQLSccubg9ThhsmO4ycIrSEzAKEoUj32CAoz6G2h249MmORU7VPg/viewform?embedded=true",
    "https://docs.google.com/forms/d/e/1FAIpQLSfBRzYZt2NBKvo_YjTS-NIXlliA4NMKYJQwjgHqdZ7i6NWxgg/viewform?embedded=true",
    "https://docs.google.com/forms/d/e/1FAIpQLSf-TcQRGKcI4oAfX9rlpMKu40aAMwo5FwZbsPJBP1qw-cFRuw/viewform?embedded=true"
]


var handleModal = (visible, index) => {
    var modal = document.getElementById("modal_1");
    var modalBack = modal.getElementsByClassName("modal-back")[0];
    var modalContent = modal.getElementsByClassName("modal-content")[0];
    modal.style["display"] = "flex";
    modal.style["visibility"] = visible ? "visible": "hidden";

    modalBack.style["opacity"] = visible ? 0.4 : 0;
    modalContent.style["opacity"] = visible ? 1 : 0;
    modal.getElementsByClassName("modal-content")[0].src = index == null? "loading.html" : eventFormLinks[index]
}
