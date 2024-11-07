import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Breadcrumbs,
  Link,
  Avatar,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
  Chip,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  AttachMoney as AttachMoneyIcon,
  Description as DescriptionIcon,
  BarChart as BarChartIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Whatshot as WhatshotIcon,
  Grain as GrainIcon,
  Notifications as NotificationsIcon,
  FilterAlt as FilterAltIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

function IconBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </Link>
        <Typography
          sx={{ color: "text.primary", display: "flex", alignItems: "center" }}
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

function DrawerContent() {
  return (
    <div>
      <Toolbar
        sx={{
          minHeight: "50px!important",
        }}
      />

      <List>
        {[
          "Painel de Desempenho",
          "Negociações",
          "Cadastros",
          "CRM",
          "Relatórios",
        ].map((text, index) => (
          <ListItem
            key={text}
            sx={{
              ".MuiListItemIcon-root": {
                minWidth: "40px",
              },
            }}
          >
            <ListItemIcon>
              {index === 0 ? (
                <DashboardIcon />
              ) : index === 1 ? (
                <ShoppingCartIcon />
              ) : index === 2 ? (
                <PeopleIcon />
              ) : index === 3 ? (
                <AttachMoneyIcon />
              ) : index === 4 ? (
                <DescriptionIcon />
              ) : (
                <BarChartIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "primary.main",
          borderBottom: (theme) => theme.palette.grey[300] + " solid 1px",
          height: "50px",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            minHeight: "50px!important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="default"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Força de Vendas
              </Typography>
              <Typography
                color="textSecondary"
                fontWeight="bold"
                variant="body2"
                noWrap
                component="div"
                sx={{ ml: 2 }}
              >
                0.0.0-dev
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "400px",
              }}
            >
              <Autocomplete
                fullWidth
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Selecione uma licença..."
                    variant="standard"
                  />
                )}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton color="default">
                <NotificationsIcon />
              </IconButton>
              <IconButton>
                <Avatar>GD</Avatar>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          height: "100vh",
          bgcolor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar
          sx={{
            minHeight: "34px!important",
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            bgcolor: (theme) => theme.palette.common.white,
            mx: -2,
            px: 2,
          }}
        >
          <IconBreadcrumbs />

          <Tabs value={1} aria-label="basic tabs example">
            <Tab label="Tab One" />
            <Tab label="Tab Two" />
            <Tab label="Tab Three" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton>
              <FilterAltIcon />
            </IconButton>
            <Chip
              label="Data: 01/01/2024 até 01/12/2024"
              variant="outlined"
              onClick={() => undefined}
              onDelete={() => undefined}
            />
            <Chip
              label="Ativo: Sim"
              variant="outlined"
              onClick={() => undefined}
              onDelete={() => undefined}
            />
            <Chip
              label="Pesquisar por: Cliente"
              variant="outlined"
              onClick={() => undefined}
              onDelete={() => undefined}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              fullWidth={false}
              placeholder="Pesquisar..."
              variant="standard"
              sx={{ mr: 2, width: "150px" }}
            />
            <Button variant="contained">Adicionar</Button>
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Situação</TableCell>
                <TableCell>Vendedor</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Forma Pagamento</TableCell>
                <TableCell>Condição Pagamento</TableCell>
                <TableCell>Observação</TableCell>
                <TableCell>Total (R$0,00)</TableCell>
                <TableCell>Comentários</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={11} align="center">
                  Nenhum registro encontrado
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 2,
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="rows-per-page-label">Linhas</InputLabel>
            <Select
              labelId="rows-per-page-label"
              id="rows-per-page"
              value={15}
              label="Linhas"
            >
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "300px",
          p: 1,
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: (theme) => theme.shape.borderRadius,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            boxShadow: 2,
          }}
        >
          <Typography textAlign="center">Ambiente</Typography>
          <Divider />
          <Autocomplete
            fullWidth
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Selecione uma empresa..."
                variant="standard"
              />
            )}
          />
          <TextField variant="standard" type="date" />
          <TextField variant="standard" type="date" />
          <TextField placeholder="yyyy/MM" variant="standard" />
        </Box>
      </Box>
    </Box>
  );
}
