
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
import Event from "layouts/event";
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
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/profile",
    component: <Profile/>,
  },
  {
    type: "collapse",
    name: "Creation",
    key: "creation",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/creation",
    component: <Creation />,
  },
  {
    type: "collapse",
    name: "Event",
    key: "event",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/event",
    component: <Event />,
  },
 
  {
    name: "Students",
    key: "students",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/students",
    component: <StudentDetails />,
  },
  {
    name: "Department",
    key: "department",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/department",
    component: <Department />,
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },

];

export default routes;

