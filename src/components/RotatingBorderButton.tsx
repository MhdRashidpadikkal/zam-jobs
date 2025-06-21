"use client";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const RotatingBorderBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "inline-flex",
  borderRadius: "8px",
  padding: "2px", // exact border thickness = 2px
  "::before": {
    content: '""',
    position: "absolute",
    height: "300px",
    width: "300px",
    top: "-100px",
    left: "-100px",
    zIndex: 0,
    borderRadius: "50%",
    background: `linear-gradient(135deg, rgba(59, 130, 246, 1), #002D62)`,
    animation: "rotate 8s linear infinite",
  },
  "@keyframes rotate": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
}));

const InnerBox = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
  borderRadius: "6px",
  backgroundColor: "#fff",
}));

const RotatingBorderButton = () => {
  return (
    <RotatingBorderBox>
      <InnerBox>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            minWidth: 160,
            height: 50,
            fontSize: "1rem",
            backgroundColor: "white",
            color: "black",
            fontWeight: 600,
            paddingX: 2,
            "&:hover": {
              backgroundColor: "#f0f0f0",
              transform: "translateY(-2px)",
            },
          }}
        >
          Apply Now
        </Button>
      </InnerBox>
    </RotatingBorderBox>
  );
};

export default RotatingBorderButton;
