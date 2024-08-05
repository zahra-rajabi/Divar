import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Confirm({ open, setOpen, setShow, refetch }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const exitHandler = async () => {
    console.log("exit");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/");
    setOpen(false);
    setShow(false);
    await refetch("profile");
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        style={{ fontFamily: "inherit" }}
        id="draggable-dialog-title"
      >
        تأیید خروج
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontFamily: "inherit" }}>
          آیا میخواهید از حساب کاربری خود خارج شوید؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={exitHandler}
          style={{
            fontFamily: "inherit",
            color: "#a62626",
            marginLeft: "4px",
          }}
        >
          خارج شدن
        </Button>
        <Button
          onClick={handleClose}
          style={{
            fontFamily: "inherit",
            backgroundColor: "#a62626",
            color: "white",
          }}
        >
          لغو
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;
