import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Tooltip, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  borderRadius: "5px",
  border: "1px solid #6c6c6c",
  p: 2,
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  titleTooltip: string;
  placement:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | undefined;
  showTooltip?: boolean;
}

export default function CustomModal({
  open,
  onClose,
  title,
  content,
  titleTooltip,
  placement,
  showTooltip = true,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"600"}
          >
            {title}
          </Typography>
          {showTooltip && (
            <Tooltip title={titleTooltip} placement={placement}>
              <Button style={{ paddingLeft: 0 }}>
                <img src="/info-icon.svg" width={25} />
              </Button>
            </Tooltip>
          )}
        </Box>
        <Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
