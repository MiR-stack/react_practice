function PopupBg({ popup, setPopup }) {
  return (
    <div
      className={`popupbg ${popup ? "d-flex" : "d-none"}`}
      onClick={() => setPopup("false")}
    ></div>
  );
}

export default PopupBg;
