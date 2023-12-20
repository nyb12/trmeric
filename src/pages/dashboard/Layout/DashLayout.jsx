import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const MainContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ResponsiveDrawer = () => {
  const theme = useTheme();
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const toggleDrawer = (side, open) => () => {
    if (side === "left") {
      setOpenLeft(open);
    } else {
      setOpenRight(open);
    }
  };

  const renderAppBarIcons = () => (
    <>
      <IconButton
        color="inherit"
        aria-label="open left drawer"
        onClick={toggleDrawer("left", !openLeft)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Your App
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <IconButton
        color="inherit"
        aria-label="open right drawer"
        onClick={toggleDrawer("right", !openRight)}
        edge="end"
      >
        <MenuIcon />
      </IconButton>
    </>
  );

  const renderAppBarText = () => (
    <>
      <IconButton
        color="inherit"
        aria-label="open left drawer"
        onClick={toggleDrawer("left", !openLeft)}
        edge="start"
      >
        {openLeft ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Your App
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <IconButton
        color="inherit"
        aria-label="open right drawer"
        onClick={toggleDrawer("right", !openRight)}
        edge="end"
      >
        {openRight ? <ChevronRightIcon /> : <MenuIcon />}
      </IconButton>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {openLeft || openRight ? renderAppBarText() : renderAppBarIcons()}
        </Toolbar>
      </MuiAppBar>
      <MuiDrawer
        variant="temporary"
        anchor="left"
        open={openLeft}
        onClose={toggleDrawer("left", false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer("left", false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Left Sidebar Content */}
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItemButton>
        </List>
      </MuiDrawer>
      <MainContent
        sx={{
          marginLeft: openLeft ? `${drawerWidth}px` : "0",
          marginRight: openRight ? `${drawerWidth}px` : "0",
        }}
      >
        <DrawerHeader />
        {/* Main Content */}
        <Typography variant="h5" gutterBottom component="div">
          Main Content
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
          fugit exercitationem totam a molestiae debitis, quibusdam modi ad vel
          mollitia nihil quod animi magnam incidunt cum minima dicta non sit ea
          eos delectus. Sit veritatis quos, exercitationem dolorem sapiente eos
          nemo, dolores placeat esse corrupti, tenetur non. Inventore
          accusantium distinctio rem necessitatibus optio fugiat magnam
          veritatis autem ipsum sequi. Ea molestiae, repellat fugit labore
          nesciunt distinctio velit possimus aut facilis, illum, dolores vero
          nisi cupiditate! Consectetur eius, eos dolorum quidem unde temporibus
          dolorem illo adipisci tenetur voluptates harum quia! Qui illum sunt
          iure hic maxime, et asperiores explicabo dolor nam debitis recusandae
          ab molestiae non blanditiis dicta incidunt quidem voluptatibus alias
          placeat accusamus minima harum perferendis. Doloremque cupiditate quam
          officiis numquam quisquam aliquam! Quas magni nisi eos amet itaque
          eveniet vitae tenetur non dignissimos voluptatum at, pariatur cum
          repellendus quam, aperiam deserunt velit mollitia molestiae ad quis
          nihil nobis, assumenda provident modi! Modi odio aperiam quas, laborum
          fugiat eveniet deleniti, repellat vel laboriosam iure hic
          exercitationem, saepe delectus minima voluptatibus totam adipisci illo
          aliquid nulla quaerat voluptates dicta quia! Blanditiis voluptatem
          assumenda officiis ex aut quasi. Inventore magnam debitis, illo est
          eius possimus commodi nisi dolor necessitatibus veritatis repellat
          dolorem quisquam ad accusantium sequi! Veniam, molestias. Repellendus
          temporibus doloremque a dolores ducimus voluptates officiis
          exercitationem, cum iusto eveniet blanditiis excepturi ad voluptatibus
          sequi nemo, dolore autem, laboriosam odit ipsum error earum iste
          corrupti! Odio recusandae soluta numquam accusantium tempora non ad,
          sapiente nobis laboriosam corporis aliquam vero consequuntur unde
          doloribus ab quaerat nihil blanditiis fuga magni a vitae est
          dignissimos sint consectetur. Labore ex quae eaque? Nam cum optio illo
          facilis eum, voluptatibus velit at. Quasi ipsum recusandae blanditiis,
          beatae facilis est aperiam cumque deserunt odit. Amet, ullam.
          Blanditiis nostrum voluptas quis ratione laudantium quidem aliquam
          quam repudiandae alias ducimus vitae iure, perspiciatis quasi
          reprehenderit doloribus delectus unde accusantium maiores beatae
          similique asperiores neque officia. Eaque illum aliquid fuga quisquam
          perspiciatis, hic, ducimus provident amet reprehenderit veniam
          consequatur quo quos sint officia dicta, assumenda necessitatibus
          debitis fugiat commodi porro? Et suscipit eius consectetur? Qui id
          vitae quas ab modi vero optio repudiandae quisquam sequi corporis
          animi quam, quibusdam inventore laborum, molestias sed ipsum, officiis
          quod distinctio necessitatibus voluptas libero ratione aliquam.
          Repellat quia exercitationem omnis rem iure quaerat magni, similique
          aspernatur! Quam officiis impedit ad omnis eveniet ex non illum enim
          iure numquam quia nulla corrupti, repellat aperiam praesentium illo
          atque deserunt, autem debitis! Facilis, accusamus eligendi voluptates
          incidunt ratione eaque quam expedita quaerat nobis corporis rem alias,
          dolor repellendus aliquam labore accusantium sit possimus. Aspernatur
          fugit similique, aut nobis obcaecati at numquam autem repellendus
          laudantium tenetur eos quisquam, facere reiciendis blanditiis sunt
          provident. Fuga deleniti dicta vitae temporibus, eos a accusamus cum
          accusantium nemo quibusdam pariatur optio delectus doloribus excepturi
          in ex nisi rerum! Impedit sunt enim deserunt laudantium iste quo,
          repellendus neque numquam unde! Obcaecati praesentium rerum quisquam
          repudiandae aliquam perferendis, enim quam? At asperiores quaerat
          saepe numquam laudantium, libero a. Unde fugiat placeat odit nulla
          officia exercitationem.
        </Typography>
      </MainContent>
      <MuiDrawer
        variant="temporary"
        anchor="right"
        open={openRight}
        onClose={toggleDrawer("right", false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer("right", false)}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Right Sidebar Content */}
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItemButton>
        </List>
      </MuiDrawer>
    </Box>
  );
};

export default ResponsiveDrawer;
