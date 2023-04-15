
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Creation from "layouts/creation";

// @mui icons
import Icon from "@mui/material/Icon";
import Department from "layouts/department";
import Sports from "layouts/sports";
import StudentDetails from "layouts/student";
// import { NgController, NavGroup, NavItem } from "navgroups";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  
  {
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/profile",
    component: <Profile/>,
  },
  {
    type: "collapse",
    name: "Sports",
    key: "sports",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/sports",
    component: <Sports />,
  },
 
  {
    type: "collapse",
    name: "Students",
    key: "students",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/students",
    component: <StudentDetails />,
  },
  {
    type: "collapse",
    name: "Department",
    key: "department",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/department",
    component: <Department />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Creation",
    key: "creation",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/creation",
    component: <Creation />,
  },
];

export default routes;

