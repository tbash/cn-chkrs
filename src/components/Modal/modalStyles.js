const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: 999,
    backgroundColor: "transparent",
  },
  content: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    outline: "none",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
  }
};

export default modalStyles;
