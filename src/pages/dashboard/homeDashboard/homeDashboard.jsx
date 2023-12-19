import React from "react";
import AccordionCard from "../../../components/common/AccordionCard/AccordionCards";
import Modal from "../../../components/common/Modal/modal";
import Multitabs from "../../../components/common/MultiTabs/Multitabs";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Page from "../../../components/common/sidemenu/Page";
import Box from "@mui/material/Box";
import Layout from "../../../components/common/layout/Layout";
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Page></Page>;
    case 1:
      return "";
    case 2:
      return "";
    default:
      return "Unknown step";
  }
}

function HomeDashboard() {
  return (
    <div>
      <Layout />
      <Box
        component="main"
        className="flex-center"
        sx={{
          flexGrow: 1,
          p: 2,
          marginLeft: "150px",
          marginTop: "100px",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            background: "#ff",
            marginLeft: "1%",
            padding: "4%",
            width: "90%",
          }}
        >
          <Typography paragraph>
            {getStepContent(0)}
            {/* Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Consequat
          mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
          viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu
          facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
          odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan
          in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
          Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a. Consequat mauris nunc congue nisi
          vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
          dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed odio
          morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec
          nam aliquam sem et tortor. Habitant morbi tristique senectus et.
          Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
          euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
          ultrices sagittis orci a. */}
          </Typography>
          <AccordionCard />
          <Typography sx={{ mt: "50px" }} paragraph>
            {/* Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a. Consequat
          mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
          viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu
          facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate
          odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan
          in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
          Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a. Consequat mauris nunc congue nisi
          vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
          dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
          sit amet volutpat consequat mauris. Elementum eu facilisis sed odio
          morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec
          nam aliquam sem et tortor. Habitant morbi tristique senectus et.
          Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
          euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
          ultrices sagittis orci a. */}
          </Typography>
          <Box>
            <Modal />
          </Box>
          <Box sx={{ mt: "20px" }}>
            <Multitabs />
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default HomeDashboard;
